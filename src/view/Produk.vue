<template>
  <div id="home">
    <Navbar />

    <!-- Tabel Data -->
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr style="text-align: center">
            <th>No.</th>
            <th>Merk Mobil</th>
            <th>Tahun Buatan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(mobil, index) in mobils"
            :key="mobil.id"
            style="text-align: center"
          >
            <!-- Perulangan Nomer Otomatis dengan {{ index + 1}} -->
            <td>{{ index + 1 }}</td>
            <td>{{ mobil.name }}</td>
            <td>{{ mobil.tahun }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Data Motor -->

    <!-- Tabel Data -->
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr style="text-align: center">
            <th>No.</th>
            <th>Merk Motor</th>
            <th>Tahun Buatan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(motor, index) in motors"
            :key="motor.id"
            style="text-align: center"
          >
            <!-- Perulangan Nomer Otomatis dengan {{ index + 1}} -->
            <td>{{ index + 1 }}</td>
            <td>{{ motor.name }}</td>
            <td>{{ motor.tahun }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "ProdukPage",
  components: {
    Navbar,
  },
  data() {
    return {
      formMobil: {
        id: "",
        name: "",
        tahun: "",
      },
      mobils: "",
      updateSubmitMobil: false,
      formMotor: {
        id: "",
        name: "",
        tahun: "",
      },
      motors: "",
      updateSubmitMotor: false,
    };
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.loadMobil();
    this.loadMotor();
  },
  methods: {
    loadMobil() {
      axios
        .get("http://localhost:3000/mobils")
        .then((res) => {
          this.mobils = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadMotor() {
      axios
        .get("http://localhost:3000/motors")
        .then((res) => {
          this.motors = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Close
    close() {
      window.location.reload();
    },
  },
};
</script>
