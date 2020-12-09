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

const createKeyExtractor = (path, separator = '.') => obj => {
    if(!separator || !path) return undefined
    
    const accessors = Array.isArray(path) ? path : path.split(separator)

    const isComposed = !!accessors[1]

    if (!isComposed) return obj[path]
    
    return accessors.reduce((col, acc) => col?.[acc], obj)
}

const test1 = createKeyExtractor('address.city.info.mayor.name')(list[3])
                            
const test2 = createKeyExtractor(['0' ,'address', 'city'])(list)

console.log({
    test1
})
