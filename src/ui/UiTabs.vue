<template>
<div class="ui-tabs">
	<div class="header">
		<div
				v-for="tab in props.tabs"
				:key="tab.id"
				class="tab"
				:class="{ _active: activeId === tab.id }"
				@click="handleTabClick(tab)"
		>
			<h5 class="heading-5">{{ tab.name }}</h5>
		</div>
	</div>
	<slot :active-id="activeId"></slot>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Tab {
	id: string | number,
	name?: string,
}

interface Props {
	tabs: Tab[],
}
const props = defineProps<Props>();
const activeId = ref(props.tabs[0].id);

const handleTabClick = (tab: Tab) => {
	activeId.value = tab.id;
};
</script>

<style scoped lang="scss">
.header {
	display: flex;
	gap: 16px;
}

.tab {
	width: fit-content;
	padding: 14px 36px;
	margin: 0 auto;
	margin-bottom: 26px;
	color: $grey_300;
	border-bottom: 2px solid $grey_300;
	transition: all 0.4s ease;

	&._active {
		color: $orange_400;
		border-bottom: 2px solid $orange_400;

		&:hover {
			color: darken($orange_400, 20%);
			border-bottom: 2px solid darken($orange_400, 20%);
		}
	}

	&:hover {
		color: $grey_800;
		border-bottom: 2px solid $grey_800;
		cursor: pointer;
		user-select: none;
	}
}
</style>
