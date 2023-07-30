<template>
  <div class="view home-view">
	  <HeaderLine
			  is-premium
			  :fire-numbers="13"
	  />
	  <RouterLink :to="{ name: 'learning'}">Learning link</RouterLink>

	  <div style="margin: 20px">
		  <IconArrow />
	  </div>

	  <div style="margin: 20px">
		  <SectionsList />
	  </div>
	  <div style="margin: 20px">
		  <LearningPreview />
	  </div>
	  <div style="margin: 20px">
		  <QuickLinksList />
	  </div>
	  <div style="margin: 20px">
		  <AppFooter />
	  </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLine from '@/components/home/HeaderLine.vue';

import IconArrow from '@/ui/icons/IconArrow.vue';
import SectionsList from '@/components/home/SectionsList.vue';
import LearningPreview from '@/components/home/LearningPreview.vue';
import QuickLinksList from '@/components/home/QuickLinksList.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped lang="scss">
</style>
