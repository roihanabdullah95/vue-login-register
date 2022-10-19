<template>
  <div id="home">
    <Navbar />
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
                Form Tambah
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
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
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Tambahkan</button>
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
            <th>Merk Motor</th>
            <th>Tahun Buatan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="mobil in mobils"
            :key="mobil.id"
            style="text-align: center"
          >
            <td>{{ mobil.name }}</td>
            <td>{{ mobil.tahun }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                @click="editMobil(mobil)"
                data-bs-toggle="modal"
                data-bs-target="#editMobil"
              >
                Edit
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="editMobil"
                tabindex="-1"
                aria-labelledby="editMobilLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="editMobilLabel">
                        Form Edit
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="updateMobil(formMobil)">
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
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              ||
              <button class="btn btn-danger" @click="delMobil(mobil)">
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
  name: "HomePage",
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
    };
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.loadMobil();
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
    addMobil() {
      axios.post("http://localhost:3000/mobils/", this.formMobil).then(() => {
        this.loadMobil();
        this.formMobil.name = "";
        this.formMobil.tahun = "";
      });
      window.location.reload();
    },
    // Edit Mobil
    editMobil(mobil) {
      this.formMobil.id = mobil.id;
      this.formMobil.name = mobil.name;
      this.formMobil.tahun = mobil.tahun;
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
    // Delete Mobil
    delMobil(mobil) {
      axios.delete("http://localhost:3000/mobils/" + mobil.id).then(() => {
        this.loadMobil();
        let index = this.mobils.indexOf();
        this.mobils.splice(index, 1);
      });
    },
  },
};
</script>
