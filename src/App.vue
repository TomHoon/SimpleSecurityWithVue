<template>
  <div id="app">
    <nav>
      <button @click="goToGetAuthCode">Test</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goToGetAuthCode() {
      const kakao_auth_code_path = "https://kauth.kakao.com/oauth/authorize";
      const redirectURL = "http://localhost:5173/member/kakao";
      const key = "41d2a43168a7edd9f941329667a65ef4";

      location.href = `${kakao_auth_code_path}?client_id=${key}&redirect_uri=${redirectURL}&response_type=code`;
    },
  },
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
