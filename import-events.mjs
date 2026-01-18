import XLSX from 'xlsx';
import fs from 'fs';

const filePath = 'C:/Users/zsver/Documents/+++Nusantara Events+++/trade shows database.xlsx';
const outputPath = 'C:/Users/zsver/.gemini/antigravity/scratch/Nusantara-Events-main/constants.ts';

// Industry Mapping - Maps Excel sheet names/industries to granular categories
const CATEGORY_MAP = {
    // AI & ML
    'AI': 'AI & Machine Learning',
    'Artificial Intelligence': 'AI & Machine Learning',
    'Machine Learning': 'AI & Machine Learning',

    // ICT & Telecom
    'ICT': 'ICT & Telecom',
    'Telecom': 'ICT & Telecom',
    'Telecommunications': 'ICT & Telecom',

    // Consumer Electronics
    'Electronics': 'Consumer Electronics',
    'Consumer Electronics': 'Consumer Electronics',

    // Technology & Innovation
    'Technology': 'Technology & Innovation',
    'Tech': 'Technology & Innovation',
    'Innovation': 'Technology & Innovation',
    'Security': 'Technology & Innovation',

    // B2B Trade
    'B2B': 'B2B Trade Shows',
    'Trade Show': 'B2B Trade Shows',
    'Exhibition': 'B2B Trade Shows',

    // Franchising
    'Franchising': 'Franchising & Licensing',
    'Franchise': 'Franchising & Licensing',
    'License': 'Franchising & Licensing',

    // General Trade & Investment
    'General Trade': 'General Trade & Investment',
    'Trade & Investment': 'General Trade & Investment',
    'Investment': 'General Trade & Investment',
    'Trade Expo': 'General Trade & Investment',

    // Business Services
    'Business Services': 'Business Services',
    'Business': 'Business Services',
    'Professional Services': 'Business Services',

    // Manufacturing
    'Manufacturing': 'Manufacturing & Automation',
    'Automation': 'Manufacturing & Automation',
    'Industry & Manufacturing': 'Manufacturing & Automation',

    // Industrial Machinery
    'Industrial Machinery': 'Industrial Machinery',
    'Machinery': 'Industrial Machinery',
    'Industrial': 'Industrial Machinery',

    // Logistics & Shipping
    'Logistics': 'Logistics & Shipping',
    'Shipping': 'Logistics & Shipping',
    'Maritime': 'Logistics & Shipping',
    'logistics&shipping': 'Logistics & Shipping',

    // Construction
    'Construction': 'Construction & Building',
    'Building': 'Construction & Building',

    // Real Estate
    'Real Estate': 'Real Estate & Property',
    'Property': 'Real Estate & Property',

    // Green Energy
    'Green': 'Green Energy & Sustainability',
    'green energy': 'Green Energy & Sustainability',
    'Renewable': 'Green Energy & Sustainability',
    'Sustainability': 'Green Energy & Sustainability',

    // Mining
    'Mining': 'Mining & Minerals',
    'Minerals': 'Mining & Minerals',

    // Water Technology
    'Water': 'Water Technology',
    'Water Technology': 'Water Technology',

    // Energy
    'Energy': 'Energy & Power',
    'Power': 'Energy & Power',

    // Food & Beverage
    'Food': 'Food & Beverage',
    'Beverage': 'Food & Beverage',
    'Food&Beverage': 'Food & Beverage',
    'F&B': 'Food & Beverage',

    // Hospitality & Tourism
    'Hospitality': 'Hospitality & Tourism',
    'Tourism': 'Hospitality & Tourism',
    'Travel': 'Hospitality & Tourism',
    'Hotel': 'Hospitality & Tourism',

    // Halal
    'Halal': 'Halal Products',

    // Fashion
    'Fashion': 'Fashion & Apparel',
    'Apparel': 'Fashion & Apparel',
    'Textile': 'Fashion & Apparel',
    'textiles': 'Fashion & Apparel',

    // Beauty
    'Beauty': 'Beauty & Cosmetics',
    'Cosmetics': 'Beauty & Cosmetics',

    // Furniture
    'Furniture': 'Furniture & Home',
    'Home': 'Furniture & Home',

    // Jewelry
    'Jewelry': 'Jewelry & Accessories',
    'Accessories': 'Jewelry & Accessories',

    // Fintech
    'Fintech': 'Fintech & Banking',
    'Banking': 'Fintech & Banking',
    'Finance': 'Fintech & Banking',
    'Crypto': 'Fintech & Banking',

    // Insurance
    'Insurance': 'Insurance',
    'Insurance&Banking': 'Insurance',

    // Medical & Pharma
    'Medical': 'Medical & Pharma',
    'Pharma': 'Medical & Pharma',
    'Healthcare': 'Medical & Pharma',

    // Science
    'Science': 'Science & Research',
    'Research': 'Science & Research',

    // Agriculture
    'Agriculture': 'Agriculture & Farming',
    'Farming': 'Agriculture & Farming',
    'Agri': 'Agriculture & Farming',

    // Animals & Pets
    'Animals': 'Animals & Pets',
    'Pets': 'Animals & Pets',

    // Entertainment
    'Entertainment': 'Entertainment',

    // Education
    'Education': 'Education & Training',
    'Training': 'Education & Training',

    // Aerospace
    'Aerospace': 'Aerospace & Defense',
    'Defense': 'Aerospace & Defense',
    'Aviation': 'Aerospace & Defense',

    // Startup & VC
    'Startup': 'Startup & VC',
    'VC': 'Startup & VC',
    'Venture': 'Startup & VC'
};

