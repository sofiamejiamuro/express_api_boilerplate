const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/Lista', (req, res) => {

    return res.status(200).json({
        message:'Solicitud aprobada',
        data:[
            {
                Producto:"Producto 1"
            },
            {
                Producto:"Producto 2"
            },
            {
                Producto:"Producto 3"
            }

        ]
    })
});

module.exports = router;


