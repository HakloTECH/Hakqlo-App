import React from 'react';
import { Modal } from 'react-dialog-polyfill'
/*

僕のスパゲッティーを食べたまえ！

*/
export default class extends React.Component {

  resolve=null;
  //deletePrevious = ()=>{}
  componentDidMount() {
    const dList = this.props.dList;

    const dContent = this.props.dcontent;

    this.index=this.props.index;
    dContent.returnValue=new Promise(resolve=>this.resolve=resolve)

    
  }
  render() {
    const dContent = this.props.dcontent;
    const dList = this.props.dList;
    return (
      <Modal onClose={(e, dialog) => {

        dList.removeFrontDialog(dContent, this.index);
        this.resolve(dialog.returnValue)
      }} className={
        (dList.state.dialogs.length-1>this.index) ? 'sent-back' : ''
      } open={true}>
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