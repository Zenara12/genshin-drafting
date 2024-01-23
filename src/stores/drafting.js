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
  const pickCounter = ref(1);
  let char;

  const Draft =(character)=>{
    if(PhaseCounter.value > 1){return true}
    
    char = character;

    const playerNameInsert = (name) =>{
        char['player']=name;
        return name;
    }

    const changeName=(name)=>{
        let charname = name;
        if(charname == 'aether'){
            charname ='lumine';
        }else{
            charname ='aether'
        }
        return charname;
    }
    
    switch(Sequence.value[seqCounter.value]){
        case 'ban':
            char['draft'] = 'ban';
            player.value=changeName(playerNameInsert(player.value));
            break;
        case 'pick':
            char['draft'] = 'pick';
            
            if(pickCounter.value == pickSeq.value[pickSeqCounter.value]){
                player.value=changeName(playerNameInsert(player.value));
                pickCounter.value=1;
                pickSeqCounter.value++;
            }
            else{
                
                pickCounter.value++;
                player.value=playerNameInsert(player.value);
                
            }
            
            break;
    }
    charDraft.value.push(char);
    seqCounter.value+=1;

    if(seqCounter.value == Sequence.value.length){ 
        PhaseCounter.value++;
        player.value = 'lumine';
        seqCounter.value=0;
        pickSeqCounter.value=0;
        pickCounter.value=1;
        
    };
    return true;
  }



  return { Draft,charDraft,Sequence,seqCounter,player  }
})
