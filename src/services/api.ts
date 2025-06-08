import instance from "./index";
import axios from "axios";
export const getAirQuality = (params: any) => {
  return instance.post("/cata_19131/get_data.do", params);
};

const url = "https://chat.zju.edu.cn/api/ai/v1/chat/completions";
const apiKey = "sk-Rz2lwEKH40N6Y2fk50699e7839F14e91892b5652E04e7bDf"; // 替换为你的 API 密钥

export const aiChat = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      model: "deepseek-r1-distill-qwen",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "3.11与3.9谁大" },
      ],
      stream: true,
    },
  };

  return await fetch("/ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-r1-distill-qwen",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "3.11与3.9谁大" },
      ],
      stream: true,
    }),
  }).then((response) => {
    const decoder = new TextDecoder("utf-8");
    let buffer = [];
    const reader = response.body.getReader();
    function read() {
      reader.read().then(function processText({ done, value }) {
        if (done) {
          return buffer;
        }
        const chunk = decoder.decode(value);
        buffer.push(buffer);
        console.log(chunk);
        read();
      });
    }
    return read();
  });
};
