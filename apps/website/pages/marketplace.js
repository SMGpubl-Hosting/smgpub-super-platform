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
window.executeSearch = async (event) => {
    const query = event.target.value;
    const searchContainer = document.querySelector('.search-container');
    
    if (query.length < 2) {
        searchContainer.classList.remove('is-loading');
        return;
    }

    // Start "AI Glow"
    searchContainer.classList.add('is-loading');

    try {
        const response = await fetch(`/api/catalog/search?q=${encodeURIComponent(query)}`);
        const results = await response.json();
        
        const grid = document.getElementById('trackGrid');
        grid.innerHTML = results.length > 0 
            ? results.map(track => AudioCard(track)).join('')
            : `<p style="padding: 2rem; text-align: center;">No tracks found matching "${query}"</p>`;
            
    } catch (error) {
        console.error("Search failed", error);
    } finally {
        // Stop "AI Glow"
        searchContainer.classList.remove('is-loading');
    }
};

};
