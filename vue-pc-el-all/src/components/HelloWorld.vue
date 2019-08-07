<template>
  <div class="hello">
    {{this.Global.tagArry}}
    <!-- <svg-icon icon-class="home"></svg-icon> -->
  </div>
</template>

<script>
import {square} from '../assets/js/Gfunction'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.goa()
  },
  methods: {
    goa:function(){
      console.log(square(2))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
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
</style>
