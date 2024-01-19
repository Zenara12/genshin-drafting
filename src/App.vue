<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <header>
      <div class="team-container">
        <div class="lumine">
          <img src="./assets/traveler1.png" >
          <h1>Team Lumine</h1>
        </div>
        <div class="aether">
          <img src="./assets/traveler2.png" >
          <h1>Team Aether</h1>
        </div>
      </div>
    </header>
    <article>
      <RouterView />
    </article>
  </main>
</template>

<style scoped>
.team-container{
  display: flex;
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
