<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--使用指令<router-link>进行导航-->
            <router-link to="/about" class="list-group-item">About</router-link>
            <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
           <!-- 将当前路由组件显示到页面中(现在这个html中的所有内容)-->
            <keep-alive>
                  <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>

</style>
