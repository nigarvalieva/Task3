const express = require('express');
const app = express();

let card = [
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
        cardNum: "4006 2049 7347 6397"
    },
    {
        id: 4,
        cardNum: "4934 6861 5882 1461"
    },
    {
        id: 5,
        cardNum: "4744 6731 7265 7147"
    }
]

app.get('/card', function (req, res) {
    res.send("Send num from 1 to 5!")
})

app.get('/card/:id', function (req, res) {
    card.forEach((cart) => {
        if (cart.id == req.params.id){
            console.log(cart)
            res.send(cart.cardNum)            
        }
    })
    
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}); 