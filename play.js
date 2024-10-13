let product=(a,b)=>a*b;
console.log(product(2,3));

const Arrayss=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
const transform=Arrayss.map(item=>item===' '?'empty string':item)
console.log(transform)