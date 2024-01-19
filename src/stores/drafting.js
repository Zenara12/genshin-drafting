/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDraftingStore = defineStore('drafting', () => {
  const PhaseCounter = ref(0);
  const Sequence = ref(['ban','pick','pick','pick','pick','pick','pick','pick','pick']);
  const seqCounter = ref(0);
  const charDraft = ref([]);
  const player = ref('aether');
  const pickSeq = ref([1,2,2,2,1]);
  const pickSeqCounter = ref(0);
  const pickCounter = ref(0);

  const Draft =(character)=>{
    if(seqCounter.value == Sequence.value.length){ return true };
    let char = character;
    
    switch(Sequence.value[seqCounter.value]){
        case 'ban':
            char['draft'] = 'ban';
            char['player']=player.value;
            console.log(player.value);
            player.value ='lumine';
            break;
        case 'pick':
            char['draft'] = 'pick';
            console.log(player.value);
            
            pickCounter.value+=1;
            if(pickCounter.value == pickSeq.value[pickSeqCounter.value]){
                pickCounter.value=0;
                pickSeqCounter.value+=1;
                break;
            }
            if(player.value == 'aether'){
                char['player']='aether';
                player.value ='lumine';
            }else{
                char['player']='lumine';
                player.value ='aether'
            }
            
            break;
    }
    charDraft.value.push(char);
    seqCounter.value+=1;
    
  }

  return { Draft,charDraft  }
})
