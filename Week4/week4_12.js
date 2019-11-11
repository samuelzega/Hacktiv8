function countProfit(shoppers) {
  if (shoppers.length == 0) {
    return "[]";
  }
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  var hasil = [];
  for (let i = 0; i < listBarang.length; i++) {
    var tmp = {};
    tmp.product = listBarang[i][0];
    tmp.shoppers = [];
    tmp.leftOver = listBarang[i][2];
    tmp.provit = listBarang[i][1];
    tmp.totalProvit = 0;
    hasil.push(tmp);
  }

  for (let i = 0; i < shoppers.length; i++) {
    for (let j = 0; j < hasil.length; j++) {
      // console.log(shoppers[i].product, hasil[j].name, shoppers[i].amount, hasil[i].leftOver)
      if (
        shoppers[i].product === hasil[j].product &&
        shoppers[i].amount <= hasil[j].leftOver
      ) {
        hasil[j].shoppers.push(shoppers[i].name);
        hasil[j].leftOver = hasil[j].leftOver - shoppers[i].amount;
        hasil[j].totalProvit += hasil[j].provit * shoppers[i].amount;
      }
    }
  }

  return hasil;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
