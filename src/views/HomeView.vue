<template>
  <div class="view _no-padding home-view">
	  <div class="inner-view">
		  <HeaderLine
				  user-name="Ray"
				  is-premium
				  :fire-amount="13"
		  />
		  <LearningPreview category="B" />
		  <SectionsList />
		  <QuickLinksList />
	  </div>
	  <AppFooter />
  </div>
</template>

<script setup lang="ts">
import HeaderLine from '@/components/home/HeaderLine.vue';
import LearningPreview from '@/components/home/LearningPreview.vue';
import SectionsList from '@/components/home/SectionsList.vue';
import QuickLinksList from '@/components/home/QuickLinksList.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped lang="scss">
</style>
