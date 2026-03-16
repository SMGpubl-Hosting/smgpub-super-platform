import { SearchBar } from '../ui/search-bar.js';
import { AudioCard } from '../ui/audio-card.js';

// Attach to window so the HTML 'oninput' can see it
window.executeSearch = async (event) => {
    const query = event.target.value;
    if (query.length < 2) return;

    // Call your backend API: /api/catalog/search?q=...
    const response = await fetch(`/api/catalog/search?q=${query}`);
    const results = await response.json();
    
    // Re-render the track grid with new results
    const grid = document.getElementById('trackGrid');
    grid.innerHTML = results.map(track => AudioCard(track)).join('');
};
