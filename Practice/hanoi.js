//https://www.youtube.com/watch?v=8lhxIOAfDss

const move = (from, to) => console.log(`Move disc from ${from} to ${to}!`)

const moveVia = (from, to, via) => {
  move(from, via)
  move(via, to)
}

const hanoi = (num, from, helper, to) => {
  if (num !== 0) { 
    hanoi(num-1, from, to, helper)
    move(from, to)
    hanoi(num-1, helper, from, to)
  }
}

hanoi(4, 'A', 'B', 'C')
