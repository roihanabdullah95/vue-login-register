<template>
  <div id="home">
    <Navbar />
    <h1>Ini Halaman Home Page</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "HomePage",
  components: {
    Navbar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
};
</script>
