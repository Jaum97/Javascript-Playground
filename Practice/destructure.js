const arr = [{
        name: 'john',
        skills: [{
                level: 5,
                name: 'javascript'
            },
            {
                level: 2,
                name: 'java'
            },
            {
                level: 3,
                name: 'python'
            },
        ]
    },
    {
        name: 'peter',
        skills: [{
                level: 5,
                name: 'Fortran'
            },
            {
                level: 4,
                name: 'Assembly'
            },
            {
                level: 5,
                name: 'C'
            },
        ]
    },
    {
        name: 'matt',
        skills: [{
                level: 2,
                name: 'ruby'
            },
            {
                level: 2,
                name: 'elixir'
            },
            {
                level: 3,
                name: 'clojure'
            },
        ]
    },
]

const [{ skills: [{ name }] }] = arr

console.log({name})
