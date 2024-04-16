const express= require('express')
const app=express()

app.use(express.json({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

app.post('/api/avatars',async (req,res)=>{
    console.log('POST/api/avatars')
    console.log(req.body);

      const avatar= {
      id:Date.now(),
      avatarName:req.body.avatarName,
      childAge:parseInt(req.body.childAge),
      skinColor: req.body.skinColor,
      hairStyle:req.body.hairStyle,
      headShape:req.body.headShape,
      upperClothing:req.body.upperClothing,
      lowerClothing: req.body.lowerClothing,
      createdAt:new Date().toISOString()
      }
    try {
        const data = await fs.readFileSync(`${__dirname}/public/avatars.json`)
        const  avatars=JSON.parse(data)
        avatars.push(avatar)
        await fs.writeFileSync(`${__dirname}/public/avatars.json`)

        res.status(201).set('Location',`/avatars/${avatar.id}`).send (avatar)
    } catch (error){
          res.sendStatus(500)
    }

})
app.get('/avatars', async (req,res)=>
try{
const data=await fs.readFileSync(`${__dirname}/public/avatars.json`)
const avatars=JSON.parse(data)
}


)
app.listen(3000,()=>{
    console.log("Server running...")
})
