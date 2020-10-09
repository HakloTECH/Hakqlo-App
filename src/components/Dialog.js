import React from 'react';
import { Modal } from 'react-dialog-polyfill'

export default class extends React.Component {
  state = {
    index: 0
  }
  index=0
  componentDidMount() {
    const dList = this.props.dList;
    /*this.setState({
      index: dList.state.dialogs.indexOf(this)
    })*/
    this.index=dList.state.dialogs.indexOf(this)
    
  }
  render() {
    const dContent = this.props.dcontent;
    const dList = this.props.dList;
    
    //console.log(dList.state.dialogs);
    return (
      <Modal onClose={() => {
        dList.removeFrontDialog();
      }} className={
        (dList.state.dialogs.length-1>this.index) ? 'sent-back' : ''
      } open>
        <form method='dialog'>
          <p className='title'>{dContent.title}<button value='cancel'>cancel</button></p>
          {dContent.content.map(v=>{
            
            if (typeof v === "string") {
              return(<p><label>{v}</label></p>)
            } else if (v instanceof HTMLElement) {
              return(<p>{v}</p>)
            }
            
            
          })}
        </form>
      </Modal>
    )
  }
}