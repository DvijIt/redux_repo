import React from 'react'
import { ThemeContext } from './themes-content'

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    
    return (
      <button
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor
        }}
      >
        {this.props.children}
      </button>
    );

  }
}

ThemedButton.contextType = ThemeContext

export default ThemedButton;