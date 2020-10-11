import React from 'react';
import ReactDOM from 'react-dom'
import '../css/dialog.scss';
import Dialog from './Dialog';
import {sleep} from '../js/base_func'
export default class extends React.Component {
  //dialogs = [];
  state = {
    dialogs: []
  }
  deletePrevious = []
  removeFrontDialog(removingDialog,index){
    setTimeout(() =>{
      if(index+1 ===this.state.dialogs.length){
        this.deletePrevious.forEach(v=>v())
        this.setState({
          dialogs: this.state.dialogs.filter(c=>c!==removingDialog)
        })
      }else{
        this.deletePrevious.push(()=>this.setState({
          dialogs: this.state.dialogs.filter(c=>c!==removingDialog)
        }))
      }
    
  }, 500);
  }
  componentDidMount() {
    
    const self=this;
    
    window.popup = async function(title, contents=[],buttons=['ok']){
      const dialogContent = {
        title:title,
        content:[],
        buttons:[],
        returnValue: null
      }
      if(typeof contents === 'string')dialogContent.content = [contents];
      else dialogContent.content = contents;
      if(typeof buttons === 'string')dialogContent.buttons = [buttons];
      else dialogContent.buttons = buttons;
      self.setState({
        dialogs: self.state.dialogs.concat([dialogContent])
      })
      await sleep(200)
      return dialogContent.returnValue
    }
  }
  render(){
    return (
      <div id='dialog-list'>
        {
          this.state.dialogs.map((content, index) =>
            <Dialog dcontent={content} dList={this} index={index} key={index}/>
          )
        }
      </div>
    )
  }
}