
let GLOBAL_URL = "";

if(process.env.NODE_ENV === 'development') {
    GLOBAL_URL = 'https://cors-anywhere.herokuapp.com/https://sleepy-basin-49835.herokuapp.com'
  }
  
  if(process.env.NODE_ENV === 'production') {
    GLOBAL_URL = 'https://sleepy-basin-49835.herokuapp.com'
  }

export {GLOBAL_URL}