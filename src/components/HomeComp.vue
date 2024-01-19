<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';
import {useCharacterStore} from '@/stores/character.js'


const charStore = useCharacterStore();
const characters = ref([{id:"",
  fullname:"",
  star:0,
  nickname:""}]);
const path = charStore.path;
const imgExt = charStore.imgExt;
charStore.fetchChar().then(value=>{ characters.value = value; return value});

</script>

<template>
    <div class="container">
      <h1>GENSHIN CHARACTERS</h1> 
    </div>
    <div class="container">
      <div v-for="character in characters" :key="character" :class="character.star == 5?'star5 image-container' : 'star4 image-container'">
        <div class="star-container">
          <img src="../assets/star.png" alt="" class="image-star">
          {{ character.star }}
        </div>
        <img :src=path.concat(character.nickname.concat(imgExt)) alt="" class="image-char">
        <div class="image-name">{{ character.fullname }}</div>
      </div>
    </div>
</template>


<style scoped>
.star5{
  background: rgb(255,154,0);
  background: linear-gradient(180deg, rgba(255,154,0,1) 0%, rgba(255,209,0,1) 100%);
}
.star4{
  background: rgb(184,0,255);
  background: linear-gradient(180deg, rgba(184,0,255,1) 0%, rgba(239,0,255,1) 100%);
}
</style>