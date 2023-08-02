import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TestElem } from '@/types';
import fakeList from '@/constants/fakeTestsList.json';

export const useLearningStore = defineStore('learning', () => {
  const passedList = ref<number[]>([]);
  
  const handleQuestionPassFail = (item: TestElem) => {
    const isPassed = checkIsPassed(item.id);
  
    if (isPassed) {
      passedList.value = passedList.value.filter(elem => elem !== item.id);
    } else {
      passedList.value.push(item.id);
    }
  };
  
  const checkIsPassed = (id: number): boolean => {
    return !!passedList.value.find(elem => elem === id);
  };

  return { fakeList, passedList, handleQuestionPassFail, checkIsPassed }
})
