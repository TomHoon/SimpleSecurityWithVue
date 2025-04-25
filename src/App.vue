<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav {
  margin-bottom: 1rem;
}

router-link {
  margin: 0 0.5rem;
}
</style>
