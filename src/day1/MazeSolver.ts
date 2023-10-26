const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]): boolean {
  
  // out of bounds
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false
  }

  // hit a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  // you've hit the end of the maze
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr)
    return true
  }

  // if we have seen it
  if (seen[curr.y][curr.x]) {
    return false
  }


  // recursive case
  path.push(curr)

  seen[curr.y][curr.x] = true

  for(let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]
    const ended = walk(
      maze,
      wall,
      { x: curr.x + x, y: curr.y + y },
      end,
      path,
      seen,
    )

    if (ended) return true
  }

  path.pop()

  return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path: Point[] = []
  const seen: boolean[][] = []

  for (let i = 0; i < maze.length; i++) {
    const mazeRow = maze[i]
    const seenRow = []
    for(let j = 0; j < mazeRow.length; j++) {
      seenRow.push(false)
    }
    seen.push(seenRow)
  }

  walk(maze, wall, start, end, path, seen)

  return path

}