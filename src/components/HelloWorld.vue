<template>
  <div class="hello">
    <div>
        <h1>{{count}}</h1>
        <button @click="increment"> + </button>
        <button @click="decrement"> - </button>
         <el-button @click="visible = true">按钮</el-button>
    </div>
    <div>
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
      <i class="el-icon-loading"></i>
    </div>
  </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                 show3: true
            }
        },
        computed : mapState({
            count : state => state.count
        }),
        methods : {
            increment(){
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            },
        }

    }
</script>

<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
      }
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
