// Quick script to analyze event locations
import { EVENTS_DATA } from './constants';

const locations = new Set();
EVENTS_DATA.forEach(event => {
    if (event.location) {
        locations.add(event.location);
    }
});

console.log(`Total events: ${EVENTS_DATA.length}`);
console.log(`Events with locations: ${EVENTS_DATA.filter(e => e.location).length}`);
console.log(`Unique locations: ${locations.size}`);
console.log('\nAll unique locations:');
Array.from(locations).sort().forEach(loc => console.log(`  - ${loc}`));
