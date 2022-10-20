<template>
  <div>
    <!-- <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
    <li><router-link to="/produk">Produk</router-link></li>
    <li><router-link to="/detail">Detail</router-link></li>
  </ul> -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="adminAccess">
              <!-- V-IF UNTUK MENGFUNGSIKAN METHOD SESUAI ISI METHOD NYA, DENGAN NAMA YANG SESUAI -->
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/produk">Produk</router-link>
            </li>
            <li class="nav-item" v-if="adminAccess">
              <router-link class="nav-link" to="/detail">Detail</router-link>
            </li>
          </ul>
          <a
            class="btn btn-outline-danger my-2 my-sm-0"
            style="margin-left: 830px"
            @click="out"
          >
            <i class="fas fa-sign-out-alt"></i>Logout</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    // UNTUK AKSES ADMIN
    adminAccess() {
      return sessionStorage.getItem("role") === "admin";
    },
  },
  methods: {
    // UNTUK LOGOUT, CLEAR DATA DARI STORAGE
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
