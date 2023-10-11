function hitungBMI() {
  const tinggi = document.getElementById("tinggi");
  const berat = document.getElementById("berat");
  const hitung = document.getElementById("hitung");
  const cetakHasil = document.getElementById("cetakhasil");
  const cekulang = document.getElementById("cekulang");
  const usia = document.getElementById("usia");

  hitung.addEventListener("click", function () {
    const tinggiValue = parseFloat(tinggi.value);
    const beratValue = parseFloat(berat.value);
    const usiaValue = parseInt(usia.value);

    //memeriksa kondisi inputan usia, tinggi dan berat
    if (isNaN(tinggiValue) || isNaN(beratValue) || isNaN(usiaValue)) {
      cetakHasil.innerHTML =
        "Masukkan nilai umur, tinggi dan berat yang valid.";
      return;
    } else if (usiaValue < 19) {
      cetakHasil.innerHTML = `Usia anda dibawah 19 tahun, cek <a
      href="http://hukor.kemkes.go.id/uploads/produk_hukum/PMK_No__2_Th_2020_ttg_Standar_Antropometri_Anak.pdf"
      >Permenkes Nomor 2 Tahun 2020</a `;
      return;
    }

    let hasilHitung = beratValue / (tinggiValue / 100) ** 2;
    let statusBMI = "";
    let indikator = "";
    // menghitung BMI
    if (hasilHitung < 16) {
      statusBMI = "Terlalu Kurus";
      indikator = "rusak";
    } else if (hasilHitung >= 16 && hasilHitung < 17) {
      statusBMI = "Cukup Kurus";
    } else if (hasilHitung >= 17 && hasilHitung < 18.5) {
      statusBMI = "Sedikit Kurus";
    } else if (hasilHitung >= 18.5 && hasilHitung < 25) {
      statusBMI = "Normal";
    } else if (hasilHitung >= 25 && hasilHitung < 30) {
      statusBMI = "Kelebihan Berat Badan";
    } else if (hasilHitung >= 30 && hasilHitung < 35) {
      statusBMI = "Obesitas Kelas I";
    } else if (hasilHitung >= 35 && hasilHitung < 40) {
      statusBMI = "Obesitas Kelas II";
    } else if (hasilHitung >= 40) {
      statusBMI = "Obesitas Kelas III";
    }
    cetakHasil.innerHTML = `BMI = ${hasilHitung.toFixed(
      1
    )} <br><br>${statusBMI} <br> <br>go to the gym you fat btch `;
  });

  //mengecek ulang BMI
  cekulang.addEventListener("click", function () {
    tinggi.value = "";
    berat.value = "";
    usia.value = "";
    cetakHasil.innerHTML = "";
  });
}
hitungBMI();
