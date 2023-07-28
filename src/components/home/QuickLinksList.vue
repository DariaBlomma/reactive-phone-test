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

		{{ item.title }}
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
	gap: 20px;
}

.icon {
	background-color: $red_500;
}
</style>
