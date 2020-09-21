addEventListener('DOMContentLoaded',()=>{
  const searchParams = new URLSearchParams(location.search);
  //?call=shortcut&content=shortcut1
  if(searchParams.get('call')==='shortcut'){
    if(searchParams.get('content')==='shortcut1'){
      alert('opened by shortcut 1!');
    }
    if(searchParams.get('content')==='shortcut2'){
      alert('opened by shortcut 2!');
    }
  }
})