console.log("---------------------Ödev-1---------------------")
{
function findPrime(...numbers) {
  let primeNumber=[],count,i,j
  for ( i = 0; i < numbers.length; i++) {
        count=0;
        for ( j = 2; j < numbers[i]; j++){if (numbers[i]%j==0){count++} }
        if(count==0){primeNumber.push(numbers[i])}
  }
  console.log(primeNumber)
}findPrime(2,0,1,10,69,85,74,94)
}
console.log("---------------------Ödev-2---------------------")
{
  function friendsNumber(s1,s2) {
    let toplam1=0
    let toplam2=0
    let i,j
    for (let i = 0; i < s1; i++) {if(s1%i==0){toplam1=toplam1+i}}

    for(let j=0;j<s2;j++){if(s2%j==0){toplam2=toplam2+j}}

    if ((s1==toplam2)&&(s2==toplam1)) {
      console.log(s1+" Sayısı ve "+s2+" sayıs arkadaş sayıdır")
    }
    else{console.log(s1+" Sayısı ve "+s2+" sayıs arkadaş sayı değildir")}
  }
  friendsNumber(20,40)
  friendsNumber(220,284)
}
console.log("---------------------Ödev-3---------------------")
{
  function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
      let gercek=0
      for (let j = 1; j < i; j++) {if(i%j==0){gercek+=j}}
      if(gercek==i){console.log(i+" Mükemmel sayıdır.")}
    }
  }
  perfectNumbers()
}
console.log("---------------------Ödev-4---------------------")
{
  function primeNumbers() 
  {
    console.log("1-1000 Arası asal sayılar:")
    let count=0
    for (let i = 2; i < 1000; i++) 
    {
      for (let j = 1; j <= i; j++) {if(i%j==0 ){count++}}
      if(count==2){console.log(i);count=0}
      else{count=0}
    }
  }
  primeNumbers()
}