function hitung() {
  const bahan = document.getElementById("bahan").value;
  const berat = Number(document.getElementById("berat").value);

  if (!bahan || !berat) {
    alert("Isi bahan dan berat!");
    return;
  }

  // contoh sederhana (nanti diganti data asli dari Excel)
  const energi_per_100g = 175;
  const energi = energi_per_100g * berat / 100;

  document.getElementById("hasil").innerText =
    `Energi ${bahan}: ${energi.toFixed(1)} kkal`;
}
