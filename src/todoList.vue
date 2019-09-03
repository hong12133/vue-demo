<template>
    <div>
      <div>
        <input  v-model="inputValue" />
        <button  @click="handleSubmit">提交</button>
      </div>
        <ul>
            <todo-item
              v-for="(item,index) of list"
              :key="index"
              :content="item"
              :index="index"
              @delete_one="handleDelete"
            >

            </todo-item>
        </ul>
    </div>
</template>

<script>
    import TodoItem from './components/TodoItem.vue'
    import axios from 'axios'
    export default {
        components:{
          'todo-item':TodoItem
        },
        data: function () {
          return {
            inputValue:'',
            list:[]
          }
        },
         created(){
           console.log("123",'1123')
         /*  axios.get("/static/data",{params:{id:11}}).then((data)=>{
             console.log(data)

          })*/
           axios({
             method:'get',
             url:'/static/data',
             params:{
               id:11
             }
           }).then((data)=>{
             console.log(data)
           })
      },
        methods:{
          handleSubmit(){
            this.list.push(this.inputValue)
            this.inputValue=''
          },
          handleDelete(index){
            this.list.splice(index,1)
          }
        }
    }
</script>

<style scoped>

</style>
