const http = require('http'); // Khời tạo => Lấy model của NoteJS "require" => câu lệnh giúp import
// Tại đây truyền vào 2 tham số => "req": là những yêu cầu từ client, "res": là phản hồi từ server đến Client
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    }) // command này setup cho html khi in ra =>
    res.end('<h1>Server Hello => 2</h1>') // Trả về tin nhắn khi có Req
})
// Tiếp theo ta tạo 1 cổng để lắng nghe => PORT
const PORT = 7000
// Phương thức này để lắng nghe =>
// 127.0.0.1 là host name => đặt làm ví dụ
server.listen(PORT, '127.0.0.11', () => {
    console.log(`Server lắng nghe trên Port: ${PORT}`) // Nếu lắng nghe đúng cổng này =>
})