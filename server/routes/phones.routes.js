const express = require('express');
const router = express.Router();
const data = require('../../data/phones.json')

router.get('/phones', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.json(data)
});

router.get('/phones/:id', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const { id } = req.params;
    const phoneByID = data.filter(phone => {
        if (phone.id == id) {
            return phone
        }           
    } ) 
    if (phoneByID.length > 0) {

        return res.json(phoneByID[0])
    } else {
        return res.json({ message: "Phone do not exist" })
    }
})


module.exports = router;
