var events = require('events');

var eventEmitter = new events.EventEmitter();

// //bind and event and event handler as follows
// eventEmitter.on('eventName', ()=>{
//     console.log("Event fired");
    
// });

// eventEmitter.addListener('eventName', ()=>{
//     console.log("Event fired from an add event listener");
    
// });

// //get all listeners attached to an emmiter results is in an array []
// console.log(eventEmitter.listeners('eventName'));

// //count listeners
// console.log(events.listenerCount(eventEmitter, 'eventName'));

// //Fire the event
// eventEmitter.emit('eventName');

// console.log('Program Ended');

// listener #1
var listner1 = function() {
    console.log('listner1 executed.'); 
}

// listener #2
var listner2 = function() {
    console.log('listner2 executed.'); 
  }
// Bind the connection event with the listner1 function 
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function 
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");
// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function 
eventEmitter.removeListener('connection', listner1); console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
