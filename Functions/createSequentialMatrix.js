const buildSequentialMatrix = (size) => {
	const base = Array(size).fill()
    
    const line = (_, i) => base.map((_, k) => k + 1 + (i * size))
    
	return base.map(line)
}

const matrix = buildSequentialMatrix(10)
