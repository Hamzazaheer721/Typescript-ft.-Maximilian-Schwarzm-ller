const arr = [
  {
    roles: [
      {
        name: 'hamza',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza2',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza3',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza4',
        id: 21313
      },
      {
        name: 'ali',
        id: 32131
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza2',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza3',
        id: 21313
      }
    ]
  },
  {
    roles: [
      {
        name: 'hamza4',
        id: 21313
      },
      {
        name: 'ali',
        id: 32131
      }
    ]
  }
]

let t1 = performance.now()
const arr_ = arr
  .map((obj) => obj.roles)
  .flat()
  .map((role) => role.name)
let t2 = performance.now()
console.log(`time is ${(t2 - t1) / 1000}`)

t1 = performance.now()
const arr__ = arr.map((obj) => obj.roles.map((role) => role.name)).flat()
t2 = performance.now()
console.log(`time is ${(t2 - t1) / 1000}`)

console.log(arr__)
