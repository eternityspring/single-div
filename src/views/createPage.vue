<script setup>
import {ref} from "vue";

const createList = ref([
  'triangle-up-tree',
  'ba-gua',
  'badge-ribbon',
  'magnifying-glass',
  'facebook-icon',
  'moon',
  'cross',
  'create-computer',
  'burger',
  'tag-green',
  'slack-icon',
  'man',
  'chrome',
  'pacman-animate',
  'drip',
  'coffee-mug',
  'loader'
])
</script>

<template>
  <section class="container-fluid create">
    <div class="row">
      <div v-for="s in createList" class="create-item list-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div :class="s"></div>
      </div>
    </div>
  </section>

  <section class="shapes-footer">
    <div class="text-center">
      <router-link to="/" class="btn">返回首页</router-link>
      <p>探索新奇 享受快乐^.^</p>
    </div>
  </section>
</template>