import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isDarkMode: true}
  getButtonText = () => {
    const {isDarkMode} = this.state
    const ModelClassName = isDarkMode ? 'Dark Mode' : 'Light Mode'
  
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
  }
  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }
  render() {
    const buttonText = this.getButtonText()
    return (
      <div className={`container $ {ModelClassName}`}>
        <h1 className="heading">Click To Change Mode</h1>
        <button type="button" className="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome

