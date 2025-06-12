import instance from "./index";

export const getAirQuality = (params: any) => {
  return instance.post("/cata_19131/get_data.do", params);
};

const apiKey = "sk-Rz2lwEKH40N6Y2fk50699e7839F14e91892b5652E04e7bDf"; // 替换为你的 API 密钥

export const aiChat = async (params: any) => {
  return await fetch("/ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: params.model,
      messages: [
        { role: "system", content: params.systemPrompt },
        ...params.messages,
      ],
      stream: true,
    }),
  });
};
