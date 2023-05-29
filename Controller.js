const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let user=models.User;
let enterprise=models.Enterprise;
let service=models.Service;

// app.get('/creat',async (req,res)=>{
//     let creat=await user.create({
//         name:"teste",
//         password:"123456",
//         email:"teste@teste.com",
//         createdAt: new Date(),
//         createdUp: new Date()
//     });
//     res.send('usuario criado com sucesso');
// });

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('servirdor on');
});