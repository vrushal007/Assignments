let a = []
a.push(5); // to add element [5]
a.push(10); // [5,10]
a.push(3); // [5,10,3]
a.push(4); // [5,10,3,4]
a.push(7); // [5,10,3,4,7]
console.log(a)
a.pop(); // remove last element  [5,10,3,4]
a.pop(); // [5,10,3]
console.log(a)
a.sort() // [3,5,10]
console.log(a);