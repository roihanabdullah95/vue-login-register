<template>
  <div class="up">
    <form @submit="login" class="kotak_login">
      <p class="tulisan_login">Silahkan login</p>

      <label>Username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="form_login"
        placeholder="Masukan Username atau email .."
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="Masukan Password .."
      />

      <div>
        <button
          type="submit"
          style="
            background-color: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
            padding: 10px;
            border-radius: 10px;
            color: white;
          "
        >
          Login
        </button>
      </div>

      <br />
      <br />
      <center>
        <span>Belum Punya Akun </span><a href="/register">Silahkan Register</a>
      </center>
      <br />
      <br />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
        useres: {},
      },
    };
  },

  methods: {
    // menjalankan 2 fungsi mengambil data pada json dan mencari data yg sama diinputkan
    async getUser() {
      const user = await axios.get("http://localhost:3000/akuns");
      this.useres = user.data;
    },
    // fungsi tombol login
    login(e) {
      e.preventDefault();
      const login = this.useres.find(
        (data) =>
          data.username === this.form.username &&
          data.password === this.form.password
      );
      //   kondisi jika akun benar akan langsung masuk ke page home kalo salah muncul alert
      if (login === undefined) {
        Swal.fire(
          "Akun yang Anda Masukan Salah",
          "Silahkan Mengulangi Kembali",
          "error"
        );
      } else {
        // Mengambil Data ke session Storage
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        // MEMBUAT KEY BARU DAN VALUE BERISI ROLE, AGAR TERBACA UNTUK AKSES
        sessionStorage.setItem("role", login.role);

        // Kondisi Jika Sebagai Admin masuk ke Home kalo Non Admin ke About
        if (sessionStorage.getItem("role") === "admin") {
          Swal.fire({
            icon: "success",
            title: "Selamat Datang Admin",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.$router.push("/home");
            window.location.reload();
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Selamat Datang User",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.$router.push("/about");
            window.location.reload();
          });
        }
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}

.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}

.kotak_login {
  width: 350px;
  background: white;
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
  margin-top: 0px;
}

label {
  font-size: 11pt;
}

.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.tombol_login {
  background: #2e2e2e;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}

.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>
