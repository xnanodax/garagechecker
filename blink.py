import time
import RPi.GPIO as GPIO

red=11
status=13
GPIO.setmode(GPIO.BOARD)
GPIO.setup(red, GPIO.OUT)
GPIO.setup(status, GPIO.IN)

print(">> starting file")

old_status = GPIO.input(status)

GPIO.output(red, True)
curr_status = GPIO.input(status)
time.sleep(2)

print(">> starting script")

try:
	while True:
		if old_status != curr_status:
			if curr_status > 0:
				print("garage door closed")
			else:
				print("garage door open")			
			old_status = curr_status
		curr_status = GPIO.input(status)
		time.sleep(0.05)
except (KeyboardInterrupt, SystemExit):
	GPIO.output(red, False)
	GPIO.cleanup()
	print("\n>> ending file")
