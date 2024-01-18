import { defineStore } from 'pinia'
import { supabase } from '@/supabase';

export const useCharacterStore = defineStore('character', () => {
   
      const imgExt = ".png";
      const path ="https://rijakxntrvcnycjksjcb.supabase.co/storage/v1/object/public/characterIcon/";
      
      const fetchChar = async () =>{
        try {
          let { data: chars } = await supabase
            .from('characters')
            .select('*')
            .order('star',{ascending:false})
          //console.log(chars);
          
          return chars;
        } catch (e) {
          if(e instanceof Error) alert (e.message);
        }
      }

  return { imgExt, path, fetchChar }
})
