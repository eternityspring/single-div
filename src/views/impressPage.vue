<script setup>

</script>

<template>
  <section class="container impress">
    <div class="row">
      <div class="col-2">
        <div class="loader"></div>
      </div>
      <div class="col-2" ng-repeat="x in [1,2,3,4,5]">
        <div class="infinity"></div>
      </div>
    </div>
  </section>

  <section class="shapes-footer">
    <div class="text-center">
      <router-link to="/" class="btn">再看一遍</router-link>
      <p>探索新奇 享受快乐^.^</p>
    </div>
  </section>
</template>