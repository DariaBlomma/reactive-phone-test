<template>
<div
		class="circle"
		:class="`_${props.variant}`"
>
		<component
				:is="props.iconComponent"
				:size="iconSize"
		>
		</component>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComponentPublicInstance } from 'vue';

interface Props {
	iconComponent: string | ComponentPublicInstance,
	variant?: 'small' | 'middle' | 'big',
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'small',
});

const iconSize = computed(() => {
	switch(props.variant) {
		case 'small' : {
			return 24;
		}

		case 'middle' : {
			return 28;
		}

		case 'big' : {
			return 32;
		}

		default: {
			throw new Error('EncircledIcon, IconSize - did you forget to register a new case ?');
		}
	}
});
</script>

<style scoped lang="scss">
.circle {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: rgba($purple_500, 0.1);

	&._small {
		width: 40px;
		min-width: 40px;
		height: 40px;
	}

	&._big,
	&._middle {
		min-width: 50px;
		width: 58px;
		height: 58px;
	}
}
</style>
