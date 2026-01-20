// Diagnostic script to check why events aren't showing on map
import fs from 'fs';

const content = fs.readFileSync('./constants.ts', 'utf8');

// Extract all locations from events
const locationRegex = /"location":\s*"([^"]+)"/g;
const allLocations = [];
let match;
while ((match = locationRegex.exec(content)) !== null) {
    allLocations.push(match[1]);
}

// City database from geocoding.ts
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

const VENUE_TO_CITY = {
    'sands expo': 'singapore',
    'marina bay sands': 'singapore',
    'singapore expo': 'singapore',
    'mitec': 'kuala lumpur',
    'klcc': 'kuala lumpur',
    'secc': 'ho chi minh city',
    'bitec': 'bangkok',
    'impact': 'bangkok',
    'qsncc': 'bangkok',
    'queen sirikit': 'bangkok',
    'jiexpo': 'jakarta',
    'ice bsd': 'jakarta',
    'jcc': 'jakarta',
    'i.c.e': 'hanoi',
    'ice hanoi': 'hanoi',
    'philippine international convention': 'manila',
    'smx convention': 'manila',
    'wtc metro manila': 'manila',
    'world trade center metro manila': 'manila',
    'lao-itecc': 'vientiane',
    'diamond island': 'phnom penh',
    'yangon convention': 'yangon',
};

const sortedCities = Object.keys(CITY_DATABASE).sort((a, b) => b.length - a.length);
const sortedVenues = Object.keys(VENUE_TO_CITY).sort((a, b) => b.length - a.length);

function extractCity(location) {
    if (!location || location === '—' || location.includes('TBD') || location.includes('TBA')) {
        return null;
    }

    const parts = location.split(',').map(p => p.trim()).filter(p => p.length > 0);
    if (parts.length === 0) return null;

    // Handle special cases with venue codes at the start
    if (/^\d+$/.test(parts[0])) {
        if (parts.length > 1) {
            const venuePart = parts[1].toLowerCase();
            for (const venueName of sortedVenues) {
                if (venuePart.includes(venueName)) {
                    return VENUE_TO_CITY[venueName];
                }
            }
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

    for (const venueName of sortedVenues) {
        if (locationLower.includes(venueName)) {
            return VENUE_TO_CITY[venueName];
        }
    }

    return null;
}

// Analyze all locations
const matched = [];
const unmatched = [];

for (const loc of allLocations) {
    const city = extractCity(loc);
    if (city) {
        matched.push({ location: loc, city });
    } else {
        unmatched.push(loc);
    }
}

console.log('=== TOTAL EVENTS ===');
console.log(`Total event locations: ${allLocations.length}`);

console.log('\n=== MATCHED ===');
console.log(`Matched: ${matched.length} (${(matched.length / allLocations.length * 100).toFixed(1)}%)`);

// Group by city
const byCity = {};
matched.forEach(m => {
    if (!byCity[m.city]) byCity[m.city] = [];
    byCity[m.city].push(m.location);
});

console.log('\nEvents by city:');
Object.entries(byCity).sort((a, b) => b[1].length - a[1].length).forEach(([city, locs]) => {
    console.log(`  ${city}: ${locs.length} events`);
});

console.log('\n=== UNMATCHED ===');
console.log(`Unmatched: ${unmatched.length}`);
if (unmatched.length > 0) {
    console.log('\nUnmatched locations:');
    unmatched.forEach(loc => console.log(`  - "${loc}"`));
}
