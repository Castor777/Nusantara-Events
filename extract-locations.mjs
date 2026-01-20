import fs from 'fs';

const content = fs.readFileSync('./constants.ts', 'utf8');
const locations = new Set();
const regex = /"location":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    locations.add(match[1]);
}

const sortedLocations = Array.from(locations).sort();
console.log(`Total unique locations: ${sortedLocations.length}`);
console.log('\nAll unique locations:');
sortedLocations.forEach(l => console.log(`  "${l}"`));
