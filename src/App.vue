<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="shapes-top text-center">
    <h1>Single Div</h1>
    <p>Restricting your available options forces you to re-evaluate the tools you already have.</p>
    <small>限制你的可选项，会让你重新评估手头上已有的工具。</small>
  </header>
  <section class="useful-links">
    <ul>
      <li>
        <router-link to="/">
          <i class="fa fa-home location-icon"></i>首页
        </router-link>
      </li>
      <li>
        <a target="_blank" href="https://github.com/eternityspring/single-div">
          <i class="fa fa-github location-icon"></i>源码
        </a>
      </li>
      <li>
        <a target="_blank" href="http://jq.qq.com/?_wv=1027&k=J6KYRU">
          <i class="fa fa-qq location-icon"></i>交流群:362397329
        </a>
      </li>
      <li>
        <a target="_blank" href="http://79px.com/">
          <i class="fa fa-cubes location-icon"></i>个人网站：{79px}
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/eternityspring/eternityspring.github.io">
          <i class="fa fa-file-code-o location-icon"></i>前端简历
        </a>
      </li>
    </ul>
  </section>
  <RouterView />
</template>

<style scoped>

</style>
