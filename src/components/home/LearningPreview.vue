<template>
<div class="card _big learning-preview">
	<div class="top">
		<EncircledIcon
				class="icon"
				variant="big"
				:icon-component="IconGraduationCap"
		/>
		<h2 class="heading-2">Learning</h2>
		<p class="paragraph-2">
			Category {{ props.category.toUpperCase() }}
		</p>
		<RouterLink
				class="link"
				:to="{ name: 'learning'}"
		>
			<IconShevronCircleRight />
		</RouterLink>
	</div>
	<ProgressBar
			:total="store.fakeList.length"
			:passed="store.passedList.length"
	/>
</div>
</template>

<script setup lang="ts">
import { useLearningStore } from '@/stores/learning';
import EncircledIcon from '@/components/EncircledIcon.vue';
import IconGraduationCap from '@/ui/icons/IconGraduationCap.vue';
import IconShevronCircleRight from '@/ui/icons/IconShevronCircleRight.vue';
import ProgressBar from '@/ui/UiProgressBar.vue';

interface Props {
	category: string,
}

const props = defineProps<Props>();
const store = useLearningStore();
</script>

<style scoped lang="scss">
.learning-preview {
	margin-bottom: 8px;
}

.top {
	display: grid;
	grid-template-areas:
			"icon title link"
			"icon subtitle link"
	;
	grid-template-columns: 58px 1fr 24px;
	align-items: center;
	column-gap: 16px;
	margin-bottom: 16px;
}

.icon {
	background-color: rgba($red_100, 0.5);
	grid-area: icon;
}

.heading-2 {
	color: $grey_800;
}

.paragraph-2 {
	grid-area: subtitle;
	color: $grey_300;
}

.link {
	grid-area: link;
}

@media (max-width: 270px) {
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
	}
}
</style>
