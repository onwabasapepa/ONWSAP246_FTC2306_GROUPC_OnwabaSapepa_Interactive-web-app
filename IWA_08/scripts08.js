const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name:'leoName + leoSurname',
	balance: parseInt(leoBalance),
	//access id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,

	address = {
		number: parseInt(leoNumber),
		street: 'leoStreet',
		postalcode: parseInt(leoPostal),
	}
}
	


const sarah = {
	name: 'sarahName + sarahSurname',
	age: 62,
	//access id:'6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance:  parseInt.(sarahBalance),

	address = {
		number: sarahNumber,
		street: 'sarahStreet',
		postalcode: parseInt(sarahPostal),
	}
}
// console.log(leo, leo[address][postal-code])
// console.log(sarah, sarah[address][postal-code])

console.log(leo.address.postalcode)
console.log(sarah.address.postalcode)