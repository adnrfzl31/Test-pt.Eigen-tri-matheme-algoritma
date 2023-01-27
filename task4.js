// Silahkan cari hasil dari penarikan dari jumlah diagonal sebuah matrik NxN Contoh:

var Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12
// maka hasilnya adalah 15 - 12 = 3

var diagonalPertama = 0
var diagonalKedua = 0

for (let index = 0; index < Matrix.length; index++) {
  diagonalPertama += Matrix[index][index]
  diagonalKedua += Matrix[index][Matrix[index].length - 1 - index]
}

var results = diagonalPertama - diagonalKedua
console.log(results)
