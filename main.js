// Function | Funktsiya

// Function yaratish uchun uni elon qilishimiz kerak

function ismi(sozlamalari) {

}

/*
Funksiyalarni nomlash uchun kopincha mahsus sozlar mavjud
misol ucun funksiyalar quydagi sozlarbilan boshlanadi:
'show...' - nimanidur korsatish funksiyasi
'get...' - nimanidur qaytarish funksiyasi
'calc...' - nimanidur hisoblash funksiyasi
'creat...' - nimanidur yaratish funksiyasi
'check...' - nimanidur tekshirish funksiyasi

misol
showMessage - habarni korsatish
getOptions - sozlamalr qabul qilish
calcSum - summani hisoblash
va hokazo
*/

// function declaration
// function expression
// arrow function


// Decloratsion funksiyalar

// function showMessage() {
//     console.log('Hello Function');
// }
// showMessage()

// let applePrice = 5;
// let bananaPrice = 7;

// function calcSum() {
//     let totalSum = applePrice + bananaPrice
//     return totalSum
// }
// console.log(`Sizdan Jami: ${calcSum()}$`);

// function calcSum2(ananas, count) {
//     let totalSum = ananas * count
//     return totalSum
// }

// console.log(`Sizdan Jami: ${calcSum2(10, 2)}$`);

// let price = 9

// console.log(`Sizdan Jami: ${calcSum2(price, 2)}$`);
// console.log(`Sizdan Jami: ${calcSum2(calcSum2(4, 5), calcSum2(5, 5))}$`);



// funksiyani chaqirvotkanimizda unnga argument jonatvomiz calcSum2(sozlama)
// Sozlamalar cheksiz ravishda boladi
// Funksiyani ischida sozlamalar Argument deb ataladi
// Sozlamalar holagan malumot turida bolishi mumkin


// Biz sozlamalar uchun standart qiymatni ham o'rnatishimiz mumkin, agar bu sozlamalar funksiyaga kelmasa, ular ishlaydi
// Biz funksiyani o'zgaruvchiga ham qo'yishimiz mumkin va u funksiya natijasini oladi


// function caclSum3(orange = 3, apple = 2) {
//     let totalSum = orange + apple
//     return totalSum
// }

// let answ = caclSum3()
// console.log(answ);

// let answ2 = caclSum3(10, 14)
// console.log(answ2);



// Math | matematika bilan ishlash (matematicheskiy funksiya)

// Math.random() | random shakilda 0 dan 1 gacha bo'lgan tasodifiy kasr sonini qaytaradi (1 hech qachon qaytarmaydi)

// let random = Math.random()
// console.log(random);


// function random() {
//     return Math.floor(Math.random() * 15 + 1)
// }

// console.log(random());


// Matematik Yahlitlash

// Math.floor()
// sonni kichik tarafga yaxlitlaydi, masalan, 10.1 = 10 | -10.7 = -11

// Math.ceil()
// sonni katta tarafga yaxlitlaydi, masalan, 10.3 = 11 | -10.7 = -10

// Math.round() 
// agar qoldiq 5 dan kichkina bosa, sonni kichik tarafga yaxlitlaydi 5.4 = 5
// agar qoldiq 5 ga teng yoki kotta bosa, sonni kotta tarafga yaxlitlaydi 5.5 = 6

alert('Keling misol echamiz')

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}


let prCount = +prompt('Nechta misol echmoqchisiz')
let minNum = +prompt('Minimal Son kiriting')
let maxNum = +prompt('Maximal Son kiriting')


for (let i = 0; i < prCount; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let pr = +prompt(`Misolni eching: ${num1} + ${num2} = ?`)
    let answer = (num1 + num2) == pr ? 'Togri' : 'Notogri'
    alert(answer)
}