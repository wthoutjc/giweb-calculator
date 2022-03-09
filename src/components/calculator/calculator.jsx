import { useState, useReducer, useEffect } from 'react'
import '../../styles/colors.css'
import '../../styles/structure.css'

// Components
import Button from '../button/button'
import ToggleColor from '../toggleColor/toggleColor'

// Reducer
import calcReducer from '../../reducer/calcReducer'

// Config Buttons
import { configButtons } from './configButtons'

// Themes
import { themes } from '../themes/themes'

const Calculator = () => {
  const [displayContent, dispatch] = useReducer(calcReducer, '')

  const [theme, setTheme] = useState({
    state: 1,
    direction: 'to left',
  })

  return (
    <div
      className={`calculator-container ${themes()[theme.state - 1].mainBack}`}
    >
      <div className="calculator">
        <div className={`header ${themes()[theme.state - 1].textHeader}`}>
          <div className="calc">
            <h1>calc</h1>
          </div>
          <ToggleColor theme={theme} setTheme={setTheme} />
        </div>
        <div
          className={`screen ${themes()[theme.state - 1].textHeader}  ${
            themes()[theme.state - 1].screenBack
          }`}
        >
          <h1>{displayContent ? displayContent : '0'} </h1>
        </div>
        <div className={`keypad ${themes()[theme.state - 1].tggleKeypad}`}>
          {configButtons(dispatch, theme)?.map((config, index) => {
            return (
              <Button
                key={index}
                className={config[0]}
                content={config[1]}
                fn={config[2]}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calculator
