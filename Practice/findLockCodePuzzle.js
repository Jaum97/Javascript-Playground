const clue1 = { nums: [2, 8, 9], correctNumbers: 1, correctPlaces: 1 }
const clue2 = { nums: [2, 1, 5], correctNumbers: 1, correctPlaces: 0 }
const clue3 = { nums: [9, 4, 2], correctNumbers: 2, correctPlaces: 0 }
const clue4 = { nums: [7, 3, 8], correctNumbers: 0, correctPlaces: 0 }
const clue5 = { nums: [7, 8, 4], correctNumbers: 1, correctPlaces: 0 }

const clue6 = { nums: [6, 8, 2], correctNumbers: 1, correctPlaces: 1 }
const clue7 = { nums: [6, 1, 4], correctNumbers: 1, correctPlaces: 0 }
const clue8 = { nums: [2, 0, 6], correctNumbers: 2, correctPlaces: 0 }
const clue9 = { nums: [7, 3, 8], correctNumbers: 0, correctPlaces: 0 }
const clue10 = { nums: [3, 8, 0], correctNumbers: 1, correctPlaces: 0 }

const clue11 = { nums: [3, 6, 8], correctNumbers: 1, correctPlaces: 1 }
const clue12 = { nums: [3, 8, 7], correctNumbers: 0, correctPlaces: 0 }
const clue13 = { nums: [2, 7, 6], correctNumbers: 1, correctPlaces: 0 }
const clue14 = { nums: [4, 7, 1], correctNumbers: 2, correctPlaces: 0 }

const clue15 = { nums: [3, 4, 2], correctNumbers: 1, correctPlaces: 1 }
const clue16 = { nums: [2, 7, 3], correctNumbers: 0, correctPlaces: 0 }
const clue17 = { nums: [1, 6, 5], correctNumbers: 1, correctPlaces: 0 }
const clue18 = { nums: [8, 5, 3], correctNumbers: 1, correctPlaces: 1 }
const clue19 = { nums: [2, 6, 4], correctNumbers: 2, correctPlaces: 0 }

const clue20 = { nums: [5, 4, 8], correctNumbers: 1, correctPlaces: 1 }
const clue21 = { nums: [5, 3, 0], correctNumbers: 0, correctPlaces: 0 }
const clue22 = { nums: [1, 5, 7], correctNumbers: 2, correctPlaces: 0 }
const clue23 = { nums: [8, 0, 6], correctNumbers: 1, correctPlaces: 0 }
const clue24 = { nums: [6, 4, 7], correctNumbers: 1, correctPlaces: 0 }

const puzzle1 = [clue1, clue2, clue3, clue4, clue5]
const puzzle2 = [clue6, clue7, clue8, clue9, clue10]
const puzzle3 = [clue11, clue12, clue13, clue14]
const puzzle4 = [clue15, clue16, clue17, clue18, clue19]
const puzzle5 = [clue20, clue21, clue22, clue23, clue24]

const p1 = findLockCode(puzzle1) // [4, 5, 9]

const p2 = findLockCode(puzzle2) // [0, 4, 2]

const p3 = findLockCode(puzzle3) // [1, 6, 4]

const p4 = findLockCode(puzzle4) // [8, 4, 6]

const p5 = findLockCode(puzzle5) // [7, 1, 8]

function findLockCode(clues) {
	const flat = (arr) => arr.reduce((a, b) => a.concat(b), [])

	const compareValues = (v1) => (v2) => v1 === v2

	const getAllCombinations = () => {
		const len = 10
		const combinations = []

		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				for (let k = 0; k < len; k++) {
					combinations.push([i, j, k])
				}
			}
		}

		return combinations
	}

	const allCombinations = getAllCombinations()

	const satisfiesClue = (code) => (clue) => {
		if (!clue.correctNumbers) return true

		const union = flat(code.filter((num) => clue.nums.includes(num)))

		const unionSet = Array.from(new Set(union))

		const matchesCorrectNumbers = unionSet.length === clue.correctNumbers

		if (matchesCorrectNumbers && !clue.correctPlaces) return true

		const matchesCorrectPlaces = union.some((num) => {
			let codeIndex = code.findIndex(compareValues(num))
			let clueIndex = clue.nums.findIndex(compareValues(num))

			return codeIndex === clueIndex
		})

		return matchesCorrectNumbers && matchesCorrectPlaces
	}

	const satisfiesAllClues = (code) => clues.every(satisfiesClue(code))

	const possiblePasswords = allCombinations.filter(satisfiesAllClues)

	const checkPassword = (password) => (clue) => {
		if (!clue.correctNumbers) {
			return password.every((num) => !clue.nums.includes(num))
		}

		const union = flat(password.filter((num) => clue.nums.includes(num)))

		const unionSet = Array.from(new Set(union))

		const matchesCorrectNumbers = unionSet.length === clue.correctNumbers

		if (!matchesCorrectNumbers) return false

		const passes = password.some((num) => {
			const passwordIndex = password.findIndex(compareValues(num))
			const clueIndex = clue.nums.findIndex(compareValues(num))

			return clueIndex !== -1 && passwordIndex === clueIndex
		})

		if (!clue.correctPlaces) return !passes

		return passes
	}

	const checkedPasswords = possiblePasswords.filter((password) =>
		clues.every(checkPassword(password))
	)

	const answer =
		checkedPasswords.length > 1 ? checkedPasswords : flat(checkedPasswords)

	return answer
}

// I was removing impossible numbers from combinations but dont think it is worth the cost:

// const cluesToExclude = clues.filter((clue) => Boolean(clue.correctNumbers && clue.correctPlaces))

// const numsToExclude = flat(cluesToExclude.map(clue => clue.nums))

// 	const possibilities = flat(clues.map((x) => x.nums)).filter(
// 		(x) => !numsToExclude.includes(x)
// 	)

// 	const possibleNumbers = Array.from(new Set(flat(possibilities))).sort()
