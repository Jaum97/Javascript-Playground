export const searchCaseInsensitive = (...params: Array<any>): (search: any, partialMatch?: boolean) => boolean => {
  let validSearch

  // suport for older platforms without array.flat()
  const flattenArr = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArr(val)) : acc.concat(val), [])
  const format = value => String(value).toUpperCase()

  if (Array.isArray(params)) {
      validSearch = flattenArr(params).map(param => {
          return Array.isArray(param) ? param.map(format) : format(param)
      })
  } else {
      validSearch = format(params)
  }

  return (search, partialMatch = true) => {
    
    
      const validation = valid => valid.includes(format(search))

      if(Array.isArray(validSearch)){
        return partialMatch ? validSearch.some(validation) : validation(validSearch)
      } else {
        return partialMatch ? validation(validSearch) : validSearch === search 
      }
         
  }
}

const list = [
  {name: 'john', skills: ['js', 'node', 'react', 'react-native']},
  {name: 'pete', skills: ['ruby', 'rust', 'rails', 'angular']},
  {name: 'dave', skills: ['python', 'django', 'sql', 'mongo']},
  {name: 'matt', skills: ['java', 'android', 'jsf', 'kotlin']},
  {name: 'jeff', skills: ['ios', 'swift', 'objective-c', 'xcode']},
  {name: 'kyle', skills: ['c', 'assembly', 'c#', 'f#']},
]

const skills = list.map(({skills})=> skills)

const names = list.map(({name})=> name)
//console.log(params)

const isValid = searchCaseInsensitive(skills, names)('djan', false)

// isValid false

const isValidMatchAll = searchCaseInsensitive(skills, names)('djan', true)

// isValidMatchAll true
