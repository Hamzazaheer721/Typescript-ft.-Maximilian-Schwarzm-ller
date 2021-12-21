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