const IMAGE_MAP = {
    'AI & Machine Learning': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    'ICT & Telecom': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'Consumer Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
    'Technology & Innovation': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800',
    'B2B Trade Shows': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    'Franchising & Licensing': 'https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800',
    'General Trade & Investment': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'Business Services': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    'Manufacturing & Automation': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    'Industrial Machinery': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    'Logistics & Shipping': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    'Construction & Building': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    'Real Estate & Property': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    'Green Energy & Sustainability': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    'Mining & Minerals': 'https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800',
    'Water Technology': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    'Energy & Power': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    'Food & Beverage': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    'Hospitality & Tourism': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    'Halal Products': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
    'Fashion & Apparel': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    'Beauty & Cosmetics': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
    'Furniture & Home': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    'Jewelry & Accessories': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    'Fintech & Banking': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    'Insurance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    'Medical & Pharma': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    'Science & Research': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    'Agriculture & Farming': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    'Animals & Pets': 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800',
    'Entertainment': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    'Education & Training': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    'Aerospace & Defense': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    'Startup & VC': 'https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800'
};

const CURRENCY_MAP = {
    'Singapore': 'SGD',
    'Indonesia': 'IDR',
    'Thailand': 'THB',
    'Vietnam': 'USD', // Fallback
    'Malaysia': 'USD', // Fallback
    'Philippines': 'USD', // Fallback
    'Cambodia': 'USD', // Fallback
    'Laos': 'USD', // Fallback
    'Myanmar': 'USD' // Fallback
};

const RATE_MAP = {
    'SGD': 1,
    'IDR': 11800,
    'THB': 26.5,
    'USD': 0.74
};

function excelDateToJSDate(serial) {
    if (!serial || isNaN(serial)) return 'TBA';
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);
    return date_info.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getCategory(industryRaw) {
    if (!industryRaw) return 'B2B Trade Shows';
    const industry = String(industryRaw);
    for (const key in CATEGORY_MAP) {
        if (industry.includes(key)) return CATEGORY_MAP[key];
    }
    return 'B2B Trade Shows'; // Default
}

function processEvents() {
    const workbook = XLSX.readFile(filePath);
    let idCounter = 1;
    let events = [];

    // Prioritize Sheet1 (usually best data)
    const sheets = workbook.SheetNames;

    sheets.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet);

        rows.forEach(row => {
            const name = row['Event Name'];
            if (!name || name.includes('…and 45 more')) return; // Skip footer junk

            const industry = row['Industry'] || sheetName; // Use sheet name if industry missing
            const category = getCategory(industry);
            const country = row['Country']?.trim() || 'Singapore';
            const city = row['City'] || 'Singapore';
            const currency = CURRENCY_MAP[country] || 'USD';

            // Estimations
            const eventType = String(row['Event Type'] || 'B2B');
            const isB2C = eventType.includes('B2C');
            const basePrice = isB2C ? (currency === 'IDR' ? 150000 : 50) : (currency === 'IDR' ? 2500000 : 450);

            // Format price string
            let priceRange = '';
            if (currency === 'IDR') priceRange = `IDR ${basePrice.toLocaleString()}`;
            else if (currency === 'THB') priceRange = `฿${basePrice.toLocaleString()}`;
            else if (currency === 'SGD') priceRange = `S$${basePrice}`;
            else priceRange = `$${basePrice}`;

            events.push({
                id: (idCounter++).toString(),
                name: name,
                description: `${name} is a premier ${industry} event held in ${city}, ${country}. Join industry leaders and innovators at ${row['Venue'] || 'TBA'}.`,
                category: category,
                date: excelDateToJSDate(row['Start Date']),
                location: `${row['Venue'] || 'TBA'}, ${city}`,
                priceRange: priceRange,
                basePrice: basePrice,
                currency: currency,
                predictedTurnout: parseInt(row['Estimated Visitors'] || row['Est. Visitors'] || '5000') || 5000,
                historicalTurnout: [4000, 4500, 4800], // Mock
                sustainabilityScore: 'A',
                website: row['Website'] || '#',
                tags: [industry, country, String(row['Event Type'] || 'B2B')].map(x => String(x)).filter(x => x && x !== 'undefined'),
                featured: idCounter % 15 === 0, // Feature some events
                image: IMAGE_MAP[category]
            });
        });
    });

    return events;
}

