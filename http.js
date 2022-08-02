const http = require ('http');
const server = http.createServer((req,res) => {

if(req.url === '/'){
    res.write('Welcome')
    res.end()
}
else if(req.url==='/about'){
    res.end("History")
}

res.end(`
<h1>Ooopsss!</h1>
<a href='/'>back home</a>
`)
});

server.listen(5555);