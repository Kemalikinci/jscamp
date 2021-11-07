
function addToCard(Quantity,productName="Elma") {
    console.log("Sepete Eklendi : "+productName +" Adet: " +Quantity)
    //
    //
}

addToCard("Elma")
addToCard(10)
addToCard("Karpuz")


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 =function () {
    console.log("Hello World 2!")
}

sayHello2()



function addToCart2(productName, Quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)


let product1= {productName:"elma", unitPrice:10, Quantity:5}// obje tanımlama süslü parantez
let product2= {productName:"elma", unitPrice:10, Quantity:5}
let product3= {productName:"elma", unitPrice:10, Quantity:5}
product2=product3
product2.productName="karpuz"
console.log(product3.productName)

function addToCart3(product) {
    console.log("Ürün : "+product.productName+" Adet : "+product.Quantity+" Fiyat : "+product.unitPrice)
}
addToCart3(product1)

let sayi1=10  //sayılar değer objeler referans
let sayi2=20
sayi1=sayi2   //atandığı ande ne var ise o
sayi2=100
console.log(sayi1)