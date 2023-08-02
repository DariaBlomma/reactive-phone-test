<template>
	<main class="wrapper">
		<RouterView v-slot="{ Component }">
			<Transition name="fade">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
