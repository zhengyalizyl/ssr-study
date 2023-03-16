import render from './render';
const express = require('express');
const app = express();

//TODO 添加客户端包信息
// app.use(express.static('public'))
app.get('*', function(req, res) {
    render(req, res)
})

app.listen(3000, function() {
    console.log('server listen at port 3000')
})