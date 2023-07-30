<template>
<header class="header-line">
	<h3 class="heading-3">Ray Driving Theory</h3>
	<div
			class="icons"
			v-if="props.isPremium || props.fireNumbers"
	>
		<div
				v-if="props.isPremium"
				class="button _premium"
		>
			<IconCrown />
		</div>
		<div
				v-if="props.fireNumbers"
				class="button _fire"
		>
			<IconFire />
			<h5 class="heading-5">{{ props.fireNumbers }}</h5>
		</div>
	</div>
</header>
</template>

<script setup lang="ts">
import IconCrown from '@/ui/icons/IconCrown.vue';
import IconFire from '@/ui/icons/IconFire.vue';

interface Props {
	isPremium?: boolean,
	fireNumbers?: number,
}

const props = withDefaults(defineProps<Props>(), {
	fireNumbers: 0,
});
</script>

<style scoped lang="scss">
.header-line {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 16px;
	margin-bottom: 8px;
}

.icons {
	display: flex;
	gap: 8px;
}

.button {
	display: flex;
	align-items: center;
	gap: 4px;
	border-radius: 8px;
	background-color: #fff;
	color: $grey_800;
	cursor: pointer;
	user-select: none;
	transition: background-color, color 0.4s ease;

	&._premium {
		padding: 4px 6px;
	}

	&._fire {
		padding: 4px 8px;
	}

	&:hover {
		background-color: rgba($grey_800, 0.7);
		color: #fff;
	}

	&:active {
		background-color: rgba($grey_800, 0.5);
	}
}
</style>
