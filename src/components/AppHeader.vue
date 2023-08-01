<template>
<header class="app-header">
	<IconArrow @click="handleArrowClick" />
	<h3 class="heading-3">{{ props.currentRoute }}</h3>
</header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconArrow from '@/ui/icons/IconArrow.vue';

interface Props {
	currentRoute?: string,
}
const props = defineProps<Props>();

const router = useRouter();

const handleArrowClick = () => {
	router.back();
};
</script>

<style scoped lang="scss">
.app-header {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 15px 16px;
}

.heading-3 {
	color: $grey_800;
}
</style>
