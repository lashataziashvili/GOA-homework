// შექმენით მასივი რომელშიც ჩაამატებთ ყველა რიცხვს 0-იდან 100-ის ჩათვლით, 
// შემდეგ მასივზე კიდევ იმუშავებთ for ციკლით და ყველა ლუწი 
// რიცხვის ჯამს გამოიტანთ

let arr = [];
for(let i = 0; i < 100; i++){
    arr.push(i)
}

let evenSum = 0;
for(let i = 0; i < evenSum.length; i++){
    if(i % 2 === 0){
        evenSum += i;
    }
}

console.log(evenSum)