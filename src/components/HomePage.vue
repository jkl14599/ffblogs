<template>
  <div class="homePage">
    <ul v-for='blog in blogs' :key='blog._id'>
      <li></li>
    </ul>
    <div class="container">
      <!-- <a href="#"><img src="../assets/vue.png" alt=""></a> -->
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
    <div class="container">
      <ul>
        <li>搭建 BIRD Looking Glass 速成指北</li>
        <li>BIRD 是 Linux 上常用的一款 BGP 路由软件。bird-lg-go 是 蓝天 使用 Go 语言</li>
        <li>2021-05-03 · 网络</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return{
      blogs:[]
    }
  },
  props: {
    msg: String
  },
  created(){
    // this.$http.get('http://localhost:8085/')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  width: 70%;
  border-radius: 0.5rem;
  background: #f6f8fb;
  padding: 1.5rem 2rem;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: row;
  li{
    text-align: left;
    line-height: 1.6rem;
  }
  li:nth-child(1){
    font-weight: 700;
    font-size: 1.3rem;
  }
  li:nth-child(3){
    color: rgb(150 150 150);
  }
  // a{
  //   box-sizing: border-box;
  //   margin:0;
  //   letter-spacing: 0.75px;
  // }
}
</style>
