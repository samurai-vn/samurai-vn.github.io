// const express = require('express');

// //instaniation
// const app = express();

// //configuration
// app.enable("case sensitive routing");

// //middlewares
// /** build-in */
// app.use(express.urlencoded({extended:false}));
// app.use(express.static("./public"));
// /** application level */

// app.use((req, res, next) => { // this will execute every request
//     console.log("1");
//     next(); // move to next middleware
// })

// app.use('/Users',(req, res, next) => {
//     console.log(req.body);
//     res.send(req.body);
// })
// app.use('/',(req, res, next) => {
//     console.log("3");
//     res.send("3");
// })

// //Bootup
// app.listen(process.env.PORT, () => {
//     console.log("Listen at port 3000");
// })

const express = require('express');
const productRouter = require('./routes/products');// using product route
const usersRouter = require('./routes/users');//using users route
const error = require('./error');
const path = require('path');
const app = express(); // main app

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.enable("case sensitive routing");

//using route
app.use('/products', productRouter);
app.use('/users', usersRouter);

// loading an image
app.use('/image', (req, res, next) => {
    console.log("/image");
    res.status(200).sendFile("./img/winterLandscape.jpg", { root: "./public" });
})

//loading an css file
app.use('/css', (req, res, next) => {
    console.log("/css");
    res.status(200).sendFile("./css/styleme.css", { root: "./public" });
})

//test handling error
app.use('/error', (req, res, next) => {
    console.log("error");
    throw error;
})

//default page
app.get('/', (req, res, next) => {
    console.log("default");
    res.status(200).sendFile("./view/index.html", { root: "./public" });
})
app.use((req, res, next) => {
    console.log("404 not found");
    res.status(404).sendFile("./view/404.html", { root: "./public" });
})

/** Error handling */
app.use(error.logErrors);
app.use(error.clientErrorHandler);
app.use(error.errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})