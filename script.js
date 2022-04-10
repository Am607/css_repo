const date = new Date()

const lastMonth = new Date(date.setMonth(date.getMonth() - 1))

// console.log( Date(date.setMonth(date.getMonth() - 1)) )

console.log('date => ' + lastMonth);;