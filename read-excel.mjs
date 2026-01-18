import XLSX from 'xlsx';
import { fileURLToPath } from 'url';

const filePath = 'C:/Users/zsver/Documents/+++Nusantara Events+++/trade shows database.xlsx';

try {
    const workbook = XLSX.readFile(filePath);
    console.log('Sheet names:', workbook.SheetNames);

    let allEvents = [];

    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        // Ensure we get raw values to avoid parsing issues, but xlsx usually handles it well
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log(`Sheet "${sheetName}" has ${data.length} rows.`);
        allEvents = allEvents.concat(data);
    });

    console.log(`\n--- TOTAL EVENTS FOUND: ${allEvents.length} ---\n`);

    if (allEvents.length > 0) {
        console.log('--- SAMPLE START ---');
        console.log(JSON.stringify(allEvents.slice(0, 2), null, 2));
        console.log('--- SAMPLE END ---');
        console.log(JSON.stringify(allEvents.slice(-2), null, 2));
    }

} catch (error) {
    console.error('Error reading file:', error.message);
}
