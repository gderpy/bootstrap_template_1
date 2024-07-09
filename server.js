const http = require("http");
const path = require("path");
const fs = require("fs");

const server =  http.createServer((request, response) => {
    let filePath = "." + request.url;
    if (filePath === "./") filePath = "./index.html";

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
    };

    const contentType = mimeTypes[extname] || "application/octet-stream";
    fs.readFile(filePath, (error, content) => {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
    })
});
server.listen(3000, () => console.log('Server start http://localhost:3000/'));
