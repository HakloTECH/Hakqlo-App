import React from 'react'
import Splash from './Splash'
import WindowList from './WindowList'
import Install from './Install'
import DialogList from './DialogList'
class App extends React.Component {
  state = {
    isPWA: window.matchMedia('(display-mode: standalone)').matches
  }

  componentDidMount() {
    window.matchMedia('(display-mode: standalone)').addEventListener('change', e => {
      this.setState({
        isPWA: e.matches
      })
    })
  }

  render() {
    if (this.state.isPWA) {
      return (
        <div className='App'>
          <Splash />
          <WindowList />
          <DialogList />
        </div>
      )
    } else {
      return (
        <div className='App'>
          <Install />
          <DialogList />
        </div>
      )
    }
  }
}

export default App
