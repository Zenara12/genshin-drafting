<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="team-container lumine">
      <div>
        <img src="./assets/traveler1.png" class="team-image">
        <h1>Team Lumine</h1>
      </div>
    </div>
    <div class="team-container aether">
      <div>
        <img src="./assets/traveler2.png" class="team-image">
        <h1>Team Aether</h1>
      </div>
    </div>
  </header>
  <article>
    <RouterView />
  </article>
</template>

<style scoped>
.team-container{
  width: 100%;
}
.lumine{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.aether{
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.team-image{
  max-width: 10em;
  max-height: auto ;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
