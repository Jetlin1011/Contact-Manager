const express=require('express');
const ds=require('./service/dataService')
const cors=require('cors')

const app=express();
app.use(express.json());
app.use(cors({origin:"http://localhost:4200"}))

app.get('/',(req,res)=>{
    ds.getAllContacts().then(result=>{
        res.status(result.statusCode).json(result)})
        
})

app.get('/view/:id',(req,res)=>{
    ds.viewContact(req.params.id).then(result=>{
res.status(result.statusCode).json(result)
    })
})

app.post('/add',(req,res)=>{
    console.log(req.body)
 
ds.addContact(req.body).then(result=>{
    res.status(result.statusCode).json(result)
})    

})

app.put('/edit/:id',(req,res)=>{
ds.editContact(req.params.id,req.body).then(result=>{
    res.status(result.statusCode).json(result)
})
})

app.delete('/delete/:id',(req,res)=>{
    ds.deleteContact(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen('3000',()=>{
    console.log('server running')
})