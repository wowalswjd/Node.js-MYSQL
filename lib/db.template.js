var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});
//mysql.js에서는 var connection이라는 변수에 담았었음.
db.connect();
module.exports = db;
//db.js를 외부에서 쓸 수 있도록 export하는 코드
