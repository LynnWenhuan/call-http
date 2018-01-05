
var request = require('superagent');


g = 0; j = 0;f = 0;
function test(){
  request
  .post('https://api.weixin.qq.com/cgi-bin/shorturl?access_token=zrCtgCtiJqQyVKX6D4ewxCitU3-iRHXQnqcqtz0iKig1M3bDmdTX97JlWN8b3vM3to7Sc2v_hAhry3lvrUTuJwFA4uuhkzb0MRYc3Wz3o43ibCDcLWJeeZDBjWlVk8kEOBHdAAAFSY')
  .send({"action":"long2short","long_url":"https://mtest.sinosafe.com.cn/tasty"}) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    resData = res.text;
    if (err) {
      g += 1;
      console.log(g);
      throw err
    } else if (resData.errcode === 0) {
      j += 1;
      console.log(resData,j,'j');
    } else if (resData.errcode !== 0) {
      f += 1;
      console.log(resData,f,'f');
    }

  });
}

console.log("start ");

   setInterval(() => {
        test();
    }, 500);


