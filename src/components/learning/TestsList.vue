<template>
<div class="tests">
	<UiTabs :tabs="tabs" v-slot="slotProps: SlotProps">
		<div
				v-if="slotProps.activeId === 1"
				class="list"
		>
			<TestQuestion
					v-for="item in store.fakeList"
					:key="item.id"
					:item="item"
					:is-passed="store.checkIsPassed(item.id)"
					@click="handleQuestionClick(item)"
			/>
		</div>
	</UiTabs>
</div>
</template>

<script setup lang="ts">
import type { TestElem } from '@/types';
import { useLearningStore } from '@/stores/learning';
import TestQuestion from '@/components/learning/TestQuestion.vue';
import UiTabs from '@/ui/UiTabs.vue';

interface SlotProps {
	activeId: number,
}

const store = useLearningStore();

const tabs = [
	{
		id: 1,
		name: 'Tests',
	},
];

const handleQuestionClick = (item: TestElem) => {
	store.handleQuestionPassFail(item);
};
</script>

<style scoped lang="scss">
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, 69px);
	gap: 15px;
}
</style>
