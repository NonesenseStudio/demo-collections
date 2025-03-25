import instance from "./index";

export const getAirQuality = (params: any) => {
  return instance.post("/cata_19131/get_data.do",  params );
};
