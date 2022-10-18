<template>
  <div id="detail">
    <Navbar />
    <h1>Ini Halaman Detail Page</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "DetailPage",
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
