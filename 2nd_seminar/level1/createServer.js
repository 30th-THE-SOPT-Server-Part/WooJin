// const http = require('http');

// http.createServer((req, res) => {
//     res.write('<h1>Hello Server Part</h1>');
//     res.end('<p>Server Love</p>');
// }).listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기 중입니다!');
// });

const http = require('http');

http.createServer((req, res) => {
    // 여기다 이제 서버에서 보내줄 것~
    res.write('<h1> Hello Server Part </h1>');
    res.end('<p> Server Love </p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});