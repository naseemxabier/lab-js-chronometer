class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    if(typeof printTimeCallback == "function") 
    {return printTimeCallback()};
  }, 1000)
  }

  getMinutes() {
    if(this.currentTime === 0) {return 0}
    else {return Math.floor(this.currentTime/60)}
  }

  getSeconds() {
    if(this.currentTime === 0) {return 0}
    else{return this.currentTime%60}
  }

  computeTwoDigitNumber(value) {
    let result = JSON.stringify(value)
    if (result.length < 2) {
      return `0` + result
     }
     else {return result}
      }

  stop() {
   clearInterval(this.intervalId) 
  }

  reset() {
    this.currentTime = 0
  }

  split() { 
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
