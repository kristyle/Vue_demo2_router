<template>
  <div>
    <h2>Home</h2>
    <div>Home route component!<input type="text"></div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">news</router-link>
        </li>
        <li>
          <router-link to="/home/message">message</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{}
</script>

<style>

</style>
