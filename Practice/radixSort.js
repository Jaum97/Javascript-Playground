
/**
 * Ultra Mega trash implementation do not use
 */
const radixSort = (arr, digitDecrement = 1) => {

    const len = arr.length
    let input = arr
    let output = Array(len)
    let counters = Array(10).fill(0)
    let prefixSum = Array(10).fill(0)
    let digitLooked = String(input[0]).length - digitDecrement
    let analyzed
    
    for(let i = 0; i < len ; i++) {
        analyzed = String(input[i]).charAt(digitLooked)

        counters[analyzed] ++
    }

    for(let j = 0; j < 10 ; j++) {
        prefixSum[j] =  counters[j] + (prefixSum[j - 1] || 0)
    }

    for(let k = len; k-- ;) {
        analyzed = input[k]

        output[prefixSum[String(analyzed).charAt(digitLooked)]--] = analyzed
    }

    output.shift()

    if(digitDecrement < String(input[0]).length) {
        return radixSort(output, digitDecrement + 1)
    }

    return output
}

function radixSortWellImplemented(arr) {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       // Create bucket arrays for each of 0-9
       let buckets = [...Array(10)].map(() => []);
       // For each number, get the current significant digit and put it in the respective bucket
       for (let num of arr) {
          buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
       }
       // Reconstruct the array by concatinating all sub arrays
       arr = [].concat.apply([], buckets);
       // Move to the next significant digit
       divisor *= 10;
    }
    return arr;
 }


 const arr = [681, 721, 462, 163, 263, 284, 905, 395, 806, 166, 277, 787, 307, 518, 988, 779]

 // [ 163, 166, 263, 277, 284, 307, 395, 462, 518, 681, 721, 779, 787, 806, 905, 988 ] 
 
 console.time('radix bad')
 const sorted1 = radixSort(arr)
 console.timeEnd('radix bad')

 console.time('radix good')
 const sorted2 = radixSortWellImplemented(arr)
 console.timeEnd('radix good')
