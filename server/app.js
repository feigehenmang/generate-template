const Koa = require('koa');
const app = new Koa();
const routerReceive = require('./receive');
// app.use(ctx => {
//     ctx.body = 'Hello World';
// })
app.use(routerReceive.routes());
app.use(routerReceive.allowedMethods())
app.listen(18080)