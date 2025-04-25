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
      const redirectURL = "본인리다이렉트경로";
      const key = "본인키";
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

      await axios.post("백엔드경로", {
        accessToken,
      });
    },
  },
};
</script>
