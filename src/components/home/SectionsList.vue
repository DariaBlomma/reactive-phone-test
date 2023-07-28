<template>
<div class="sections-list">
	<div
			class="section"
			v-for="item in list"
			:key="item.id"
	>
		<EncircledIcon
				class="icon"
				:class="item.className"
				:icon-component="item.iconComponent"
		/>
		{{ item.title }}
	</div>
</div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import EncircledIcon from '@/components/EncircledIcon.vue';
import IconLExam from '@/ui/icons/IconLExam.vue';
import IconRocketLaunch from '@/ui/icons/IconRocketLaunch.vue';
import IconTVPlay from '@/ui/icons/IconTVPlay.vue';
import IconRoadTurn from '@/ui/icons/IconRoadTurn.vue';
import IconGameController from '@/ui/icons/IconGameController.vue';

interface Section {
	id: number,
	title: string,
	iconComponent: ComponentPublicInstance,
	className?: string,
}

const list: Section[] = [
	{
		id: 1,
		title: 'DVSA Exam',
		iconComponent: IconLExam,
		className: '_red',
	},
	{
		id: 2,
		title: 'Express mode',
		iconComponent: IconRocketLaunch,
	},
	{
		id: 3,
		title: 'Hazard perception',
		iconComponent: IconTVPlay,
	},
	{
		id: 4,
		title: 'Road signs',
		iconComponent: IconRoadTurn,
	},
	{
		id: 5,
		title: 'Multiplayer Learning',
		iconComponent: IconGameController,
	},
];
</script>

<style scoped lang="scss">
.section {
	display: flex;
	align-items: center;
}

.icon {
	&._red {
		background-color: rgba($red_500, 0.1);

		:deep(.path) {
			fill: $red_500;
		}
	}
}
</style>
