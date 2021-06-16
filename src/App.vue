<template>
  <div id="app">
    <div class="bigNav">
      <div class="navbar-brand">
        <img class="user-avatar" src="../src/assets/newLogo.png" alt="" srcset="">
        <span class="site-name">飞飞博客</span>
      </div>
      <div id="nav">
        <router-link to="/">首页</router-link> |
        <router-link to="/file">归档</router-link> |
        <router-link to="/classification">分类</router-link> |
        <router-link to="/label">标签</router-link> |
        <router-link to="/friendChain">友链</router-link> |
        <router-link to="/about">关于</router-link> |
        <router-link class="el-icon-search" to="/search"></router-link>
      </div>
    </div>
    <router-view/>
    <footer>
      <div>RSS | 冀ICP备15024669号 | Twitter @renbaoshuo</div>
      <div>Theme by Baoshuo | Powered by Hexo</div>
    </footer>
    <div class="back-Top" @click="goTop">
      <div class="el-icon-caret-top">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"app",
    data(){
      return{

      }
    },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
   methods: {
    handleScroll() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
     goTop() {
      // window.scroll(0,0);
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
    }
  }
</script>
<style lang="less">
@media screen and (max-width: 996px){
  body{
   font-size: 0.75rem;
 }
  #nav{
    display: none;
  }
}
#app {
  // display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .bigNav{
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    padding: 1rem 0rem;
    .navbar-brand{
      display: flex;
      justify-items: center;
      align-items: center;
    }
  }
  footer{
    margin-top: 1.5rem;
  }
  .site-name{
    font-weight: bold;
    font-size: 1.8rem;
  }
  .back-Top{
    position: fixed;
    width: 57px;
    height: 57px;
    background: #f6f8fb;
    border-radius: 0.5rem;
    box-shadow: 0.3rem 0.75rem 0.75rem rgb(218, 216, 216);
    right: 1.5rem;
    bottom: 3rem;
    cursor: pointer;
    .el-icon-caret-top{
      margin-top: 40%;
    }
  }
    img{
    // display: inline-block;
    height: auto;
    max-width: 100%;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1rem;
    margin-left: 0.525rem;
    margin-right: 0.525rem;
    text-decoration: none;
    background: linear-gradient(180deg,transparent 80%,#4dabf766 0);
    &.router-link-exact-active {
      color: #188fe3;
    }
  }
  a:nth-child(7){
    background: none;
  }
}
</style>