<template>
  <div class="disclaimer">
    <section>
      <h2>1. 内容准确性</h2>
      <p>
        本网站提供的信息仅用于一般性参考目的。我们尽力确保内容的准确性，但不保证其完全无误。信息的更新可能存在延迟，因此不应将其作为专业建议（如法律、财务、医疗等）的依据。依赖本网站内容所采取的任何行动，风险由用户自行承担。
      </p>
    </section>

    <section>
      <h2>2. 第三方链接与内容</h2>
      <p>
        本网站可能包含指向第三方网站的链接。这些链接仅为方便用户提供，不代表我们对其内容、隐私政策或服务的认可。访问第三方网站的风险由用户自行承担。
      </p>
    </section>

    <section>
      <h2>3. 用户责任</h2>
      <p>
        您在使用本网站时，需遵守所在国家/地区的法律法规。禁止利用本网站从事非法活动或传播有害内容（如恶意软件、诽谤性言论等）。我们保留追究违规者法律责任的权利。
      </p>
    </section>

    <section>
      <h2>4. 免责范围</h2>
      <p>
        在适用法律允许的最大范围内，本网站所有者及关联方不对以下情况承担责任：
      </p>
      <ul>
        <li>因使用或无法使用本网站导致的直接或间接损失</li>
        <li>网站内容错误、遗漏或误导性信息造成的后果</li>
        <li>第三方行为（如黑客攻击、数据泄露）导致的损失</li>
      </ul>
    </section>

    <section>
      <h2>5. 内容版权与使用</h2>
      <p>
        除非明确注明允许转载，本网站的文本、图片、代码等受版权保护。未经书面许可，禁止复制、修改或商业用途。合理引用时请注明来源。
      </p>
    </section>

    <section>
      <h2>6. 数据来源</h2>
      <p>
        本网站的部分数据来源于以下信息源：
      </p>
      <ul>
        <li><a href="https://data.zjzwfw.gov.cn/">浙江数据开放平台</a></li>
        <li><a href="https://data.hangzhou.gov.cn/">杭州市数据开放平台</a></li>
        <li><a href="http://data.ningbo.gov.cn/sjkfptold/#/">宁波市公共数据开放平台</a></li>
        <li><a href="https://data.wenzhou.gov.cn/">温州市数据开放平台</a></li>
        <li><a href="https://data.shaoxing.gov.cn/">绍兴市公共数据开放平台</a></li>
        <li><a href="https://data.huzhou.gov.cn/">湖州市数据开放平台</a></li>
        <li><a href="https://data.jiaxing.gov.cn/">嘉兴市数据开放平台</a></li>
        <li><a href="https://open.data.jinhua.gov.cn/">金华市数据开放平台</a></li>
        <li><a href="https://data.qz.gov.cn/">衢州市数据开放平台</a></li>
        <li><a href="https://data.lishui.gov.cn/">丽水市数据开放平台</a></li>
        <li><a href="https://data.zhoushan.gov.cn/">舟山市数据开放平台</a></li>
      </ul>
    </section>

    <section class="contact">
      <h2>联系方式</h2>
      <p>若对本声明有任何疑问，请通过以下方式联系：</p>
      <ul>
        <li>
          邮箱：<a href="mailto:service@example.com">service@example.com</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.disclaimer {
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
  margin: 20px auto;
  padding: 0 20px;
  color: #333;
  height: 500px;
  overflow: auto;

  h1 {
    font-size: 24px;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    color: #666;
  }

  h3 {
    font-size: 17px;
    color: #444;
  }

  ul {
    padding-left: 20px;
  }

  .contact {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    li {
      list-style: none;
    }
  }
}
</style>
