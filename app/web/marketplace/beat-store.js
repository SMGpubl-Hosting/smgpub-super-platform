export const renderBeatStore = (containerId) => {
    const beats = [
        { id: 1, title: 'Quantum Bass', price: 299, bpm: 140 },
        { id: 2, title: 'Neon Soul', price: 150, bpm: 95 }
    ];

    const container = document.getElementById(containerId);
    container.innerHTML = beats.map(beat => `
        <div class="audio-card">
            <h3>${beat.title}</h3>
            <p>${beat.bpm} BPM</p>
            <button onclick="initiatePurchase(${beat.id})">$${beat.price} License</button>
        </div>
    `).join('');
};
