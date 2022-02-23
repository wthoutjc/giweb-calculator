import '../../styles/calculator.css'
const Calculator = () => {
  return (
    <div className="calculator-container dvd-mainBack">
      <div className="calculator">
        <div className="header text-white">
          <div className="calc">
            <h1>calc</h1>
          </div>
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
              <div className="switch">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="screen text-white dvd-screenBckground">
          <h1>399,981</h1>
        </div>
        <div className="keypad dvd-tggleKeypad">
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>7</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>8</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>9</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key1 btn-back-theme11 text-white">
            <h2>DEL</h2>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>4</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>5</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>6</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>+</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>1</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>2</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>3</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>-</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>.</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>0</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>/</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key0 btn-back-theme10">
            <h1>x</h1>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key1 btn-back-theme11 text-white">
            <h2>RESET</h2>
          </button>
          <button className="text-darkGrayishBlue border-bottom-theme1-key2 btn-back-theme12 text-white">
            <h1>=</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
