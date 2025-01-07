
let express = require('express');
let app = express();
let path = require('path');
let port = 3000;

// let customer = require('./customer.js')
// let seller = require('./seller.js')
// let admin = require('./admin.js')

// app.use(express.static(path.join(__dirname,'NewFolder')));
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'NewFolder', 'customer.html'));
});
// app.use('/customer',customer)
// app.use('/seller',seller)
// app.use('/admin',admin)

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
});