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
	display: flex;
	justify-content: center;
	align-items: center;
}

@media (min-width: $desktop) {
	.wrapper {
		height: 100vh;
	}
}
</style>
