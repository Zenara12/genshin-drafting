<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';
import { useDraftingStore } from '@/stores/drafting';
import {useCharacterStore} from '@/stores/character.js'
import DraftComp from './DraftComp.vue';

const draftStore = useDraftingStore();
const draftChars = draftStore.charDraft;
const charStore = useCharacterStore();
const path = ref(charStore.path);
const imgExt = ref(charStore.imgExt);
const imgClass = ref('image-container');
const player1 = 'lumine';
const ban = 'ban';
const pick = 'pick';

</script>

<template>
    
    <div class="team-container">
        <div :class="draftStore.player == player1? player1:player1+' blur'">
          <img src="../assets/traveler1.png" >
          <h1>Team Lumine</h1>
          <div>
                <h2 style="color: rgb(255, 34, 0);">
                 BAN
                </h2>
                <div class="container">
                <DraftComp
                  v-model:draftChars="draftChars"
                  v-model:img-class="imgClass"
                  v-model:img-ext="imgExt"
                  v-model:path-name="path"
                  v-model:player-name="player1"
                  v-model:draft-option="ban"
                />
                </div>
            </div>
            <div>
                <h2 style="color: rgb(0, 0, 255);">
                 PICK
                </h2>
                <div class="container">
                  <DraftComp
                    v-model:draftChars="draftChars"
                    v-model:img-class="imgClass"
                    v-model:img-ext="imgExt"
                    v-model:path-name="path"
                    v-model:player-name="player1"
                    v-model:draft-option="pick"
                  />  
                </div>
            </div>
        </div>
      </div>
</template>

<style scoped>
.blur{
  opacity: 0.6;
}

.team-container{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.team-container > div {
  border-radius: 5px;
  backdrop-filter: blur(20px);
  background-color:rgba(255, 255, 255, 0.3);
  text-align: center;
  padding: 1rex;
}
.team-container>div>img{
  width: 100%;
  height: auto;
  max-width: 10em;
}
.team-container>div>h1{
  width: 100%;
  height: auto;
}
</style>