enum IActionString {
  SUCCESS = 'SUCCESS',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

const handleSuccess = () => console.log('SUCCESS')
const handleError = () => console.log('ERROR')
const handleLoading = () => console.log('LOADING !!')

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

console.log(filterMethod('loading')) // LOADING

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
console.log(IActionNumber)

const _filterMethod = (status: number | string) => {
  if (typeof status === 'string') {
    status = status.toUpperCase().trim()
  }
  console.log(status)
  let _index = Object.values(IActionNumber).indexOf(status)
  console.log(_index)
  if (_index === -1) return -1 // not found
  switch (_index) {
    case IActionNumber.LOADING:
      return status
    case IActionNumber.ERROR:
      return status
    case IActionNumber.SUCCESS:
      return status
    default:
      return -1
  }
}

console.log(IActionNumber.LOADING) // 0
console.log(_filterMethod('success')) // SUCCESS
