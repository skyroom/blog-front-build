const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const router = require('./router')
const appConfig = require('./app.json');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'))

var proxyConfigArr;
if (app.get('env') === 'development') {
    proxyConfigArr = require('./proxy.dev.config.js');
}else{
    proxyConfigArr = require('./proxy.prod.config.js');
}
for(var i=0;i<proxyConfigArr.length;i++){
    var proxyConfig = proxyConfigArr[i];
    var proxyInstance = proxy(proxyConfig.config);
    app.use(proxyConfig.url, proxyInstance);
}

app.use('/',router)

app.listen(appConfig.port,function(){
    console.log('http://localhost:' + appConfig.port);
});
