import { createServer } from 'http';
import { readFile } from 'fs';

const server = createServer((req, res) => {
    switch (req.url) {
        case '/':
            readFile('client/index.html', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            });
            break;
        case '/scripts/main.js':
            readFile('dist/client/scripts/main.js', (err, data) => {
                res.setHeader('Content-Type', 'text/javascript');
                res.end(data);
            });
            break;
        default:
            break;
    }
});

server.listen(3000, () => {
    console.log('I swear I am listening!!!');
});
