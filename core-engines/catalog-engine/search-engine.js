/**
 * SMGPUB CATALOG SEARCH ENGINE
 * Path: /core-engines/catalog-engine/search-engine.js
 */

const Track = require('../../database/schemas/tracks');

export const performAdvancedSearch = async (query) => {
    let mongoQuery = {};

    // 1. Detect if the query is a number (BPM Search)
    if (!isNaN(query)) {
        const bpm = parseInt(query);
        mongoQuery = { "ai_metadata.bpm": { $gte: bpm - 5, $lte: bpm + 5 } };
    } 
    // 2. Detect if the query matches a Musical Key (e.g., Am, C#m, G)
    else if (query.match(/^[A-G][#b]?[m]?$/)) {
        mongoQuery = { "ai_metadata.musical_key": query };
    } 
    // 3. Default to Text Search (Artist, Title, Genre)
    else {
        mongoQuery = {
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { artist: { $regex: query, $options: 'i' } },
                { "ai_metadata.primaryGenre": { $regex: query, $options: 'i' } }
            ]
        };
    }

    return await Track.find(mongoQuery).limit(20);
};
