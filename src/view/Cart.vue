<template>
  <div>
    <Navbar />
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
          <!-- Memanggil data cart -->
          <tr
            v-for="(mobil, index) in cart"
            :key="mobil.id"
            style="text-align: center"
          >
            <!-- Perulangan Nomer Otomatis dengan {{ index + 1}} -->
            <td>{{ index + 1 }}</td>
            <td>{{ mobil.name }}</td>
            <td>{{ mobil.tahun }}</td>
            <td>{{ mobil.harga }} jt</td>
            <td>
              <button class="btn btn-danger" @click="hapusCart(mobil)">
                <i class="fa-solid fa-trash-can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Total Harga :
        {{
          (totalHarga * 1000000).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })
        }}
      </p>
      <button class="btn btn-danger" @click="checkout()">Checkout</button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Swal from "sweetalert2";
export default {
  name: "CartPage",
  components: {
    Navbar,
  },
  //Menerima data dari parent
  props: {
    cart: Array,
    setCart: Function,
  },
  computed: {
    totalHarga() {
      return this.cart.reduce((a, b) => a + b.harga, 0);
    },
  },
  methods: {
    hapusCart(mobil) {
      this.setCart(
        this.cart.filter((x) => !(x.id === mobil.id && x.type === mobil.type))
      );
      Swal.fire(
        "Berhasil",
        `Berhasil menghapus mobil ${mobil.name}`,
        "success"
      );
    },
    checkout() {
      if (!this.totalHarga)
        return Swal.fire(
          "Gagal!",
          "Anda harus memilih produk terlebih dahulu",
          "error"
        );

      Swal.fire(
        "Terimakasih!",
        `Terimakasih Atas Pembelian di Toko Kami`,
        "success"
      ).then(() => {
        this.$router.push("/home");
        window.location.reload();
      });
    },
  },
};
</script>
