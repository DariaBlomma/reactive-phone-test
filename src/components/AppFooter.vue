<template>
<footer class="app-footer">
	<div
			class="elem"
			:class="{ _active: item.isActive }"
			v-for="item in list"
			:key="item.id"
	>
		<component
				class="icon"
				:is="item.icon"
				:size="24"
		>
		</component>
		{{ item.title}}
	</div>
</footer>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import IconHome from '@/ui/icons/IconHome.vue';
import IconRoute from '@/ui/icons/IconRoute.vue';
import IconRanking from '@/ui/icons/IconRanking.vue';
import IconUser from '@/ui/icons/IconUser.vue';

interface FooterItem {
	id: number,
	icon: ComponentPublicInstance,
	title: string,
	isActive: boolean,
}

const list: FooterItem[] = [
	{
		id: 1,
		icon: IconHome,
		title: 'Home',
		isActive: true, //todo: base on current route
	},
	{
		id: 2,
		icon: IconRoute,
		title: 'Your plan',
		isActive: false,
	},
	{
		id: 3,
		icon: IconRanking,
		title: 'Leaderboard ',
		isActive: false,
	},
	{
		id: 4,
		icon: IconUser,
		title: 'Profile ',
		isActive: false,
	},
]
</script>

<style scoped lang="scss">
.app-footer {
	display: flex;
	justify-content: space-around;
}

.elem {
	display: flex;
	flex-direction: column;

	&._active {
		color: $orange_400;
		transition: color 0.4s ease;

		:deep(.path) {
			fill: $orange_400;
			transition: fill 0.4s ease;
		}
	}
}
</style>
