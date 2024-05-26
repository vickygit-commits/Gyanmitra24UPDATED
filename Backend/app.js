const express=require('express');
const app=express();
const users=require('./routes/user_routes')
const workshop=require('./routes/workshop_routes')
const event=require('./routes/event_routes')
const payment=require('./routes/payment')
const dotenv=require('dotenv');
const path=require('path');
const workshop_register=require('./routes/workreg_routes')
const event_register=require('./routes/eventreg_routes')
dotenv.config({path:path.join(__dirname,"config/config.env")});

const errorMiddleware=require('./middlewares/error')
const cookieParser=require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
app.use('/api/v1/',users)
app.use('/api/v1/',workshop)
app.use('/api/v1/',workshop_register)
app.use('/api/v1/',event)
app.use('/api/v1/',event_register)
app.use('/api/v1/',payment)

if(process.env.NODE_ENV==="production")
{
    app.use(express.static(path.join(__dirname,'../Frontend/build')));
    app.get('*',(req,res)=>
    {
        res.sendFile(path.resolve(__dirname,'../Frontend/build/index.html'))
    })
}
app.use(errorMiddleware)
module.exports=app;