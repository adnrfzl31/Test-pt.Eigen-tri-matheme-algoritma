// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1".

var text = "NEGIE1"
var sliceText = text.split("")

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var alphabet = []
var dataNumber = []

for (let i = 0; i < sliceText.length; i++) {
  for (let index = 0; index < number.length; index++) {
    if (number[index] === sliceText[i]) {
      dataNumber.push(sliceText[i])
      break
    } else if (index + 1 === number.length) {
      alphabet.push(sliceText[i])
    }
  }
}

var numberString = dataNumber.join("")
var reverse = alphabet.reverse()
reverse.push(numberString)
var results = reverse.join("")
console.log(results)
