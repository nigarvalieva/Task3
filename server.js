const express = require('express');
const app = express();

let cards = [
    {
        id: 1,
        cardNum: "4249 7866 5657 1426"
    },
    {
        id: 2,
        cardNum: "4018 6662 0308 0148"
    },
    {
        id: 3,
        cardNum: 4006204973476397
    },
    {
        id: 4,
        cardNum: 4934686158821461
    },
    {
        id: 5,
        cardNum: 4744673172657147
    }
]

app.get('/card', function (req, res) {
    res.send("Send num from 1 to 5!")
})

app.get('/card/:id', function (req, res) {
    cards.forEach((card) => {
        if(card.id == req.params.id){
            res.send(card.cardNum) 
        }})
    
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});