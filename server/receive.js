const router = require('koa-router')();
const generateTemp = require('../template/');
const fs = require('fs');
const path = require('path');

router.get('/sendConfig', ctx => {
    const titleTemp = generateTemp.generateTitle('Title');
    const fileName = 'test.html';
    fs.writeFile(__dirname + '/generate/' + fileName, titleTemp, {encoding: 'utf-8'}, (data, err) => {
        console.log(data, err);
        ctx.body = {titleTemp};
    })
})

module.exports = router;