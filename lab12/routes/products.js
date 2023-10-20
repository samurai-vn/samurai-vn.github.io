const express = require('express');
const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);
router.get('/',(req, res, next) => {
    console.log("All products method: GET");
    res.send('All products method: GET');
    res.end();
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('product saved method: POST')
    res.end();
})
module.exports = router;