const allEvents = processEvents();
console.log(`Examples generated: ${allEvents.length}`);


// Read existing constants.ts to preserve other exports
const currentContent = fs.readFileSync(outputPath, 'utf-8');

// We will construct the new file content. 
// Note: We are replacing the ENTIRE EVENTS_DATA array.
// But we need to keep imports and other exports.

const imports = `import { Event, EventCategory, Sponsorship, Integration, Exhibitor } from './types';\n\n`;

const eventsString = `export const EVENTS_DATA: Event[] = ${JSON.stringify(allEvents, null, 2)
    .replace(/\"category\": \"AI & Machine Learning\"/g, 'category: EventCategory.AI_ML')
    .replace(/\"category\": \"ICT & Telecom\"/g, 'category: EventCategory.ICT_TELECOM')
    .replace(/\"category\": \"Consumer Electronics\"/g, 'category: EventCategory.CONSUMER_ELECTRONICS')
    .replace(/\"category\": \"Technology & Innovation\"/g, 'category: EventCategory.TECH_INNOVATION')
    .replace(/\"category\": \"B2B Trade Shows\"/g, 'category: EventCategory.B2B_TRADE')
    .replace(/\"category\": \"Franchising & Licensing\"/g, 'category: EventCategory.FRANCHISING')
    .replace(/\"category\": \"General Trade & Investment\"/g, 'category: EventCategory.GENERAL_TRADE')
    .replace(/\"category\": \"Business Services\"/g, 'category: EventCategory.BUSINESS_SERVICES')
    .replace(/\"category\": \"Manufacturing & Automation\"/g, 'category: EventCategory.MANUFACTURING')
    .replace(/\"category\": \"Industrial Machinery\"/g, 'category: EventCategory.INDUSTRIAL_MACHINERY')
    .replace(/\"category\": \"Logistics & Shipping\"/g, 'category: EventCategory.LOGISTICS_SHIPPING')
    .replace(/\"category\": \"Construction & Building\"/g, 'category: EventCategory.CONSTRUCTION')
    .replace(/\"category\": \"Real Estate & Property\"/g, 'category: EventCategory.REAL_ESTATE')
    .replace(/\"category\": \"Green Energy & Sustainability\"/g, 'category: EventCategory.GREEN_ENERGY')
    .replace(/\"category\": \"Mining & Minerals\"/g, 'category: EventCategory.MINING_MINERALS')
    .replace(/\"category\": \"Water Technology\"/g, 'category: EventCategory.WATER_TECH')
    .replace(/\"category\": \"Energy & Power\"/g, 'category: EventCategory.ENERGY')
    .replace(/\"category\": \"Food & Beverage\"/g, 'category: EventCategory.FOOD_BEVERAGE')
    .replace(/\"category\": \"Hospitality & Tourism\"/g, 'category: EventCategory.HOSPITALITY_TOURISM')
    .replace(/\"category\": \"Halal Products\"/g, 'category: EventCategory.HALAL')
    .replace(/\"category\": \"Fashion & Apparel\"/g, 'category: EventCategory.FASHION')
    .replace(/\"category\": \"Beauty & Cosmetics\"/g, 'category: EventCategory.BEAUTY')
    .replace(/\"category\": \"Furniture & Home\"/g, 'category: EventCategory.FURNITURE_HOME')
    .replace(/\"category\": \"Jewelry & Accessories\"/g, 'category: EventCategory.JEWELRY')
    .replace(/\"category\": \"Fintech & Banking\"/g, 'category: EventCategory.FINTECH')
    .replace(/\"category\": \"Insurance\"/g, 'category: EventCategory.INSURANCE')
    .replace(/\"category\": \"Medical & Pharma\"/g, 'category: EventCategory.MEDICAL_PHARMA')
    .replace(/\"category\": \"Science & Research\"/g, 'category: EventCategory.SCIENCE')
    .replace(/\"category\": \"Agriculture & Farming\"/g, 'category: EventCategory.AGRICULTURE')
    .replace(/\"category\": \"Animals & Pets\"/g, 'category: EventCategory.ANIMALS_PETS')
    .replace(/\"category\": \"Entertainment\"/g, 'category: EventCategory.ENTERTAINMENT')
    .replace(/\"category\": \"Education & Training\"/g, 'category: EventCategory.EDUCATION')
    .replace(/\"category\": \"Aerospace & Defense\"/g, 'category: EventCategory.AEROSPACE_DEFENSE')
    .replace(/\"category\": \"Startup & VC\"/g, 'category: EventCategory.STARTUP_VC')
    };\n\n`;

// Extract other exports from original file
const otherExports = currentContent.substring(currentContent.indexOf('export const SPONSORSHIPS_DATA'));

const finalContent = imports + eventsString + otherExports;

fs.writeFileSync(outputPath, finalContent);
console.log('Successfully updated constants.ts with ' + allEvents.length + ' events.');
