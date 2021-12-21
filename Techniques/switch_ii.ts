const handleSuccess = () => 'SUCCESS'
const handleError = () => 'ERROR'
const handleLoading = () => 'LOADING'

const handler = {
  success: handleSuccess,
  error: handleError,
  loading: handleLoading
}

const filterHandler = (status): string => {
  if (typeof status !== 'string') {
    status = status.toString()
  }
  status = status.toLowerCase()
  const handlerStatus = handler[status]()
  if (!handlerStatus) throw Error('ERROR !!!!!!!!!!')
  return handlerStatus
}

filterHandler('s')
