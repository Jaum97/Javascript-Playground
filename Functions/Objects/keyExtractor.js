const list = [{
        name: 'john',
        age: 22,
        job: 'dev',
        address: {
            city: 'Campinas'
        }
    },
    {
        name: 'dave',
        age: 32,
        job: 'cashier',
        address: {
            city: 'Santiago'
        }
    },
    {
        name: 'matt',
        age: 18,
        job: 'mechanic',
        address: {
            city: 'São Paulo'
        }
    },
    {
        name: 'will',
        age: 34,
        job: 'analyst',
        address: {
            city: {
                info: {
                    mayor: {
                        name: 'Frederico'
                    }
                }
            }
        }
    }
]

const createKeyExtractor = key => obj => {
    const isComposed = !!key.split('.')[1]

    let extracted = ''

    if (isComposed) {
        const accessors = key.split('.')

        extracted = accessors.reduce((col, acc) => col[acc], obj)
    } else {
        extracted = obj[key]
    }

    return extracted
}

const test1 = createKeyExtractor('address.city.info.mayor.name')(list[3])

console.log({
    test1
})
