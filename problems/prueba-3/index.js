async function slowFunction(num) {
	await new Promise(resolve => setTimeout(resolve, 2000))
	return num
}


const memoizeFunction = slowFunction => {
  const executedResults = {}

  return async params => {
    if (params in executedResults) {
      return executedResults[params]
    }
  
    const result = await slowFunction(params)
    executedResults[params] = result
    return result
  }
}

const main = async () => {
	const memoizedFunction = memoizeFunction(slowFunction)
	const start = performance.now()
	await memoizedFunction(1)
	await memoizedFunction(1)
	await memoizedFunction(2)
	await memoizedFunction(2)
	await memoizedFunction(2)
	const end = performance.now()

	console.log(end - start)
}

main()
