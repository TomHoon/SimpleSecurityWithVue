<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    const query = this.$route.query;
    const authCode = query.code;

    this.getAuthorizeCode(authCode);
  },
  methods: {
    async getAuthorizeCode(authCode) {
      const redirectURL = "http://localhost:5173/member/kakao";
      const key = "41d2a43168a7edd9f941329667a65ef4";
      const access_token_url = `https://kauth.kakao.com/oauth/token`; // 토큰 발급 URL

      const header = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const params = {
        grant_type: "authorization_code",
        client_id: key,
        redirect_uri: redirectURL,
        code: authCode,
      };

      const res = await axios.post(access_token_url, params, header);

      const accessToken = res.data.access_token;

      console.log(accessToken);

      await axios.post("http://localhost:8087/api/kakao/token", {
        accessToken,
      });
    },
  },
};
</script>
