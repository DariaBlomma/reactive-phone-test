<template>
<div class="sections-list">
	<div
			class="card section"
			v-for="item in list"
			:key="item.id"
	>
		<EncircledIcon
				class="icon"
				:class="item.className"
				:icon-component="item.iconComponent"
		/>
		<h4 class="heading-4">{{ item.title }}</h4>
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
.sections-list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 72px);
	gap: 8px;
	margin-bottom: 24px;
}

.section {
	display: flex;
	align-items: center;
	gap: 8px;
	color: rgba(#000, 0.87);
	transition: background-color 0.4s ease, color 0.4s ease;

	&:last-child {
		grid-column: 1 / 3;
	}

	&:hover {
		background-color: rgba($grey_800, 0.7);
		color: #fff;

		.icon {
			background-color: rgba(#fff, 0.2);
		}
	}

	&:active {
		background-color: rgba($grey_800, 0.5);

		.icon {
			background-color: rgba(#fff, 0.2);
		}
	}
}

.icon {
	&._red {
		background-color: rgba($red_500, 0.1);

		:deep(.path) {
			fill: $red_500;
		}
	}
}

@media (max-width: $mobile) {
	.sections-list {
		display: flex;
		flex-direction: column;
	}
}
</style>
