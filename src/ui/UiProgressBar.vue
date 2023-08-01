<template>
<div class="progress-bar">
	<slot name="title">
		<p class="paragraph-2">
			{{ title }}
		</p>
	</slot>
	<div class="progress-line">
		<div
				v-for="elem in elemsCount"
				:key="elem"
				class="elem"
				:class="{ _filled: elem <= filledCount }"
		></div>
	</div>
</div>
</template>

<script setup lang="ts">
/*
Компонент не учитывает дробные вариации прогресса.
Например, 20 вопросов, шаг - 5, то есть всего 4 полоски.
Если пройдено 7 вопросов, будет заполнена только 1 полоска
 */

import { computed } from 'vue';
import { conjugateWord } from '@/helpers';

interface Props {
	total: number,
	passed: number,
	step?: number,
}

const props = withDefaults(defineProps<Props>(), {
	step: 5,
});

const elemsCount = computed(() => Math.ceil(props.total / props.step));
const filledCount = computed(() => {
	return props.passed >= props.step ? Math.floor(props.passed / props.step) : 0;
});

const title = computed(() => {
	return `${props.passed} ${conjugateWord('question', props.passed)} out of ${props.total} passed`;
});
</script>

<style scoped lang="scss">
.paragraph-2 {
	margin-bottom: 8px;
	color: $grey_800;
}

.progress-line {
	display: grid;
	grid-template-columns: repeat(v-bind(elemsCount), 1fr);
	grid-column-gap: 4px;
}

.elem {
	height: 6px;
	border-radius: 5px;
	background-color: rgba($green_400, 0.1);
	transition: background-color 0.4s ease;

	&._filled {
		background-color: $green_400;
	}
}
</style>
