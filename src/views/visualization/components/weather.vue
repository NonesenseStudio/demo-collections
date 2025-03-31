<template>
  <a-tooltip placement="bottom" v-if="weather">
    <template #title>
      {{ weather.city }} {{ weather.weather }} {{ weather.temperature }}℃
    </template>
    <div class="weather">
      {{ weather.city }}
      <img
        :src="weather.icon"
        :alt="weather.weather"
        style="width: 20px; height: 20px"
      />
      {{ weather.temperature }}℃
    </div>
  </a-tooltip>
</template>

<script setup lang="ts">
import { useMapStore } from "@/store";

const { AMap } = useMapStore();
const weathers = {
  晴: "qing",
  少云: "shaoyun",
  晴间多云: "qingjianduoyun",
  多云: "duoyun",
  阴: "yin",
  有风: "youfeng",
  平静: "pingjing",
  微风: "weifeng",
  和风: "hefeng",
  清风: "qingfeng",
  "强风/劲风": "qiangfeng",
  疾风: "jifeng",
  大风: "dafeng",
  烈风: "liefeng",
  风暴: "fengbao",
  狂爆风: "kuangbaofeng",
  飓风: "jufeng",
  热带风暴: "redaifengbao",
  霾: "mai",
  中度霾: "zhongdumai1",
  重度霾: "zhongdumai2",
  严重霾: "yanzhongmai",
  阵雨: "zhenyu",
  雷阵雨: "leizhenyu",
  雷阵雨并伴有冰雹: "leizhenyubingbao",
  小雨: "xiaoyu",
  中雨: "zhongyu",
  大雨: "dayu",
  暴雨: "baoyu",
  大暴雨: "dabaoyu",
  特大暴雨: "tedabaoyu",
  强阵雨: "qiangzhenyu",
  强雷阵雨: "qiangleizhenyu",
  极端降雨: "jiduanjiangyu",
  毛毛雨: "maomaoyu",
  细雨: "xiyu",
  雨: "yu",
  "小雨-中雨": "xiaodaozhongyu",
  "中雨-大雨": "zhongdaodayu",
  "大雨-暴雨": "dadaobaoyu",
  "暴雨-大暴雨": "baoyudaodabaoyu",
  "大暴雨-特大暴雨": "dabaoyuzhuantedabaoyu",
  雨雪天气: "yuxuetianqi",
  雨夹雪: "yujiaxue",
  阵雨夹雪: "zhenyujiaxue",
  冻雨: "dongyu",
  雪: "xue",
  阵雪: "zhenxue",
  小雪: "xiaoxue",
  中雪: "zhongxue",
  大雪: "daxue",
  暴雪: "baoxue",
  "小雪-中雪": "xiadaozhongxue",
  "中雪-大雪": "zhongdaoedaxue",
  "大雪-暴雪": "daxuebaoxue",
  浮尘: "fuchen",
  扬沙: "yangsha",
  沙尘暴: "shachenbao",
  强沙尘暴: "qiangshachenbao",
  龙卷风: "longjuanfeng",
  雾: "wu",
  浓雾: "nongwu",
  强浓雾: "qiangnongwu",
  轻雾: "qingwu",
  大雾: "dawu",
  特强浓雾: "teqiangnongwu",
  热: "re",
  冷: "leng",
  未知: "weizhi",
};
const weather = ref<any>();
const getWeather = () => {
  AMap.plugin("AMap.Weather", function () {
    //创建天气查询实例
    let w = new AMap.Weather();
    //执行实时天气信息查询
    w.getLive("杭州市", function (err, data) {
      if (!err) {
        weather.value = {
          ...data,
          icon: new URL(
            `../../../assets/icons/${weathers[data.weather]}.svg`,
            import.meta.url,
          ).href,
        };
      }
    });
  });
};

onMounted(() => {
  getWeather();
});
</script>

<style scoped lang="less">
.weather {
  font-size: 20px;
  line-height: 50px;
  padding-left: 40px;
}
</style>
