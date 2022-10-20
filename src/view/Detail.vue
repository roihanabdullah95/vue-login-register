<template>
  <div id="home">
    <Navbar />
    <!-- Data Mobil -->
    <!-- Modal Add -->
    <div class="container my-0 py-5">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-success float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Form <span v-show="!updateSubmitMobil">Tambah</span>
                <span v-show="updateSubmitMobil">Update</span>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="close"
              ></button>
            </div>
            <!-- Mulai Form -->
            <div class="modal-body">
              <form @submit.prevent="addMobil">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Merk Motor"
                    v-model="formMobil.name"
                    required
                  />
                  <label for="floatingInput">Merk Motor</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Merk Motor"
                    v-model="formMobil.tahun"
                    required
                  />
                  <label for="floatingInput">Tahun Buat</label>
                </div>

                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-show="!updateSubmitMobil"
                >
                  Tambahkan
                </button>
                <button
                  type="button"
                  v-show="updateSubmitMobil"
                  class="btn btn-primary"
                  @click="updateMobil(formMobil)"
                >
                  Update Mobil
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabel Data -->
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr style="text-align: center">
            <th>No.</th>
            <th>Merk Mobil</th>
            <th>Tahun Buatan</th>
            <th>Action</th>
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
            <td>
              <button
                type="button"
                class="btn btn-primary"
                @click="editMobil(mobil)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>
              ||
              <button class="btn btn-danger" @click="delMobil(mobil)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Data Motor -->
    <!-- Modal Add -->
    <div class="container my-0 py-5">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-success float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        ADD
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel2">
                Form <span v-show="!updateSubmitMotor">Tambah</span>
                <span v-show="updateSubmitMotor">Update</span>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="close"
              ></button>
            </div>
            <!-- Mulai Form -->
            <div class="modal-body">
              <form @submit.prevent="addMotor">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput2"
                    placeholder="Merk Motor"
                    v-model="formMotor.name"
                    required
                  />
                  <label for="floatingInput2">Merk Motor</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput2"
                    placeholder="Merk Motor"
                    v-model="formMotor.tahun"
                    required
                  />
                  <label for="floatingInput2">Tahun Buat</label>
                </div>

                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-show="!updateSubmitMotor"
                >
                  Tambahkan
                </button>
                <button
                  type="button"
                  v-show="updateSubmitMotor"
                  class="btn btn-primary"
                  @click="updateMotor(formMotor)"
                >
                  Update Motor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabel Data -->
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr style="text-align: center">
            <th>No.</th>
            <th>Merk Motor</th>
            <th>Tahun Buatan</th>
            <th>Action</th>
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
            <td>
              <button
                type="button"
                class="btn btn-primary"
                @click="editMotor(motor)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Edit
              </button>
              ||
              <button class="btn btn-danger" @click="delMotor(motor)">
                Delete
              </button>
            </td>
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
  name: "DetailPage",
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
    addMobil() {
      axios.post("http://localhost:3000/mobils/", this.formMobil).then(() => {
        this.loadMobil();
        this.formMobil.name = "";
        this.formMobil.tahun = "";
      });
      window.location.reload();
    },
    addMotor() {
      axios.post("http://localhost:3000/motors/", this.formMotor).then(() => {
        this.loadMotor();
        this.formMotor.name = "";
        this.formMotor.tahun = "";
      });
      window.location.reload();
    },
    // Edit Mobil
    editMobil(mobil) {
      this.updateSubmitMobil = true;
      this.formMobil.id = mobil.id;
      this.formMobil.name = mobil.name;
      this.formMobil.tahun = mobil.tahun;
    },
    editMotor(motor) {
      this.updateSubmitMotor = true;
      this.formMotor.id = motor.id;
      this.formMotor.name = motor.name;
      this.formMotor.tahun = motor.tahun;
    },
    // Mobil update
    updateMobil(formMobil) {
      return axios
        .put("http://localhost:3000/mobils/" + formMobil.id, {
          name: this.formMobil.name,
          tahun: this.formMobil.tahun,
        })
        .then(() => {
          this.loadMobil();
          this.formMobil.id = "";
          this.formMobil.name = "";
          this.formMobil.tahun = "";
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateMotor(formMotor) {
      return axios
        .put("http://localhost:3000/motors/" + formMotor.id, {
          name: this.formMotor.name,
          tahun: this.formMotor.tahun,
        })
        .then(() => {
          this.loadMotor();
          this.formMotor.id = "";
          this.formMotor.name = "";
          this.formMotor.tahun = "";
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Delete Mobil
    delMobil(mobil) {
      axios.delete("http://localhost:3000/mobils/" + mobil.id).then(() => {
        this.loadMobil();
        let index = this.mobils.indexOf();
        this.mobils.splice(index, 1);
      });
    },
    delMotor(motor) {
      axios.delete("http://localhost:3000/motors/" + motor.id).then(() => {
        this.loadMotor();
        let index = this.motors.indexOf();
        this.motors.splice(index, 1);
      });
    },
    // Close
    close() {
      window.location.reload();
    },
  },
};
</script>
