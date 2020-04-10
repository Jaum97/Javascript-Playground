//Not working yet ://

const clue1 = { nums: [2, 8, 9], corrects: 1, rightPlaces: 1 }
const clue2 = { nums: [2, 1, 5], corrects: 1, rightPlaces: 0 }
const clue3 = { nums: [9, 4, 2], corrects: 2, rightPlaces: 0 }
const clue4 = { nums: [7, 3, 8], corrects: 0, rightPlaces: 0 }
const clue5 = { nums: [7, 8, 4], corrects: 1, rightPlaces: 0 }

const clues1 = [clue1, clue2, clue3, clue4, clue5]

const p1 = openLock(clues1)

const clue6 = { nums: [6, 8, 2], corrects: 1, rightPlaces: 1 }
const clue7 = { nums: [6, 1, 4], corrects: 1, rightPlaces: 0 }
const clue8 = { nums: [2, 0, 6], corrects: 2, rightPlaces: 0 }
const clue9 = { nums: [7, 3, 8], corrects: 0, rightPlaces: 0 }
const clue10 = { nums: [3, 8, 0], corrects: 1, rightPlaces: 0 }

const clues2 = [clue6, clue7, clue8, clue9, clue10]

const p2 = openLock(clues2)

function openLock(clues) {
	const flat = (x) => x.reduce((a, b) => a.concat(b), [])

	const matchesClue = (clue, nums) => {
		if (!clue.corrects) return true

		const union = nums.filter((x) => clue.nums.includes(x))

		const matchesCorrects = union.length === clue.corrects

		if (matchesCorrects && !clue.rightPlaces) return true

		const matchesPlaces = union.some((x) => {
			let uI = nums.findIndex((y) => y === x)
			let cI = clue.nums.findIndex((z) => z === x)

			return uI === cI
		})

		return matchesCorrects && matchesPlaces
	}

	const matchesAllClues = (x) => clues.every((c) => matchesClue(c, x))

	const exclude = clues
		.filter((x) => x.corrects === 0 && x.rightPlaces === 0)
		.map((x) => x.nums)

	const numsToExclude = flat(exclude)

	const possibleNums = flat(clues.map((x) => x.nums)).filter(
		(x) => !numsToExclude.includes(x)
	)

	const possibles = Array.from(new Set(flat(possibleNums))).sort()

	const getCombs = (fixedPos, nums) => {
		const combs = []

		let fixed = nums[fixedPos]

		let toIterate = nums.filter((x) => x !== fixed).sort()

		let len = toIterate.length

		for (let i = 0; i < len; i++) {
			combs.push([fixed, nums[i], nums[i + 1]])
		}

		return combs
	}

	const getAllCombs = (nums) => {
		const combs = []

		for (let i = 0; i < nums.length; i++) {
			combs.push(getCombs(i, nums))
		}

		return flat(combs)
	}

	const allCombinations = getAllCombs(possibles)

	const password = allCombinations.filter(matchesAllClues)

 
	const checkPassword = (pass) => (clue) => {
		if (!clue.corrects) return pass.every((x) => !clue.nums.includes(x))

		const passes = pass.some((x) => {
			const pI = pass.findIndex((y) => y === x)
			const cI = clue.nums.findIndex((z) => z === x)

			return cI !== -1 && pI === cI
		})

		if (!clue.rightPlaces) return !passes

		if (clue.rightPlaces) return passes

		return passes
	}

	const checked = password.filter((p) =>
		clues.every((c) => checkPassword(p)(c))
	)

	return checked
}
