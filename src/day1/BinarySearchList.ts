export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length

  const midFind = (l: number, h: number) => Math.floor(((h-l)/2) + l)

  do {
    const m = midFind(low, high)
    const v = haystack[m]

    if (v === needle) {
      return true
    } else if (v > needle) {
      high = m
    } else {
      low = m + 1
    }
  } while (low < high);

  return false
}