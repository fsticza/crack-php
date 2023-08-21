<script setup lang="ts">
  import Album from './Album.vue'
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div v-for="item in [1,2]" class="col"><Album /></div>
  </div>
</template>