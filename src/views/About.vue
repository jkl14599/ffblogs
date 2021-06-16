<template>
  <div class="about">
    <div class="title-about">关于我</div>
    <img src="../assets/aboutHeader.jpg" />
    <h2>关于博客</h2>
    <h3>建博客目的</h3>
    <p>用来分享学习前端编程中和一些开发项目中遇到的坑和解决方法，并且也分享一些生活和心情，前端开发爱好者...</p>
    <h2>关于我</h2>
    <h3>个人属性</h3>
    <p>正经、穷、菜…</p>
    <p>上班族</p>
    <p>前端开发爱好者</p>
    <h2>软件及编程技能</h2>
    <ul>
      <li>PS<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>AI<el-rate v-model="value2" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>html5<el-rate v-model="value3" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>css3<el-rate v-model="value4" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>javascript<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>bootstrap<el-rate v-model="value6" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>vue<el-rate v-model="value7" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
      <li>element-ui<el-rate v-model="value8" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate></li>
    </ul>
    <h2>联系我</h2>
    <ul>
      <li>主页： baoshuo.ren</li>
      <li>邮箱： i@baoshuo.ren</li>
      <li>Telegram： @baoshuo</li>
      <li>Twitter：@renbaoshuo</li>
    </ul>
    <h2>版权相关</h2>
    <ul>
      <li>使用 Pure 主题</li>
      <li>使用 Hexo 构建博客</li>
      <li>本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请在文中明显位置注明出处</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        value:5,
        value2:4.5,
        value3:3.5,
        value4:3,
        value5:3,
        value6:3,
        value7:3,
        value8:4,
      }
    }
  }
</script>
<style lang="less">
.about{
  width: 70%;
  border-radius: 0.5rem;
  background: #f6f8fb;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  .title-about{
    font-size: 1.625rem;
    line-height: center;
  }
  h2,h3{
    display: table;
    text-align: left;
    background: linear-gradient(180deg,transparent 75%,#4dabf766 0);
  }
  p{
    display: table;
    text-align: left;
  }
  ul,li{
    text-align: left;
  }
  .el-rate{
    display: inline-block;
    padding: 0rem;
  }
}
</style>
