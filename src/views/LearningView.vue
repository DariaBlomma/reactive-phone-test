<template>
  <div class="view _small-content learning-view">
    <AppHeader current-route="Learning" />
	  <TestsList />
  </div>
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import TestsList from '@/components/learning/TestsList.vue';
</script>
