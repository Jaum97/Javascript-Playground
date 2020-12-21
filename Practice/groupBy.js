const groupBy = callback => arr => {
    const ret = {}

    const keys = arr.map(callback)

    for(const key of keys) {
        ret[key] = []
    }

    for(const e of arr) {
        const pos = callback(e)

        ret[pos].push(e)
    }

    return ret
}

const byGrade = groupBy(function(student) {
    const score = student.score;
    return score < 65 ? 'F' :
           score < 70 ? 'D' :
           score < 80 ? 'C' :
           score < 90 ? 'B' : 'A';
  });

const students = [{name: 'Abby', score: 84},
                {name: 'Eddy', score: 58},
              
                {name: 'Jack', score: 69},
                {name: 'Bob', score: 66}];

const t00 = byGrade(students);

// { B: [ { name: 'Abby', score: 84 } ], 
//   F: [ { name: 'Eddy', score: 58 } ], 
//   D: [ { name: 'Jack', score: 69 }, { name: 'Bob', score: 66 } ] }
