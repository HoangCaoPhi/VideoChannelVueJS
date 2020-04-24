<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand" exact>
        <i class="fab fa-youtube" style=" color: red !important;"></i>
        <span>Video Channel</span>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto">
          <Search></Search>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->
          <li class="nav-item" v-if="$store.state.isLoggedIn !== true">
            <router-link to="/login" class="dropdown-item">
              <span>
                <i class="fas fa-user-plus"></i> Login
              </span>
            </router-link>
          </li>
          <li class="nav-item" v-if="$store.state.isLoggedIn !== true">
            <router-link to="/register" class="dropdown-item">
              <span>
                <i class="fas fa-sign-in-alt"></i> Register
              </span>
            </router-link>
          </li>
        </ul>
        <span>{{ $store.state.profile.name }}</span>
        <ul class="navbar-nav ml-auto ml-md-0" v-if="$store.state.isLoggedIn == true">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="userDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-fw"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <router-link to="/profile" class="dropdown-item">
                <span>Profile</span>
              </router-link>
              <button type="submit" class="dropdown-item" v-on:click="logout">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import * as auth from "../services/auth_service";
import Search from "../components/Search";
import store from "../store";
export default {
  data() {
    return {
      loginState: true
    };
  },
  components: {
    Search
  },
  methods: {
    logout: async function() {
      auth.logout();
      this.$router.push("/login");
      store.state.isLoggedIn = false;
      store.state.profile.name = "";
    }
  },
  mounted() {}
};
</script>