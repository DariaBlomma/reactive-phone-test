<template>
<div class="learning-preview">
	<div class="top">
		<EncircledIcon
				class="icon"
				variant="big"
				:icon-component="IconGraduationCap"
		/>
		<IconShevronCircleRight />
	</div>
</div>
</template>

<script setup lang="ts">
import EncircledIcon from '@/components/EncircledIcon.vue';
import IconGraduationCap from '@/ui/icons/IconGraduationCap.vue';
import IconShevronCircleRight from '@/ui/icons/IconShevronCircleRight.vue';
</script>

<style scoped lang="scss">
.top {
	display: flex;
}

.icon {
	background-color: rgba($red_100, 0.5);
}
</style>
