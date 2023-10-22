export default function two_crystal_balls(breaks: boolean[]): number {

  const jumpAmount = Math.floor(Math.sqrt(breaks.length))

  let i = jumpAmount
  for (;i < breaks.length; i++) {
    if (breaks[i]) {
      break;
    }
  }

  for(let j = i; j < i + jumpAmount; j ++) {
    if (breaks[j]) {
      return j
    }
  }

  return -1
}