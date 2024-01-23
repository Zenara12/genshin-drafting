<!-- eslint-disable no-unused-vars -->
<script setup>
import ContentComp from './ContentComp.vue';
import Player1Comp from './Player1Comp.vue';
import Player2Comp from './Player2Comp.vue';


</script>

<template>
  <div class="grid-container">
      <div class="sidenavL">
        <Player1Comp/>
      </div>
  <main>
      <article class="main">
        <ContentComp/>
      </article>
  </main>
  <div class="sidenavR">
        <Player2Comp/>
      </div>
    </div>
</template>


<style scoped>
.main{
  overflow: auto;
  max-height: 700px;
}
.grid-container {
	display: grid;
	grid-template-columns: minmax(auto,250px) minmax(150px,auto) minmax(auto,250px);
}
</style>