<template>
<div>
  <ul>
    <li v-for="message in messages">
      <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>

</template>

<script>
  export default{
    data(){
      return{
        messages:[],
      }
    },
    mounted(){
      setTimeout(()=>{
        this.messages=[
          {id:1,title:'message01'},
          {id:2,title:'message02'},
          {id:3,title:'message03'},
        ]
      },200)
  }
  }
</script>

<style>

</style>
