// apps/creator-studio/royalty-splits/split-calculator.js
import React, { useState } from 'react';

export default function SplitCalculator() {
    const [splits, setSplits] = useState([{ name: 'You', percent: 100 }]);

    const addCollaborator = () => {
        setSplits([...splits, { name: '', percent: 0 }]);
    };

    const updateSplit = (index, value) => {
        const newSplits = [...splits];
        newSplits[index].percent = Number(value);
        setSplits(newSplits);
    };

    const total = splits.reduce((acc, curr) => acc + curr.percent, 0);

    return (
        <div className="split-card">
            <h3>Revenue Split Sheet</h3>
            {splits.map((s, i) => (
                <div key={i} className="split-row">
                    <input type="text" placeholder="Collaborator Name" defaultValue={s.name} />
                    <input 
                        type="number" 
                        onChange={(e) => updateSplit(i, e.target.value)} 
                        value={s.percent} 
                    />
                    <span>%</span>
                </div>
            ))}
            <button onClick={addCollaborator} className="btn-secondary">+ Add Writer</button>
            
            <div className={`status ${total === 100 ? 'valid' : 'invalid'}`}>
                Total: {total}% {total !== 100 && "(Must equal 100%)"}
            </div>
        </div>
    );
}
