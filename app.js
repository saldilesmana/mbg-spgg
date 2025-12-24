let dataGizi = [];

// ambil data JSON
fetch("data_gizi_mbg.json")
  .then(response => response.json())
  .then(data => {
    dataGizi = data;
    console.log("Data gizi berhasil dimuat", dataGizi);
  })
  .catch(err => {
    alert("Gagal memuat data gizi");
    console.error(err);
  });

function hitungGizi() {
  const namaBahan = document.getElementById("bahan").value.trim();
  const berat = parseFloat(document.getElementById("berat").value);

  if (!namaBahan || isNaN(berat)) {
    alert("Isi nama bahan dan berat");
    return;
  }

  // cari bahan
  const item = dataGizi.find(
    d => d.bahan.toLowerCase() === namaBahan.toLowerCase()
  );

  if (!item) {
    alert("Bahan tidak ditemukan di database");
    return;
  }

  // faktor MBG (memakai BDD)
  const faktor = (berat * item.bdd) / 10000;

  const energi = item.energi * faktor;
  const protein = item.protein * faktor;
  const lemak = item.lemak * faktor;
  const karbo = item.karbohidrat * faktor;
  const serat = item.serat * faktor;

  document.getElementById("hasil").innerHTML = `
    <h3>Hasil Perhitungan</h3>
    Energi: <b>${energi.toFixed(1)}</b> kkal<br>
    Protein: <b>${protein.toFixed(1)}</b> g<br>
    Lemak: <b>${lemak.toFixed(1)}</b> g<br>
    Karbohidrat: <b>${karbo.toFixed(1)}</b> g<br>
    Serat: <b>${serat.toFixed(1)}</b> g
  `;
}
