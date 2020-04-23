<template>
  <main>
    <Home />
    <FlashMessage position="right top"></FlashMessage>
  </main>
</template>

<script>
import * as auth from './services/auth_service';
import Home from "../js/views/Home";
export default {
  name: 'App',
   components: { Home },
  beforeCreate: async function()  {
    try {
        if(auth.isLoggedIn()) {
          const response = await auth.getProfile();
          this.$store.dispatch('authenticate', response.data);
        }
    } catch (error) {
          auth.logout();
    }
  }
}
</script>