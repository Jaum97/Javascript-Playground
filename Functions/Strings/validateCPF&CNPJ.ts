// for mongoose schema:
const schema = {
cpf: {
		type: String,
		validate: {
			validator: isValidCPF,
			message: ({ value }) => `${value} não é um CPF válido!`,
		} as any,
		required: false,
	},
	cnpj: {
		type: String,
		validate: {
			validator: isValidCPF,
			message: ({ value }) => `${value} não é um CPF válido!`,
		} as any,
		required: false,
	},
 }
 
 // props to http://cnpj.info/gerador.html
 
 export function isValidCPF<T>(value: T): boolean {
	if (!String(value) || String(value) === '') return false

	const cpf = String(value).replace(/[^\d]+/g, '')

	if (
		cpf.length !== 11 ||
		cpf === '00000000000' ||
		cpf === '11111111111' ||
		cpf === '22222222222' ||
		cpf === '33333333333' ||
		cpf === '44444444444' ||
		cpf === '55555555555' ||
		cpf === '66666666666' ||
		cpf === '77777777777' ||
		cpf === '88888888888' ||
		cpf === '99999999999'
	) {
		return false
	}

	let add = 0,
		rev = 0

	for (let i = 0; i < 9; i++) {
		add += parseInt(cpf.charAt(i)) * (10 - i)
	}

	rev = 11 - (add % 11)

	if (rev === 10 || rev === 11) {
		rev = 0
	}
	if (rev !== parseInt(cpf.charAt(9))) {
		return false
	}

	add = 0

	for (let i = 0; i < 10; i++) {
		add += parseInt(cpf.charAt(i)) * (11 - i)
	}

	rev = 11 - (add % 11)

	if (rev === 10 || rev === 11) {
		rev = 0
	}
	if (rev !== parseInt(cpf.charAt(10))) {
		return false
	}
	return true
}

export function isValidCNPJ<T>(value: T): boolean {
	if (!String(value) || String(value) === '') return false

	const cnpj = String(value).replace(/[^\d]+/g, '')
	if (cnpj === '') return false
	if (cnpj.length !== 14) return false
	if (
		cnpj === '00000000000000' ||
		cnpj === '11111111111111' ||
		cnpj === '22222222222222' ||
		cnpj === '33333333333333' ||
		cnpj === '44444444444444' ||
		cnpj === '55555555555555' ||
		cnpj === '66666666666666' ||
		cnpj === '77777777777777' ||
		cnpj === '88888888888888' ||
		cnpj === '99999999999999'
	) {
		return false
	}
	let size = cnpj.length - 2
	let numbers = cnpj.substring(0, size)
	let digits = cnpj.substring(size)
	let sum = 0
	let pos = size - 7
	for (let i = size; i >= 1; i--) {
		sum += Number(String(numbers).charAt(size - i)) * pos--
		if (pos < 2) pos = 9
	}
	let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
	if (String(result) !== digits.charAt(0)) return false
	size = size + 1
	numbers = cnpj.substring(0, size)
	sum = 0
	pos = size - 7
	for (let i = size; i >= 1; i--) {
		sum += Number(String(numbers).charAt(size - i)) * pos--
		if (pos < 2) pos = 9
	}
	result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
	if (String(result) !== digits.charAt(1)) return false
	return true
}
