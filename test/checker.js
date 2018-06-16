var onoff = require('onoff');


var ledGCM = 17;
var statusGCM = 27;
var GPIO = onoff.Gpio,
  led = new GPIO(ledGCM, 'out'), //pin 11 = gcm 17 
  status = new GPIO(statusGCM, 'out'); //pin 13 = gcm 27

console.log(">> starting file");

var oldStatus = status.readSync();
led.writeSync(1); //
var currStatus = status.readySync();



console.log(">> starting script");

while (true) {
  if (oldStatus != currStatus) {
    if (currStatus > 0) {
      console.log("garage door closed");
    } else {
      console.log("garage door open");
    }
    oldStatus = currStatus;
  }
  currStatus = status.readySync();
}

process.on('SIGINT', function () {
  // clearInterval(interval);
  led.writeSync(0);
  led.unexport();
  
  status.writeSync(0);
  status.unexport();
  
  console.log('Bye, bye!');
  process.exit();
});