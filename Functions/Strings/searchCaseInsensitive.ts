export const searchCaseInsensitive = (...params: Array < any > ): (search:
    any) => boolean => {
        let validSearch

        // suport for older platforms without array.flat()
        const flatArr = arr => arr.reduce((x, y) => x.concat(y), [])
        const format = value => String(value).toUpperCase()
        
        if (Array.isArray(params)) {
            validSearch = flatArr(params).map(param => {
                return Array.isArray(param) ? param.map(format) :
                    format(param)
            })
        } else {
            validSearch = format(params)
        }

        return (search) => {

            const validation = valid => valid.includes(format(search))

            return Array.isArray(validSearch) ? validSearch.some(
                validation) : validation(validSearch)
        }
    }

const list = [{
        name: 'john',
        skills: ['js', 'node', 'react', 'react-native']
    },
    {
        name: 'pete',
        skills: ['ruby', 'rust', 'rails', 'angular']
    },
    {
        name: 'dave',
        skills: ['python', 'django', 'sql', 'mongo']
    },
    {
        name: 'matt',
        skills: ['java', 'android', 'jsf', 'kotlin']
    },
    {
        name: 'jeff',
        skills: ['ios', 'swift', 'objective-c', 'xcode']
    },
    {
        name: 'kyle',
        skills: ['c', 'assembly', 'c#', 'f#']
    },
]

const params = list.map(({
    skills
}) => skills)

const isValid = searchCaseInsensitive(params)('django')

//isValid
