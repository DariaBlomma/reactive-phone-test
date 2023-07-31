<template>
<div class="quick-links-list">
	<div
			class="item"
			v-for="item in list"
			:key="item.id"
	>
		<EncircledIcon
				class="icon"
				variant="middle"
				:icon-component="item.icon"
		/>

		<p class="paragraph-2">{{ item.title }}</p>
	</div>
</div>
</template>

<script setup lang="ts">
import EncircledIcon from '@/components/EncircledIcon.vue';
import IconPen from '@/ui/icons/IconPen.vue';
import IconChartBar from '@/ui/icons/IconChartBar.vue';
import IconBookText from '@/ui/icons/IconBookText.vue';
import IconBookmarksUser from '@/ui/icons/IconBookmarksUser.vue';

const list = [
	{
		id: 1,
		title: 'Mistakes',
		icon: IconPen,
	},
	{
		id: 2,
		title: 'Statistics',
		icon: IconChartBar,
	},
	{
		id: 3,
		title: 'Highway Code',
		icon: IconBookText,
	},
	{
		id: 4,
		title: 'Favorites',
		icon: IconBookmarksUser,
	},

]
</script>

<style scoped lang="scss">
.quick-links-list {
	display: flex;
	justify-content: space-evenly;
	gap: 30px;
	margin-bottom: 72px;
}

.item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	color: $grey_800;
	text-align: center;
	transition: opacity 0.4s ease;

	&:hover {
		opacity: 0.7;
	}

	&:active {
		opacity: 0.5;
	}
}

.icon {
	background-color: $red_500;
}

@media (max-width: $mobile) {
	.quick-links-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
