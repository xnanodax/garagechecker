import time
import RPi.GPIO as GPIO

red=11
GPIO.setmode(GPIO.BOARD)
GPIO.setup(red, GPIO.OUT)

print(">> starting file")

try:
	while True:
		GPIO.output(red, True)
except (KeyboardInterrupt, SystemExit):
	GPIO.cleanup()
	print("\n>> ending file")
