const consoleLog = (data)=>{
  if(process.env.REACT_APP_TYPE === 'development'){
    console.log(data)
  }
}
