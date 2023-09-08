Function.prototype.myThrottle = function(interval) {
    let tooSoon = false
    // returns a new func using arrow func (throttled ver of org func)
    return () => {
        if (!tooSoon) {
            // prevents immediate subsequent calls to the func
            tooSoon = true
            setTimeout(()=>{
                // set tooSoon back to false after interval/delay
                tooSoon = false
                // ensures that the original function is called with the same context
                return this.apply()
            }, interval) 
        }
    }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When you create a new Neuron,
// you can call #fire as frequently as you want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, you should be able to throttle
// the #fire function of your neuron so that it can fire only
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);

// This time, if your Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though you're still trying to invoke it
// every 10ms!

// If you want this behavior for ALL neurons, you can do the same logic in the
// constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }