const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const test = async()=>{
    const  response =  await openai.listModels();
    console.log(response.data.data)
}

test()
