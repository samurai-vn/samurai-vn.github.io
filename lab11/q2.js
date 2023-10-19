
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const path = req.url;
    if (path == '/image') {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        fs.readFile('img/winterLandscape.jpg', (err, data) => {
            if (err) {
                console.err(err);
                res.statusCode = 500;
                res.end('Server error');
            }
            res.end(data);
        });
    }
    else if (path == '/pdf') {
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        const pdfStream = fs.createReadStream('pdf/lesson11-NodeJsIntro.pdf');
        // Pipe the image stream to the response
        pdfStream.pipe(res);

        // Handle errors
        pdfStream.on('error', (err) => {
            console.error(err);
            res.statusCode = 500; // Internal Server Error
            res.end('Internal Server Error');
        });
    }
    else if (path == '/home') {
        res.end('Welcome to my website\n');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page not found.\n');
    }
});

const port = 3000;
const hostname = 'localhost';
server.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})