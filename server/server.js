const http = require('http')
const fs = require('fs');
const path = require('path');
const { url } = require('inspector');
const { error } = require('console');


const port = 3000;

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    const extName = String(path.extname(filePath)).toLowerCase();
    
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'png/png',
    }
    const contentType = mimeTypes[extName] || 'apllication/octet-stream'
     

    fs.readFile(filePath,(req,content)=>{
        if (error) {
             if (error.code === 'ENOENT') {
                res.writeHead(400,{'Content-Type': 'text/html'})
             }
        } else {
            res.writeHead(200, ("Content-Type", contentType));
            res.end(content, 'utf-8');
        }
    })
});


server.listen(port,()=>{
    console.log(`server is listining from the port ${port}`);
})