<script setup>
    const draftChars = defineModel('draftChars');
    const imgClass = defineModel('imgClass');
    const imgExt = defineModel('imgExt');
    const path = defineModel('pathName');
    const playerName = defineModel('playerName');
    const draftOption = defineModel('draftOption');
</script>

<template>
    <div
        v-for="draftChar,index in draftChars"
        :key="index"
        >
        <div 
        v-if="draftChar.player == playerName && draftChar.draft == draftOption "
        :class="draftChar.star == 5?`star5 ${imgClass}` : `star4 ${imgClass}`"
        >
            <div>
                <div class="star-container">
                    <img src="../assets/star.png" alt="" class="image-component-star-container">
                    {{ draftChar.star }}
                </div>
                <img :src=path.concat(draftChar.nickname.concat(imgExt)) alt="" class="image-component-container">
                <div class="image-name">{{ draftChar.nickname }}</div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.image-component-container{
    max-width: 50px;
    max-height: 50px;
}
.image-component-star-container{
    max-width: 15px;
    max-height: 15px;
}
</style>