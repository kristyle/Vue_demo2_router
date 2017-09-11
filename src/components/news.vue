<template>
    <div>
      <ul>
        <li v-for="news in newArr">{{news}}</li>
      </ul>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        newArr:['news1','news2','news3']
      }
    }
  }
</script>

<style>

</style>
