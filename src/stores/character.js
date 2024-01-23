import { defineStore } from 'pinia'
import { supabase } from '@/supabase';
import { ref } from 'vue';

export const useCharacterStore = defineStore('character', () => {
   
      const imgExt = ".png";
      const path ="https://rijakxntrvcnycjksjcb.supabase.co/storage/v1/object/public/characterIcon/";
      const characters = ref([{id:"",
      fullname:"",
      star:0,
      nickname:""}]);
      
      const fetchChar = async () =>{
        try {
          let { data: chars } = await supabase
            .from('characters')
            .select('*')
            .order('star',{ascending:false})
          //console.log(chars);
          characters.value =chars;
          characters.value.map(item =>{
            item['dsbl']=false;
            return item;
          });
          return characters.value;
        } catch (e) {
          if(e instanceof Error) alert (e.message);
        }
      };

  return { characters,imgExt, path, fetchChar }
})
