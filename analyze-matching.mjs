import fs from 'fs';

const content = fs.readFileSync('./constants.ts', 'utf8');
const locationRegex = /"location":\s*"([^"]+)"/g;
const locations = new Set();
let match;
while ((match = locationRegex.exec(content)) !== null) {
    locations.add(match[1]);
}

// Comprehensive city database for SEA
const CITY_DATABASE = {
    'singapore': true,
    'kuala lumpur': true,
    'johor bahru': true,
    'petaling jaya': true,
    'shah alam': true,
    'penang': true,
    'bukit jalil': true,
    'bangkok': true,
    'chiang mai': true,
    'jakarta': true,
    'bsd city': true,
    'tangerang': true,
    'surabaya': true,
    'kemayoran': true,
    'ho chi minh city': true,
    'hanoi': true,
    'da nang': true,
    'quy nhon': true,
    'da lat': true,
    'vietnam': true,
    'phnom penh': true,
    'manila': true,
    'pasay': true,
    'pasay city': true,
    'taguig': true,
    'taguig (metro manila)': true,
    'cebu': true,
    'bgc': true,
    'metro manila': true,
    'pasay (metro manila)': true,
    'vientiane': true,
    'luang prabang': true,
    'yangon': true,
    'nay pyi taw': true,
    'bandar seri begawan': true,
    'nanning': true,
    'shanghai (china)': true,
    'hanoi/singapore': true,
};

const sortedCities = Object.keys(CITY_DATABASE).sort((a, b) => b.length - a.length);

function extractCity(location) {
    if (!location || location === '—' || location.includes('TBD') || location.includes('TBA')) {
        return null;
    }

    const parts = location.split(',').map(p => p.trim()).filter(p => p.length > 0);
    if (parts.length === 0) return null;

    // Handle special cases with venue codes at the start (e.g., "45687, ...")
    if (/^\d+$/.test(parts[0])) {
        if (parts.length > 1) {
            const venuePart = parts[1].toLowerCase();
            for (const city of sortedCities) {
                if (venuePart.includes(city)) {
                    return city;
                }
            }
        }
    }

    let cityCandidate = parts[parts.length - 1].toLowerCase();
    if (CITY_DATABASE[cityCandidate]) {
        return cityCandidate;
    }

    const locationLower = location.toLowerCase();
    for (const city of sortedCities) {
        if (locationLower.includes(city)) {
            return city;
        }
    }

    return null;
}

const matched = [];
const unmatched = [];

for (const loc of locations) {
    const city = extractCity(loc);
    if (city) {
        matched.push({ location: loc, city });
    } else {
        unmatched.push(loc);
    }
}

console.log('=== MATCHED LOCATIONS ===');
console.log(`Total: ${matched.length}`);

console.log('\n=== UNMATCHED LOCATIONS ===');
console.log(`Total: ${unmatched.length}`);
unmatched.forEach(loc => console.log(`  - ${loc}`));
