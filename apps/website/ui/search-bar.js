/**
 * SMGPUB UI: Global Search Bar
 * Path: /apps/website/ui/search-bar.js
 */

export const SearchBar = (onSearch) => {
    let debounceTimer;

    const handleInput = (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value;
        
        // Wait 300ms after user stops typing to fire the API call
        debounceTimer = setTimeout(() => {
            onSearch(query);
        }, 300);
    };

    return `
        <div class="search-container" style="margin-bottom: 2rem; position: relative;">
            <input 
                type="text" 
                id="globalSearch" 
                placeholder="Search by Artist, BPM (e.g. 128), or Key (e.g. Am)..." 
                style="width: 100%; padding: 1.2rem; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); color: white; font-size: 1rem;"
                oninput="window.executeSearch(event)"
            />
            <div style="position: absolute; right: 20px; top: 18px; color: var(--color-muted);">🔍</div>
        </div>
    `;
};
