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
                    placeholder="Merk Mobil"
                    v-model="formMobil.name"
                    required
                  />
                  <label for="floatingInput">Merk Mobil</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Merk Mobil"
                    v-model="formMobil.tahun"
                    required
                  />
                  <label for="floatingInput">Tahun Buat</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Merk Mobil"
                    v-model="formMobil.harga"
                    required
                  />
                  <label for="floatingInput">Harga</label>
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
            <th>Harga</th>
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
            <td>{{ mobil.harga }} jt</td>
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
              ||
              <button class="btn btn-warning" @click="buyMobil(mobil)">
                Buy
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
import Swal from "sweetalert2";
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
        harga: "",
        type: "mobil",
      },
      mobils: [],
      updateSubmitMobil: false,
    };
  },
  props: {
    cart: Array,
    setCart: Function,
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
        this.formMobil.harga = "";
        this.formMobil.type = "Mobil";
      });
      window.location.reload();
    },
    // Edit Mobil
    editMobil(mobil) {
      this.updateSubmitMobil = true;
      this.formMobil.id = mobil.id;
      this.formMobil.name = mobil.name;
      this.formMobil.tahun = mobil.tahun;
      this.formMobil.harga = mobil.harga;
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
          this.formMobil.harga = "";
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Delete Mobil
    delMobil(mobil) {
      Swal.fire({
        title: "Anda Yakin Menghapus Data ?",
        showDenyButton: true,
        icon: "question",
        confirmButtonText: "Delete",
        denyButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://localhost:3000/mobils/" + mobil.id).then(() => {
            this.loadMobil();
            let index = this.mobils.indexOf();
            this.mobils.splice(index, 1);
          });
        }
      });
    },
    // Close
    close() {
      window.location.reload();
    },
    buyMobil(mobil) {
      if (this.cart.filter((x) => x.id === mobil.id && x.type === "mobil")[0])
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Mobil ${mobil.name} sudah ada di cart`,
        });
      this.setCart([...this.cart, mobil]);
      Swal.fire("Berhasil", `Berhasil membeli mobil ${mobil.name}`, "success");
    },
  },
};
</script>
