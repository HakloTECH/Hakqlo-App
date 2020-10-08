import React from 'react';
import { Modal } from 'react-dialog-polyfill'

export default class extends React.Component {
  state = {
  }
  componentDidMount() {
    const dlist = this.props.dlist;
  }
  render() {
    const dList = this.props.dlist;
    const dContent = dList.dialogContent;
    return (
      <Modal onClose={() => {
        console.log(dList);
        dList.removeFrontDialog();
      }} open>
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