<script setup>
import {ref} from "vue";

const shapeList = ref([
  'line',
  'line-top-bottom',
  'line-left-right',
  'line-top-right',
  'line-border',
  'line-border-radius',
  'line-border-circle',
  'line-border-oval',
  'square',
  'rectangle',
  'circle',
  'oval',
  'triangle-up',
  'triangle-down',
  'triangle-left',
  'triangle-right',
  'triangle-top-left',
  'triangle-top-right',
  'triangle-bottom-left',
  'triangle-bottom-right',
  'triangle-up-o',
  'triangle-down-o',
  'triangle-left-o',
  'triangle-right-o',
  'triangle-top-left-o',
  'triangle-top-right-o',
  'triangle-bottom-left-o',
  'triangle-bottom-right-o',
  'trapezoid',
  'parallelogram',
  'star-six',
  'star-five',
  'pentagon',
  'hexagon',
  'octagon',
  'heart',
  'infinity',
  'diamond',
  'diamond-shield',
  'diamond-narrow',
  'cut-diamond',
  'egg',
  'pacman',
  'talkbubble',
  'burst-12',
  'burst-8',
  'css-text'
])
</script>

<template>
  <section class="container-fluid shapes">
    <div class="row">
      <div v-for="s in shapeList" class="shapes-item list-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div :class="s"></div>
      </div>
    </div>
  </section>
  <section class="shapes-footer">
    <div class="text-center">
      <router-link to="/create" class="btn">大开脑洞</router-link>
      <p>让我们大开脑洞 欣赏一些稍有难度的^.^</p>
    </div>
  </section>
</template>