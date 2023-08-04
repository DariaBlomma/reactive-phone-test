<template>
<footer class="app-footer">
	<RouterLink
			v-for="item in list"
			:key="item.id"
			class="elem"
			:class="{ _active: item.routeName === route.name }"
			:to="{ name: item.routeName }"
	>
		<EncircledIcon
				class="icon"
				:class="{ _active: item.routeName === route.name }"
				:icon-component="item.icon"
		/>
		<h6 class="heading-6">{{ item.title}}</h6>
	</RouterLink>
</footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { ComponentPublicInstance } from 'vue';
import IconHome from '@/ui/icons/IconHome.vue';
import IconRoute from '@/ui/icons/IconRoute.vue';
import IconRanking from '@/ui/icons/IconRanking.vue';
import IconUser from '@/ui/icons/IconUser.vue';
import EncircledIcon from '@/components/EncircledIcon.vue';

interface FooterItem {
	id: number,
	icon: ComponentPublicInstance,
	title: string,
	routeName: string,
}

const route = useRoute();

const list: FooterItem[] = [
	{
		id: 1,
		icon: IconHome,
		title: 'Home',
		routeName: 'home',
	},
	{
		id: 2,
		icon: IconRoute,
		title: 'Your plan',
		routeName: 'plan',
	},
	{
		id: 3,
		icon: IconRanking,
		title: 'Leaderboard ',
		routeName: 'leaderboard',
	},
	{
		id: 4,
		icon: IconUser,
		title: 'Profile ',
		routeName: 'profile',
	},
]
</script>

<style scoped lang="scss">
.app-footer {
	position: sticky;
	bottom: 16px;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 16px 24px 32px;
	background-color: #fff;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	box-shadow: -1px 17px 12px -1px rgba(255, 255, 255, 0.5);
}

.elem {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: $grey_300;
	text-decoration: none;
	cursor: pointer;
	user-select: none;
	transition: all 0.4s ease;

	&._active {
		color: $orange_400;

		:deep(.path) {
			fill: $orange_400;
		}
	}

	&:hover {
		opacity: 0.7;
	}
}

.icon {
	border-radius: 15px;
	margin-bottom: 4px;
	background-color: transparent;

	&._active {
		background-color: rgba($orange_400, 0.25);
	}
}

@media (max-width: 300px) {
	.app-footer {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: $desktop) {
	.app-footer {
		left: initial;
		right: initial;
	}
}
</style>
