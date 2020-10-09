import React from 'react';
import ReactDOM from 'react-dom'
import '../css/dialog.scss';
import Dialog from './Dialog';
export default class extends React.Component {
  //dialogs = [];
  state = {
    dialogs: []
  }
  removeFrontDialog(){
    setTimeout(() => this.setState({
      dialogs: this.state.dialogs.slice(0,-1)
    }), 500);
  }
  componentDidMount() {
    //window.popup = this.popupDialog
    
    const self=this;
    
    window.popup = function(title, contents=[]){
      const dialogContent = {
        title:title,
        content:[],
      }
      if(typeof contents === 'string')dialogContent.content = [contents];
      else dialogContent.content = contents;
      /*self.state.dialogs.forEach(v=>{
        v.className='sent-back'
        //v.classList?.add('sent-back')
      })*/
      self.setState({
        dialogs: self.state.dialogs.concat([
          <Dialog dcontent={dialogContent} dList={self}></Dialog>
        ])
      })
      /*self.setState(this.state.concat([
        {dialogs: dialogs}
      ]))*/
    }
  }
  render(){
    return (
      <div id='dialog-list'>
        {
          this.state.dialogs.map((component, index) =>{
            //component.
            return component
          })
        }
      </div>
    )
  }
}