const Koa = require('koa');
const cors = require('koa2-cors');
const mongoose = require('mongoose');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const Article = require('./article.js')
// 实例化app Router
const app = new Koa();
const router = new Router();
const bodyparser= new BodyParser();
app.use(bodyparser);
// 配置跨域
app.use(cors({
    origin:['http:localhost:8080'],
    credential:true
}))

// 加载路由、接口
router.get('/', async (ctx)=>{
    // await next();
    ctx.body={
        msg:'hello world'
    }
})

router.post('/api/article', async function (ctx, next){
    const article=new Article({
        title:'fsafsfsd',
        content:'nlkljlkj',
        label:'技术',
        author:'飞飞',
        releaseTime:Date.now()
    })
    let code
    try{
        await article.save()
        code = 0
    }catch(error){
        code = -2
    }
    ctx.body = {
        code
    }
})

// config
const db = require('./db.js').mongoURI;
// 链接数据库
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('mongodb数据库链接成功');
    }).catch(err =>{
        console.log(err);
    })
// 配置路由
app.use(router.routes())
app.use(router.allowedMethods());
// 监听端口
app.listen('8085',()=>{
    console.log('后端服务器8085端口已启动')
})