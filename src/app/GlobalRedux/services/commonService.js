import { useDispatch } from 'react-redux'
import { changeTheme } from '../Features/common/commonSlice'

function useCommonService() {
  const dispatch = useDispatch()
  const changeMainTheme = (value) => {
    dispatch(changeTheme(value))
  }

  return {
    changeMainTheme,
  }
}

export default useCommonService
