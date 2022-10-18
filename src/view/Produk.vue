<template>
  <div id="produk">
    <Navbar />
    <h1>Ini Halaman Produk Page</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "ProdukPage",
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
