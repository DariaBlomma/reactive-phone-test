<template>
<div class="tests">
	<div class="title">
		<h5 class="heading-5">Tests</h5>
	</div>

	<div class="list">
		<TestQuestion
				v-for="item in store.fakeList"
				:key="item.id"
				:item="item"
				:is-passed="store.checkIsPassed(item.id)"
				@click="handleQuestionClick(item)"
		/>
	</div>
</div>
</template>

<script setup lang="ts">
import type { TestElem } from '@/types';
import { useLearningStore } from '@/stores/learning';
import TestQuestion from '@/components/learning/TestQuestion.vue';

const store = useLearningStore();

const handleQuestionClick = (item: TestElem) => {
	store.handleQuestionPassFail(item);
};
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
