const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const test = async()=>{
  const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "que piensas de facebook?",
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
  });
  console.log(response.data)
}

test()
