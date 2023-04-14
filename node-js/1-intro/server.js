const http = require('http');

const todo = [
    {id: 1, text: '- Todo one'},
    {id: 2, text: '- Todo two'},
    {id: 3, text: '- Todo three'},
];

/** BASIC STRUCTURE */
const basic = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // indicates the resources media type
    res.setHeader('X-Powered-By', 'Node.js') // specifies the technology
    res.end(JSON.stringify({
        success: true,
        data: todo,
    }));
});

/** SETTING STATUS CODE */
const status_code = http.createServer((req, res) => {
    res.writeHead(404, { // sets status code and headers
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    })
    /** GETTING HEADERS SENT FROM USER */
    console.log(req.headers.authorization)
    res.end(JSON.stringify({
        success: true,
        error: 'Not Found',
        data: null,
    }));
});

/** SENDING DATA TO SERVER */
const sendingData = http.createServer((req, res) => {
    res.writeHead(200, { // sets status code and headers
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    });
    /** GETTING HEADERS SENT FROM USER */
    let body = [];
    req
    .on('data', chunk => {
        body.push(chunk)
    })
    .on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(body)
    });    
    res.end(JSON.stringify({
        success: true,
        data: todo,
    }));
});

/** WORKING WITH DIFF METHODS */
const server = http.createServer((req, res) => {
    const {method, url} = req;
    let body = [];
    req
    .on('data', chunk => {
        body.push(chunk)
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();

        /** setting initial values for default */
        let status = 404
        const response = {
            success: false,
            data: null
        };

        if(method === 'GET' && url == '/todo') {
            status = 200
            response.success = true
            response.data = todo
        } else if (method === 'POST' && url === '/todo') {
            const {id, text} = JSON.parse(body);

            if(!id || !text) {
                status = 400
            } else {
                todo.push({ id, text });
                status = 201;
                response.success = true;
                response.data = todo;
            }
        };

        res.writeHead(status, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        });

        res.end(JSON.stringify(response));
    });    
});


const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))