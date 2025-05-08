let sepet = [];

function sepeteEkle(urunAdi, fiyat) {
    sepet.push({ ad: urunAdi, fiyat: fiyat });
    localStorage.setItem("sepet", JSON.stringify(sepet));
    alert(urunAdi + " sepete eklendi!");
}
