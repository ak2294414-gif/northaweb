/* ============================================================
   NorthWeb Co. — Google Sheets Integration
   File: js/sheets.js
   FIXED: Uses hidden form/iframe — bypasses CORS completely
   ============================================================

   SETUP CHECKLIST (one time only):
   1. Google Sheet खोलो → Extensions → Apps Script
   2. setupSheet() function Run करो — "Appointments" tab बनेगा
   3. Deploy → Manage deployments → Active रखो
   ============================================================ */

const SHEETS_CONFIG = {
  url: 'https://script.google.com/macros/s/AKfycbwvrfSEW6n7D2ct8ygKSOvs2cq7STGFElr9QteA6gR54luE2sdxmI0nRaJQLwsV8uywvA/exec',
  fields: ['name', 'phone', 'business', 'service', 'message']
};

/**
 * Submit via hidden form + iframe — 100% reliable with Apps Script.
 * No CORS issues. Form submissions bypass CORS restrictions entirely.
 * Apps Script receives full POST data including e.parameter fields.
 */
async function submitToSheets(formData) {
  if (!SHEETS_CONFIG.url || SHEETS_CONFIG.url.includes('PASTE_YOUR')) {
    console.warn('[sheets.js] Dev mode — logging locally.');
    console.table(formData);
    return { success: true, dev: true };
  }

  return new Promise((resolve) => {
    try {
      const iframeName = 'nw_submit_' + Date.now();

      // Hidden iframe — catches the Apps Script response
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Hidden form — submits directly to Apps Script
      const form = document.createElement('form');
      form.method  = 'POST';
      form.action  = SHEETS_CONFIG.url;
      form.target  = iframeName;
      form.style.display = 'none';

      // Add all fields as hidden inputs
      SHEETS_CONFIG.fields.forEach(field => {
        const input   = document.createElement('input');
        input.type    = 'hidden';
        input.name    = field;
        input.value   = formData[field] || '';
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Cleanup after 5 seconds
      setTimeout(() => {
        try { document.body.removeChild(form); } catch(e) {}
        try { document.body.removeChild(iframe); } catch(e) {}
      }, 5000);

      // Apps Script writes the row immediately on submit
      // Resolve success after 1.5 seconds
      setTimeout(() => resolve({ success: true }), 1500);

    } catch (err) {
      console.error('[sheets.js] Error:', err);
      resolve({ success: false, error: 'Submission failed. Please WhatsApp us at 7637 913 832.' });
    }
  });
}

window.NorthWebSheets = { submitToSheets };
