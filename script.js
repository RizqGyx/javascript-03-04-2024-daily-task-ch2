// SOal
// 1. jika student mengisi MAU pada student wish, maka prompt lagi
// pertanyaan, BERAPA KAH NILAI AKHIR SMA/SMK mu ?
// 2. jika nilai akhir dari SMA/SMK mu kurang dari 30, maka
// alert "tidak mungkin masuk univ"
// 3. jika nilai akhir dari SMA/SMK mu kurang dari 50, maka
// lakukan perhitungan chanceGetUniv =
//     3a. jika hasil chanceGetUniv dibawah 50 persen, berikan
// alert "hmm kemungkinan kamu (NAMA) kecil masuk UNIV"
//     3b. jika hasil chanceGetUniv diatas 50 persen, berikan
// alert "hmm kemungkinan kamu (NAMA) bisa masuk UNIV"
// 4. jika hasil chanceGetUniv diatas 70 persen DAN Nilai SMA
// nya diatas 60 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"
// 5. jika hasil chanceGetUniv diatas 70 persen ATAU Nilai SMA
// nya diatas 80 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"

let nama = prompt("Siapa Nama mu ?");
let studentWish = prompt("masuk Universitas gak ?");
let person = {};

person.nama = nama;
person.studentWish = studentWish;

let validation = (nilai) => {
  let chanceGetUniv = Math.floor(Math.random() * 100);

  // Pertanyaan 3
  if (nilai < 50) {
    // Pertanyaan 3a
    if (chanceGetUniv < 50) {
      alert(
        `hmm kemungkinan kamu ${person.nama} kecil masuk UNIV ==> ${chanceGetUniv}`
      );
      // Pertanyaan 3b
    } else {
      alert(
        `hmm kemungkinan kamu ${person.nama} bisa masuk UNIV ==> ${chanceGetUniv}`
      );
    }
    // Pertanyaan 4
  } else if (chanceGetUniv > 70 && nilai > 60) {
    alert(
      `hei ${person.nama} pasti masuk UNIV dengan ${nilai} mu yang besar itu ==> ${chanceGetUniv}`
    );
    // Pertanyaan 5
  } else if (chanceGetUniv > 70 || nilai > 80) {
    alert(
      `hei ${person.nama} pasti masuk UNIV dengan ${nilai} mu Harus Pede ==> ${chanceGetUniv}`
    );
    // Tambahan Saja
  } else {
    alert(
      `Cuma Tambahan Harusnya Kosong Kalau nilai diatas 60 Tetapi ChanceGetUnive dibawah 70 ==> ${chanceGetUniv}`
    );
  }
};

// Pertanyaan 1
if (studentWish === "mau") {
  let nilaiSMA = prompt("BERAPA KAH NILAI AKHIR SMA/SMK mu ?");
  // Pertanyaan 2
  if (nilaiSMA < 30) {
    alert("tidak mungkin masuk univ");
  } else {
    validation(nilaiSMA);
  }
} else {
  alert("okedeh goodluck Terserah Lu!");
}
