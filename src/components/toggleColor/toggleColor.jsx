import '../../styles/toggleCalc.css'
import { useRef, useEffect } from 'react'

import { themes } from '../themes/themes'

const ToggleColor = ({ theme, setTheme }) => {
  const toggle = useRef()

  const handleMove = () => {
    if (theme.direction === 'to left') {
      if (theme.state === 1)
        setTheme({ state: theme.state + 1, direction: 'to right' })
      else setTheme({ ...theme, state: theme.state - 1 })
    }
    if (theme.direction === 'to right') {
      if (theme.state === 3)
        setTheme({ state: theme.state - 1, direction: 'to left' })
      else setTheme({ ...theme, state: theme.state + 1 })
    }
  }

  useEffect(() => {
    if (theme.state === 1) {
      toggle.current.style.transform = 'translateX(0)'
      toggle.current.style.transition = 'transform 0.5s'
    }
    if (theme.state === 2) {
      toggle.current.style.transform = 'translateX(20px)'
      toggle.current.style.transition = 'transform 0.5s'
    }
    if (theme.state === 3) {
      toggle.current.style.transform = 'translateX(41px)'
      toggle.current.style.transition = 'transform 0.5s'
    }
  }, [theme])

  return (
    <>
      <div className="theme">
        <div className="title-theme">
          <h5>THEME</h5>
        </div>
        <div className="switch-container">
          <div className="numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className={`switch ${themes()[theme.state - 1].tggleKeypad} `}>
            <div
              ref={toggle}
              className={`${themes()[theme.state - 1].btnEqual} `}
              onClick={handleMove}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToggleColor
