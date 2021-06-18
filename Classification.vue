<template>
  <div class="classification">
    <router-link to="/">
     <div>编程技术分享</div>
     <div>共n篇</div>
    </router-link>
    <router-link to="/">
      <div>war3制图技术</div>
      <div>共n篇</div>
    </router-link>
    <router-link to="/">
      <div>其他</div>
      <div>共n篇</div>
    </router-link>
    <router-link to="/">
      <div>其他</div>
      <div>共n篇</div>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 auto;
}
a {
  color: #42b983;
}
.classification{
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
    // flex-direction: column-reverse;
  a{
    display: flex;
    justify-content: space-between;
    width: 42%;//990px时宽度设为100%
    padding: 1.5rem 2rem;
    background: #f6f8fb;
    margin:0.9rem auto;
    // margin-left: 1rem;//为990px时换成单行
    border-radius: 0.5rem;
    text-decoration: none;
    color: #000;
    :nth-child(1){
      font-size: 1.1em;
    }
  }
}
</style>