import './style.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider'

function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext)
  console.log(mode)
  return (
    <div>
      <div onClick={toggle} className="container__toggle">
        <div className="icon__toggle">🌙</div>
        <div className="icon__toggle">🔆</div>
        <div
          className="ball_toggle"
          style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
        />
      </div>
    </div>
  )
}

export default DarkModeToggle
