require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatGPT() {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Olá tudo bem? Me chamo Renato e qual o seu nome?",
      },
      {
        role: "assistant",
        content:
          "Olá Renato, eu sou uma inteligência artificial criada pela OpenAI e não tenho um nome específico. Posso ajudá-lo em algo?",
      },
      {
        role: "user",
        content: "Qual o meu nome?",
      },
    ],
  });
  console.log(completion.data.choices[0].message);
}

chatGPT();
