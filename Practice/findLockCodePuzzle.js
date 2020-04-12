function findLockCode(clues) {
	const flat = (arr) => arr.reduce((a, b) => a.concat(b), [])

	const compareValues = (v1) => (v2) => v1 === v2

	const clueNumbers = flat(clues.map((clue) => clue.nums))

	const possibleNums = Array.from(new Set(clueNumbers))

	const getAllCombinations = () => {
		const len = 10
		const combinations = []

		for (let i = 0; i < len; i++) {
			if (!possibleNums.includes(i)) continue

			for (let j = 0; j < len; j++) {
				if (!possibleNums.includes(j)) continue

				for (let k = 0; k < len; k++) {
					if (!possibleNums.includes(k)) continue

					combinations.push([i, j, k])
				}
			}
		}

		return combinations
	}

	const allCombinations = getAllCombinations()

	const checkPassword = (password) => (clue) => {
		const isInClueNums = (num) => clue.nums.includes(num)

		if (!clue.correctNumbers) return !password.some(isInClueNums)

		const union = flat(password.filter(isInClueNums))

		const unionSet = new Set(union)

		const matchesCorrectNumbers = unionSet.size === clue.correctNumbers

		if (!matchesCorrectNumbers) return false

		const matchesPosition = (num) => {
			const indexInPassword = password.findIndex(compareValues(num))
			const indexInClue = clue.nums.findIndex(compareValues(num))

			return indexInClue !== -1 && indexInPassword === indexInClue
		}

		const matchesAnyPosition = password.some(matchesPosition)

		if (!clue.correctPlaces) return !matchesAnyPosition

		return matchesAnyPosition
	}

	const matchesAllClues = (password) => clues.every(checkPassword(password))

	const password = allCombinations.find(matchesAllClues)

	return password
}

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

const clue25 = { nums: [1, 5, 4], correctNumbers: 1, correctPlaces: 1 }
const clue26 = { nums: [4, 3, 1], correctNumbers: 1, correctPlaces: 0 }
const clue27 = { nums: [8, 1, 3], correctNumbers: 2, correctPlaces: 2 }
const clue28 = { nums: [2, 6, 8], correctNumbers: 1, correctPlaces: 0 }
const clue29 = { nums: [4, 3, 5], correctNumbers: 2, correctPlaces: 0 }

const clue30 = { nums: [6, 8, 2], correctNumbers: 1, correctPlaces: 1 }
const clue31 = { nums: [6, 4, 5], correctNumbers: 1, correctPlaces: 0 }
const clue32 = { nums: [2, 0, 6], correctNumbers: 2, correctPlaces: 0 }
const clue33 = { nums: [7, 3, 8], correctNumbers: 0, correctPlaces: 0 }
const clue34 = { nums: [7, 8, 0], correctNumbers: 1, correctPlaces: 0 }

const clue35 = { nums: [2, 0, 0], correctNumbers: 1, correctPlaces: 1 }
const clue36 = { nums: [0, 2, 0], correctNumbers: 1, correctPlaces: 0 }
const clue37 = { nums: [0, 0, 2], correctNumbers: 1, correctPlaces: 0 }
const clue38 = { nums: [0, 0, 0], correctNumbers: 0, correctPlaces: 0 }

const puzzle1 = [clue1, clue2, clue3, clue4, clue5]
const puzzle2 = [clue6, clue7, clue8, clue9, clue10]
const puzzle3 = [clue11, clue12, clue13, clue14]
const puzzle4 = [clue15, clue16, clue17, clue18, clue19]
const puzzle5 = [clue20, clue21, clue22, clue23, clue24]
const puzzle6 = [clue25, clue26, clue27, clue28, clue29]
const puzzle7 = [clue30, clue31, clue32, clue33, clue34]
const puzzle8 = [clue35, clue36, clue37, clue38]

const p1 = findLockCode(puzzle1) // [4, 5, 9]

const p2 = findLockCode(puzzle2) // [0, 4, 2]

const p3 = findLockCode(puzzle3) // [1, 6, 4]

const p4 = findLockCode(puzzle4) // [8, 4, 6]

const p5 = findLockCode(puzzle5) // [7, 1, 8]

const p6 = findLockCode(puzzle6) // [8, 5, 3]

const p7 = findLockCode(puzzle7) // [0, 5, 2]

const p8 = findLockCode(puzzle8) // [2, 2, 2]

// I was removing impossible numbers from combinations but dont think it is worth the cost:

// const cluesToExclude = clues.filter((clue) => Boolean(clue.correctNumbers))

// const numsToExclude = flat(cluesToExclude.map(clue => clue.nums))

// 	const possibilities = flat(clues.map((x) => x.nums)).filter(
// 		(x) => !numsToExclude.includes(x)
// 	)

// 	const possibleNumbers = Array.from(new Set(flat(possibilities))).sort()
