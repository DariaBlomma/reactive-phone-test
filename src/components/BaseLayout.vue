<template>
	<div class="view _no-padding">
		<div class="inner-view">
			<slot></slot>
		</div>
		<AppFooter />
	</div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped>

</style>
