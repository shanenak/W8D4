class Clock {
  constructor() {
    
    // 1. Create a Date object.
    const date_obj = new Date()

    // 2. Store the hours, minutes, and seconds.
    this.hour = date_obj.getHours()
    this.min = date_obj.getMinutes()
    this.sec = date_obj.getSeconds()

    // 3. Call printTime.
    this.printTime()

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000)
    
    // setInterval(this._tick, 1000)
    // console.log(this, "constructor this") 
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.min}:${this.sec}`)
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

   this.sec += 1

   if (this.sec === 60) {
    this.min += 1
    this.sec = 0
   }
   if (this.min === 60) {
    this.hour += 1
    this.min = 0
   }
   if (this.hour === 24) {
    this.hour = 0
   }
    // console.log(this.second, "tick this") 
   this.printTime()

  }
  
}

const clock = new Clock();