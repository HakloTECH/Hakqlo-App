import React from 'react';
import ReactDOM from 'react-dom'
import '../css/dialog.scss';
import Dialog from './Dialog';
export default class extends React.Component {
  //dialogs = [];
  state = {
    dialogs: []
  }
  dialogContent = {
    title:'',
    content:[],
  }
  removeFrontDialog(){
    setTimeout(() => this.state.dialogs.pop(), 500);
    this.state.dialogs[this.state.dialogs.length-2].parentNode.classList.remove('sent-back')
  }
  
  componentDidMount() {
    self=this;
    
    window.popupDialog = function(title, contents=[]){
      if(typeof contents === 'string')this.dialogContent = [contents];
      else this.dialogContent = contents;
      self.state.dialogs.forEach(v=>{
        v.parentNode.classList.add('sent-back')
      })
      self.setState({
        dialogs: self.state.dialogs.concat([elem])
      })
      /*self.setState(this.state.concat([
        {dialogs: dialogs}
      ]))*/
    }
  }
  render(){
    return (
      <div id='dialog-list'>
        {this.state.dialogs.map((component, index) =>
          <Dialog dlist={this} title='' component={component} key={index}/>
        )
        }
      </div>
    )
  }
}