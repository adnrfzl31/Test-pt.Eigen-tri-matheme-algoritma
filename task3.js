//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

var INPUT = ["xc", "dz", "bbb", "dz"]
var QUERY = ["bbb", "ac", "dz"]

// OUTPUT = [1, 0, 2] //karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT.

var perhitungan = 0
var OUTPUT = []

for (let i = 0; i < QUERY.length; i++) {
  for (let idx = 0; idx < INPUT.length; idx++) {
    if (QUERY[i] === INPUT[idx]) {
      perhitungan++
    }
  }
  OUTPUT.push(perhitungan)
  perhitungan = 0
}

console.log(OUTPUT)
