//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu.

var sentence = "Saya sangat senang mengerjakan soal algoritma"
var sliceText = sentence.split(" ")

var alphabet = 0

for (let i = 0; i < sliceText.length; i++) {
  if (sliceText[i].length >= alphabet) {
    var alphabet = sliceText[i].length
  }
}

var results = alphabet + " character"
console.log(results)
