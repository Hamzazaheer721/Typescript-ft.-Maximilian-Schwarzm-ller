function CityTraffic(strArr) {
  class Graph {
    constructor() {
      this.neighbours = []
    }
    addPath(u, v) {
      if (this.neighbours[u] === undefined) this.neighbours[u] = []
      this.neighbours[u].push(v)
      if (this.neighbours[v] === undefined) this.neighbours[v] = []
      this.neighbours[v].push(u)
    }
  }

  // BFS algorithm
  function getShortestPath(graph, startNode, targetNode) {
    const queue = [startNode]
    const visited = { startNode: true }
    let tail = 0
    const predecessor = {}
    while (tail < queue.length) {
      let currentNode = queue[tail]
      tail++
      const neighbours = graph.neighbours[currentNode]
      for (let i = 0; i < neighbours.length; i++) {
        const neighbourNode = neighbours[i]
        if (!visited[neighbourNode]) {
          visited[neighbourNode] = true
          if (neighbourNode === targetNode) {
            const path = [targetNode]
            while (currentNode !== startNode) {
              path.push(currentNode)
              currentNode = predecessor[currentNode]
            }
            path.push(currentNode)
            path.reverse()
            return path.join('-')
          }
          predecessor[neighbourNode] = currentNode
          queue.push(neighbourNode)
        }
      }
    }
    return '-1'
  }

  function mergeSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }

  function addPaths(graph, str) {
    str = str.replace('[', '')
    str = str.replace(']', '')
    console.log(str)
    const foo = str.split(':')
    const node1 = foo[0]
    cities.push(node1)
    const neighbourCities = foo[1].split(',')
    neighbourCities.forEach((city) => graph.addPath(node1, city))
  }

  const cityGraph = new Graph()
  let cities = []
  strArr.forEach((c) => addPaths(cityGraph, c))
  let intCities = cities.map(Number)
  let sortedCities = cities.map(Number)
  mergeSort(sortedCities)

  return sortedCities
}

const input = [
  '1:[5]',
  '4:[5]',
  '3:[5]',
  '5:[1,4,3,2]',
  '2:[5,15,7]',
  '7:[2,8]',
  '8:[7,38]',
  '15:[2]',
  '38:[8]'
]

