const express = require('express');
const port = 3001;
const app = express();
const cors=require('cors')

let resultadosArr=[]

app.use(cors('*'))

app.use(

    express.urlencoded({
        extended: true
    })


)
app.use(

    express.json({

        type:"*/*"
    })


)


app.get('/calc',(req,res)=>{

    //res.send('me hicieron un get (envia)')
    console.log(req.body)
    res.send(JSON.stringify(resultadosArr))//para que mostremos en el front lo que tenemos en api
   
})



app.post('/calc',(req,res)=>{

  // res.send('me hicieron un post (guarda)')

   let historial= req.body//traemos del main.js 
   
    resultadosArr.push(historial)


    res.send(JSON.stringify('api guardada muy exitosamente'))

    console.log(resultadosArr)

})


app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});



const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

