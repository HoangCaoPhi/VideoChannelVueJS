<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <router-link to="/home" class="nav-link" exact>
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </router-link>

          <div class="sb-sidenav-menu-heading">Interface</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>Videos
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link to="/home/categories" class="nav-link" exact>
                <span>Category</span>
              </router-link>
            </nav>
          </div>
          <div class="col-md-6" v-on:click="adminScope">
            <button class="btn btn-primary">Admin Scope</button>
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>User
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link to="/home/categories" class="nav-link" exact>
                <span>Category</span>
              </router-link>
            </nav>
          </div>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>Admin
      </div>
    </nav>
  </div>
</template>
<script>
import * as user from "../../services/user_service";
export default {
  methods: {
    adminScope: async function() {
      try {
        const response = await user.adminScope();
        console.log(response);
      } catch (error) {
        console.log(" " + error, error.response.status);
      }
    }
  }
};
</script>