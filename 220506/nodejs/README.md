# DB 연결해보기

npm init -y
npm install mysql2
npm install express
npm install nunjucks

```javascript
// npm install mysql2는 연결을 도와주는 드라이버 설치이다.
```

파일생성하기 db.js

```javascript
const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "homepage",
});
// mysql -uroot
```
