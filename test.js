
var request = require('superagent');


let g = 0;
const j = 1000;
let f = 0;

const startTime = new Date().getTime();
function test() {

  request
    .get('http://10.11.32.124:8080/book/helloword2')
    .end((err, res) => {
      resData = res.text;
      if (err) {
        g += 1;
        console.log(g);
        throw err
      } else {
        f += 1;
        console.log(f, 'f');
      }
      if (f === j) {
        const endTime = new Date().getTime();
        console.log("totalTime(毫秒):", endTime-startTime, "-------", "avgTime（平均每次请求的时间）:", (endTime-startTime)/j,);
      }
    });
}

for (var i = 0; i < j; i += 1) {
    test();
}


