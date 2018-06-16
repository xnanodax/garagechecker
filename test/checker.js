var onoff = require('onoff');


var confirmGCM = 17;
var statusGCM = 27;
var GPIO = onoff.Gpio,
  confirm = new GPIO(confirmGCM, 'out'), //pin 11 = gcm 17 
  status = new GPIO(statusGCM, 'in'); //pin 13 = gcm 27

console.log(">> starting file");

var oldStatus = status.readSync();
confirm.writeSync(1);
var currStatus = status.readSync();

console.log(">> starting script");

var checker = function() {
  if (oldStatus != currStatus) {
    if (currStatus > 0) {
      console.log("garage door closed");
    } else {
      console.log("garage door open");
    }
    oldStatus = currStatus;
  }
  currStatus = status.readSync();
}

var interval = setInterval(checker, 50);


process.on('SIGINT', function () {
  clearInterval(interval);
  confirm.writeSync(0);
  confirm.unexport();
  
  status.writeSync(0);
  status.unexport();
  
  console.log('Bye, bye!');
  process.exit();
});