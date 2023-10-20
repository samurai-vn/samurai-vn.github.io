const express = require('express');
const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);
router.get('/',(req, res, next) => {
    res.send('All users method: GET');
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('users saved method: POST')
})
module.exports = router;