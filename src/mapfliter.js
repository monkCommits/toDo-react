const numbers = [1,-1,2,3]
const filtered = numbers.filter(n => n>=0)
// console.log(filtered)

const items = filtered.map(n=>'<li>' + n + '<li>')
items.join
// console.log(items)
console.log(numbers)