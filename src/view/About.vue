<template>
  <div id="about">
    <Navbar />
    <h1 v-show="!updateSubmitMobil">Ini Halaman About Page Tampil</h1>
    <h1 v-show="updateSubmitMobil">Ini Halaman About Page Hidden</h1>
    <button v-show="!updateSubmitMobil" @click="tampil()">Tampilkan</button>
    <button v-show="updateSubmitMobil" @click="hidden()">Sembunyikan</button>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "AboutPage",
  components: {
    Navbar,
  },
  data() {
    return {
      updateSubmitMobil: false,
    };
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
  methods: {
    tampil() {
      this.updateSubmitMobil = true;
    },
    hidden() {
      this.updateSubmitMobil = false;
    },
  },
};
</script>
