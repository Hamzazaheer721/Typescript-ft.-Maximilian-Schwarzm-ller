enum IActionString {
  SUCCESS = 'SUCCESS',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

let filterMethod = (status: string): IActionString => {
  status = status.toUpperCase().trim()
  switch (status) {
    case IActionString.SUCCESS:
      return status
    case IActionString.ERROR:
      return status
    case IActionString.LOADING:
      return status
    default:
      return
  }
}

// Now lets see another trick
enum IActionNumber {
  LOADING,
  ERROR,
  SUCCESS
}

// { 0: 'LOADING',
//   1: 'ERROR',
//   2: 'SUCCESS',
//   LOADING: 0,
//   ERROR: 1,
//   SUCCESS: 2 }

console.log(Object.values(IActionNumber)) // [ 'LOADING', 'ERROR', 'SUCCESS', 0, 1, 2 ]
console.log(Object.keys(IActionNumber)) // [ '0', '1', '2', 'LOADING', 'ERROR', 'SUCCESS' ]

const _filterMethod = (status: number | string): string | -1 => {
  if (typeof status === 'string') {
    status = status.toUpperCase().trim()
  }
  let _index =
    typeof status === 'string'
      ? Object.values(IActionNumber).indexOf(status)
      : Object.keys(IActionNumber).indexOf(status.toString())
  if (_index === -1) return -1 // not found
  const _rtn = typeof status === 'string' ? status : IActionNumber[_index]
  switch (_index) {
    case IActionNumber.LOADING:
      return _rtn
    case IActionNumber.ERROR:
      return _rtn
    case IActionNumber.SUCCESS:
      return _rtn
    default:
      return -1
  }
}

console.log(IActionNumber.LOADING) // 0
console.log(_filterMethod('Success')) // SUCCESS
console.log(_filterMethod(2)) // SUCCESS
