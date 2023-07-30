<template>
	<main class="wrapper">
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.wrapper {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
