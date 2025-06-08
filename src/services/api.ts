import instance from "./index";
import axios from "axios";
export const getAirQuality = (params: any) => {
  return instance.post("/cata_19131/get_data.do", params);
};

export const aiChat = (params: any) => {
  return instance.post(
    "https://chat.zju.edu.cn/api/ai/v1/chat/completions",
    params,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer sk-Rz2lwEKH40N6Y2fk50699e7839F14e91892b5652E04e7bDf",
      },
    },
  );
};
