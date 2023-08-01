<template>
<div class="tests">
	<div class="title">
		<h5 class="heading-5">Tests</h5>
	</div>

	<div class="list">
		<TestQuestion
				v-for="item in 20"
				:key="20"
				:text="item"
				:is-passed="item === 4"
		/>
	</div>
</div>
</template>

<script setup lang="ts">

import TestQuestion from '@/components/learning/TestQuestion.vue';
</script>

<style scoped lang="scss">
.title {
	width: fit-content;
	padding: 14px 36px;
	margin: 0 auto;
	margin-bottom: 26px;
	color: $orange_400;
	border-bottom: 2px solid $orange_400;
}

.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, 69px);
	gap: 15px;
}
</style>
