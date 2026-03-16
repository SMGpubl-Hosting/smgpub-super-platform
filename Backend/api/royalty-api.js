const router = require('express').Router();

router.get('/stats/:creatorId', async (req, res) => {
    // In production, this queries the 'royalties' schema in MongoDB
    res.json({
        totalEarnings: 8432.50,
        streamCount: 1250000,
        topTerritory: 'United States'
    });
});

module.exports = router;
