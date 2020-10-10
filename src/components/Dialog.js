import React from 'react';
import { Modal } from 'react-dialog-polyfill'

export default class extends React.Component {
  state = {
    index: 0
  }
  resolve=null;
  componentDidMount() {
    const dList = this.props.dList;

    const dContent = this.props.dcontent;
    /*this.setState({
      index: dList.state.dialogs.indexOf(this)
    })*/
    this.index=this.props.index;
    dContent.returnValue=new Promise(resolve=>this.resolve=resolve)
    //dList.state.dialogs.indexOf(this)
    
  }
  render() {
    const dContent = this.props.dcontent;
    const dList = this.props.dList;
    //console.log(dList.state.dialogs.length);
    return (
      <Modal onClose={(e, dialog) => {
        dList.removeFrontDialog();
        this.resolve(dialog.returnValue)
      }} className={
        (dList.state.dialogs.length-1>this.index) ? 'sent-back' : ''
      } open>
        <form method='dialog'>
          <p className='title'>
            {dContent.title}
            <button value='cancel'>cancel</button>
          </p>
          {dContent.content.map(v=>{
            if (typeof v === "string") {
              return(<p><label>{v}</label></p>)
            } else if (typeof v === "object" ||v instanceof HTMLElement ) {
              return <div>{v}</div>
            }
          })}
          <menu>
            {dContent.buttons.map(v=>{
            
            if (typeof v === "string") {
              return(<button type='submit' value={v}>{v}</button>)
            } else if (v instanceof Object) {
              return(<button type='submit' value={v.value}>{v.text}</button>)
            }
            
            
          })}
          </menu>
        </form>
      </Modal>
    )
  }
}