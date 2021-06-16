<template>
  <div class="searchContent">
    <div class="search-title">站内搜索</div>
    <input class="input search-input" maxlength="50" type="search" placeholder="请输入搜索内容">
  </div>
</template>

<script>
export default {
  name: 'SearchContent',
  data(){
    return{
      // state:"12"
    }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.searchContent{
  width: 70%;
  border-radius: 0.5rem;
  background: #f6f8fb;
  padding: 1.5rem 2rem;
  margin: 0 auto;
}
.search-title{
  font-size: 1.5rem;
  text-align: left;
}
.input{
  width: 100%;
  height: 2rem;
  border-radius: 0.2rem;
  border: 0;
  appearance: none;
  margin-top: 0.7rem;
}
</style>
