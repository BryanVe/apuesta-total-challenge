const squirtles = require('./squirtles.json')
let response = {
  data: [],
  totalItems: 0
}

squirtles.forEach(squirtle => {
	const { id, power, ...restSquirtle } = squirtle
	const wonTournaments = Object.keys(restSquirtle).filter(key => {
		return key.startsWith('tournament') && restSquirtle[key] === 'won'
	})

	if (power > 500 && wonTournaments.length > 6) {
		response = {
			...response,
			data: [...response.data, squirtle],
		}
	}
})

response = {
	...response,
	totalItems: response.data.length,
}

console.log(response.data[0])
console.log({
	response,
})
