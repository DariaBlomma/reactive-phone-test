<template>
  <div class="view home-view">
	  <HeaderLine
			  user-name="Ray"
			  is-premium
			  :fire-amount="13"
	  />
	  <LearningPreview category="B" />

	  <div style="margin: 20px">
		  <SectionsList />
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

import SectionsList from '@/components/home/SectionsList.vue';
import LearningPreview from '@/components/home/LearningPreview.vue';
import QuickLinksList from '@/components/home/QuickLinksList.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped lang="scss">
</style>
