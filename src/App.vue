<template>
  <div id="app">
    <nav>
      <button @click="goToGetAuthCode">카카오 로그인</button>
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
      const redirectURL = "본인리다이렉트경로";
      const key = "본인키";

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
