<template>
  <div>
    <Header />
    <div id="layoutSidenav">
      <!-- <Sidebar /> -->
      <div id="layoutSidenav_content">
        <router-view></router-view>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/core/Header.vue";
import Footer from "../components/core/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
