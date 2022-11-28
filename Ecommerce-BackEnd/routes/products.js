const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola desde routes');
});

module.exports = router;
