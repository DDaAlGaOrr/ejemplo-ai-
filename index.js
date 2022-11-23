const express = require('express')
const app = express()

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));


//Muetra la pagina index.ejs
app.get('/',(req,res)=>{
  res.render('index.ejs',{results: [{
    text:''
  }]})
})

/* cuando se le da click al boton de enviar se manda el texto del input y llega aqui y aqui se hace la petición 
a openai
*/ 
app.post('/openai',(req,res)=>{
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const test = async()=>{
  const response = await openai.createCompletion({
  model: "text-davinci-002",
  // aqui es donde se manda el texto del input, query es el nombre que tiene en la pagina de index.ejs
  prompt: req.body.query,
  temperature: 0.9,
  max_tokens: 400,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
  });
  console.log(response.data.choices[0].text)
  res.render('',{results:response.data.choices})
}
test()
})

app.listen(3000,()=>{
  console.log('server on port 3000')
})


