const arr = [{
        group: 'B',
        numbs: [1, 2, 3],
    },
    {
        group: 'A',
        numbs: [1, 2, 3, 4, 5],
    },
    {
        group: 'C',
        numbs: [1, ],
    },
    {
        group: 'A',
        numbs: [2, 5, 78, 9],
    },
    {
        group: 'C',
        numbs: [],
    },
    {
        group: 'A',
        numbs: [3, 2, 2, 2, 1],
    },
]

const pickProp = prop => obj => obj[prop]

function groupBy(arr, field) {
    const pickField = pickProp(field)

    const groups = [...new Set(arr.map(pickField))]

    const groupByReducer = (res, group) => {
        res[group] = arr.filter(x => x[field] === group)

        return res
    }

    const res = groups.reduce(groupByReducer, {})

    return res
}

const arr2 = groupBy(arr, 'group')

console.log({arr2})
