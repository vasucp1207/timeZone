<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezone } from '../composoables/data';
import { addToTimezone } from '../composoables/state';
import { Timezone } from '../types';

const fuse = new Fuse(timezone, {
  keys: ['name'],
  threshold: 0.3,
})

const index = ref(0)
const input = ref('')
const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(t: Timezone) {
    addToTimezone(t)
    input.value = ''
    index.value = 0
}

</script>

<template>
  <div relative>
    <input v-model="input" type="text" placeholder="Search timezone..."
      p="x3 y2" text-xl border="~ base rounded" bg-transparent w-full />
    <div v-show="input" absolute top-full bg-gray-900 left-0 right-0>
      <button @click="add(i.item)" v-for="i of searchResult" :key="i.refIndex" flex gap2 font-mono>
        <div>{{ i.item.offset }}</div>
        <div w-10 text-right>{{ i.item.name }}</div>
      </button>
    </div>
  </div>
</template>

