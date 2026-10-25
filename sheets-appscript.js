/* ============================================================
   NorthWeb Co. — Google Apps Script
   File: sheets-appscript.js  (paste this into Apps Script editor)
   v5: Separate columns for Setup Fee, Monthly Fee, Add-ons
   ============================================================

   COLUMNS:
   A: Timestamp
   B: Name
   C: Phone
   D: Business
   E: Service
   F: Setup Fee      ← NEW (was buried inside Message)
   G: Monthly Fee    ← NEW
   H: Add-ons        ← NEW (all selected features)
   I: Message        (customer's own message only, clean)
   J: Status

   SETUP STEPS:
   1. Google Sheet खोलो → Extensions → Apps Script
   2. यह पूरा code paste करो (पुराना delete करो)
   3. Run → setupSheet()  (first time only — tab + headers बनेगा)
   4. Deploy → New deployment → Web App
        Execute as: Me
        Who has access: Anyone
   5. URL copy करो → js/sheets.js के SHEETS_CONFIG.url में paste करो
   ============================================================ */

function setupSheet() {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  let   sheet  = ss.getSheetByName('Appointments');

  if (!sheet) {
    sheet = ss.insertSheet('Appointments');
  }

  // Set header row only if row 1 col A is empty
  if (!sheet.getRange('A1').getValue()) {
    const headers = [
      'Timestamp', 'Name', 'Phone', 'Business', 'Service',
      'Setup Fee', 'Monthly Fee', 'Add-ons', 'Message', 'Status'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Style header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#1a5276');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');

    // Set column widths
    sheet.setColumnWidth(1, 160);  // Timestamp
    sheet.setColumnWidth(2, 130);  // Name
    sheet.setColumnWidth(3, 120);  // Phone
    sheet.setColumnWidth(4, 140);  // Business
    sheet.setColumnWidth(5, 100);  // Service
    sheet.setColumnWidth(6, 110);  // Setup Fee
    sheet.setColumnWidth(7, 120);  // Monthly Fee
    sheet.setColumnWidth(8, 260);  // Add-ons
    sheet.setColumnWidth(9, 240);  // Message
    sheet.setColumnWidth(10, 80);  // Status

    // Freeze header row
    sheet.setFrozenRows(1);
  }

  SpreadsheetApp.getUi().alert('✅ Sheet setup done! Headers and columns are ready.');
}

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Appointments');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Sheet "Appointments" not found. Run setupSheet() first.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const p = e.parameter;

    // Build timestamp in IST
    const now = new Date();
    const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    const ts  = Utilities.formatDate(ist, 'Asia/Kolkata', 'dd/MM/yyyy, HH:mm:ss');

    const row = [
      ts,
      p.name         || '',
      p.phone        || '',
      p.business     || '',
      p.service      || '',
      p.setup_fee    || '',   // e.g. "₹17,999"
      p.monthly_fee  || '',   // e.g. "₹2,499/mo"
      p.addons       || '',   // e.g. "+2 categories → ₹998 setup | Local SEO: +₹3,999/mo"
      p.message      || '',   // customer's own message, clean
      'New'
    ];

    sheet.appendRow(row);

    // Highlight new row alternating color
    const lastRow = sheet.getLastRow();
    const rowColor = lastRow % 2 === 0 ? '#eaf4fb' : '#fdfefe';
    sheet.getRange(lastRow, 1, 1, row.length).setBackground(rowColor);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('NorthWeb Sheets endpoint is live ✅')
    .setMimeType(ContentService.MimeType.TEXT);
}
