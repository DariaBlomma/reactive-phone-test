<template>
	<div class="question">
		<span class="paragraph-1">{{ props.text }}</span>
		<IconCheckCircle
				v-if="props.isPassed"
				class="icon"
		/>
	</div>
</template>

<script setup lang="ts">
import IconCheckCircle from '@/ui/icons/IconCheckCircle.vue';

interface Props {
	text?: string | number,
	isPassed?: boolean,
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.question {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 71px;
	height: 71px;
	background-color: #fff;
	color: $grey_800;
	box-shadow: $test-elem-shadow;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.4s ease;

	&:hover {
		background-color: rgba($grey_800, 0.7);
		color: #fff;
		box-shadow: $test-elem-hover-shadow;
	}

	&:active {
		background-color: rgba($grey_800, 0.3);
	}
}

.icon {
	position: absolute;
	top: 0;
	right: 0;
}
</style>
