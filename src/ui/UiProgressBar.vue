<template>
<div class="progress-bar">
	<slot name="title">
		<p class="paragraph-2">
			{{ title }}
		</p>
	</slot>
	<div class="progress-line">
		<div
				v-for="elem in progressElemsCount"
				:key="elem"
				class="elem"
		>
			<div
					class="filler"
					:style="{
						width: calculateFillerWidth(elem)
					}"
			></div>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
/*
Компонент учитывает дробные вариации прогресса,
каждый пройденный вопрос учитывается.
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

const title = computed(() => {
	return `${props.passed} ${conjugateWord('question', props.passed)} out of ${props.total} passed`;
});

const progressElemsCount = computed(() => Math.ceil(props.total / props.step));
const filledCount = computed<string>(() => {
	return (props.passed / props.step).toFixed(2);
});
const integerFilled = Math.floor(Number(filledCount.value));
const fractionFilled = filledCount.value.slice(-2);

const calculateFillerWidth = (elem: number): string => {
	let width = '0';
	if (elem <= integerFilled ) {
		width = '100%';
	} else if (elem === integerFilled + 1) {
		width = `${fractionFilled}%`;
	}
	return width;
}
</script>

<style scoped lang="scss">
.paragraph-2 {
	margin-bottom: 8px;
	color: $grey_800;
}

.progress-line {
	display: grid;
	grid-template-columns: repeat(v-bind(progressElemsCount), 1fr);
	grid-column-gap: 4px;
}

.elem {
	height: 6px;
	border-radius: 5px;
	background-color: rgba($green_400, 0.1);
}

.filler {
	height: 100%;
	background-color: $green_400;
	border-radius: inherit;
}
</style>
