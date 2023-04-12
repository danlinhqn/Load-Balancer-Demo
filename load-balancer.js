const http = require('http'); // Khời tạo => Lấy model của NoteJS "require" => câu lệnh giúp import
//  " npm install --save-dev http-proxy-middleware " => Cài dặt package này 
const { createProxyMiddleware } = require('http-proxy-middleware');
// Khai báo các pod chạy chia sẽ dữ liệu =>
const servers = [
  { url: 'http://127.0.0.11:5000' },
  { url: 'http://127.0.0.11:6000' },
  { url: 'http://127.0.0.11:7000' },
]
// Tạo proxy middleware => Giúp luân phiên xoay vòng dữ liệu load qua các Port
const proxy = createProxyMiddleware({
  target: servers,
  changeOrigin: true,
  xfwd: true,
  router: (req) => {
    // Chọn máy chủ phụ dựa trên thuật toán quay vòng đơn giản =>
    const server = servers.shift();
    servers.push(server);
    return server.url;
  },
});
// Tại đây truyền vào 2 tham số => "req": là những yêu cầu từ client, "res": là phản hồi từ server đến Client
const server = http.createServer((req, res) => {
  proxy(req, res); // Tại đây trả lại giá trị đi qua từng Port =>
});
// Tiếp theo ta tạo 1 cổng để lắng nghe => PORT
const PORT = 8000
// Phương thức này để lắng nghe =>
// 127.0.0.1 là host name => đặt làm ví dụ
server.listen(PORT, '127.0.0.11', () => {
  console.log(`Server lắng nghe trên Port: ${PORT}`) // Nếu lắng nghe đúng cổng này =>
})