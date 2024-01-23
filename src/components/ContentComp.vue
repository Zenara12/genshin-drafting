<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';
import {useCharacterStore} from '@/stores/character.js'
import {useDraftingStore} from '@/stores/drafting.js'


const draftStore=useDraftingStore();
const charStore = useCharacterStore();


const characters = ref([{id:"",
  fullname:"",
  star:0,
  nickname:"",
  dsbl:false
  }]);
const path = charStore.path;
const imgExt = charStore.imgExt;
const char = ref();
charStore.fetchChar().then(value=>{ characters.value = value;});
const oldIndex = ref();
const currentIndex = ref();
const imgClass = ref('image-container');
const draftName = ref(draftStore.Sequence[draftStore.seqCounter]);

const displayBtn = (index)=>{
  currentIndex.value = index;
  if(oldIndex.value != undefined){
    document.getElementById(`btn${oldIndex.value}`).style.display = "none";
  }
  document.getElementById(`btn${currentIndex.value}`).style.display = "grid";
  oldIndex.value = currentIndex.value;
  
};

const draftButton =(index)=>{
  if(char.value){
    let charImg = document.getElementById(`img${currentIndex.value}`);
    draftStore.Draft(char.value);
    document.getElementById(`btn${currentIndex.value}`).style.display = "none";
    characters.value[index].dsbl = true;
    console.log(characters.value[index]);
    charImg.className = `img-disable ${imgClass.value}`;
    document.getElementById(`char${index}`).checked = false;
   
  }
};
</script>

<template>
    
    <div class="container">
        
        <h1>GENSHIN CHARACTERS</h1>
        
    </div>
        <div class="container">
           
              <div 
                  v-for="character,index in characters" 
                  :key="character.id" 
                  :class="character.star == 5?`star5 ${imgClass}` : `star4 ${imgClass}`"
                  :id = "`img${index}`"
                  >
                  <label class="labl">
                    <input type="radio" v-model="char" name="char" :disabled="character.dsbl" :value="character" :id = "`char${index}`" @click="displayBtn(index)">
                    <div>
                      <div class="star-container">
                          <img src="../assets/star.png" alt="" class="image-star">
                          {{ character.star }}
                      </div>
                      <img :src=path.concat(character.nickname.concat(imgExt)) alt="" class="image-char">
                      <div class="image-name">{{ character.fullname }}</div>
                      <button @click="draftButton(index)" :id="`btn${index}`" 
                      :class="draftStore.Sequence[draftStore.seqCounter] == 'ban'?'btn-draft btn-red':'btn-draft btn-blue'"
                      
                      >{{ draftStore.Sequence[draftStore.seqCounter] }}</button>
                    </div>
                    
                  </label>
              </div>
        </div>    
</template>

<style scoped>
.img-disable{
  background: rgb(109, 109, 109);
  background: linear-gradient(180deg, rgb(228, 228, 228) 0%, rgb(0, 0, 0) 100%);
}
.btn-draft{
  display: none;
  width: 100%;
  align-items: center;
  text-align: center;
  border-radius: 1rex;
  text-transform: uppercase;
  font-weight: bold;
}
.btn-red{
  color: white;
  background-color: red;
}
.btn-blue{
  color: yellow;
  background-color: blue;
}
.labl {
}
.labl > input{ /* HIDE RADIO */
    visibility: hidden; /* Makes input not-clickable */
    position: absolute; /* Remove input from document flow */
}
.labl > input + div{ /* DIV STYLES */
    cursor:pointer;
    border:2px solid transparent;
    border-radius: 2rex;
}
.labl > input:checked + div{ /* (RADIO CHECKED) DIV STYLES */
    background-color: #ffd6bb;
    border: 1px solid #ff6600;
}

</style>