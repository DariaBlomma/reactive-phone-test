<template>
	<svg
			class="svg"
			:class="`_${props.variant}`"
			:width="props.width"
			:height="props.height"
			viewBox="0 0 20 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
	>
		<path
				class="path"
				d="M19.5 8.00002C19.5 8.41402 19.164 8.75002 18.75 8.75002H2.561L8.28103 14.47C8.57403 14.763 8.57403 15.238 8.28103 15.531C8.13503 15.677 7.943 15.751 7.751 15.751C7.559 15.751 7.36703 15.678 7.22103 15.531L0.221032 8.53103C-0.0719683 8.23803 -0.0719683 7.76299 0.221032 7.46999L7.22103 0.469994C7.51403 0.176994 7.98901 0.176994 8.28201 0.469994C8.57501 0.762994 8.57501 1.23803 8.28201 1.53103L2.56204 7.251H18.75C19.164 7.25 19.5 7.58602 19.5 8.00002Z"
		/>
	</svg>
</template>

<script setup lang="ts">
interface Props {
	variant?: 'left' | 'right',
	width?: number,
	height?: number,
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'left',
	width: 20,
	height: 16,
});
</script>

<style scoped lang="scss">
.svg {
	&._right {
		transform: rotate(180deg);
	}

	&:hover {
		.path {
			fill: rgba($blue_500, 0.5)
		}
	}

	&:active {
		.path {
			fill: rgba($blue_500, 0.7)
		}
	}
}

.path {
	fill: $blue_500;
	transition: fill 0.4s ease;
}
</style>
