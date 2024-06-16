/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = "AIzaSyCkE6ZdV5Mr9Rza-QqrqS92BPA-dYNLE1c";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Dgshsd"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "It seems like you might have typed some random letters. Could you please tell me what you're looking for or what you meant to type? \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "Надо было просто всё попробовать "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Я понимаю.  Иногда бывает полезно попробовать все возможные варианты, чтобы найти решение или понять, что работает, а что нет.  \n\nЧто именно ты пытался сделать? Расскажи мне, и, возможно, я смогу помочь! 😊\n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text()
}

export default run;