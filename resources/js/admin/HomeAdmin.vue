<template>
  <div>
    <div id="layoutSidenav">
      <Sidebar />
      <div id="layoutSidenav_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../admin/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  }
};
</script>
