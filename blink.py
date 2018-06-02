import time
import RPi.GPIO as GPIO

print("starting")

GPIO.setmode(GPIO.BOARD)
red=11
GPIO.setup(red,GPIO.OUT)
GPIO.output(red, True)
time.sleep(1)
GPIO.output(red, False)
time.sleep(1)
GPIO.output(red, True)
time.sleep(1)
GPIO.output(red, False)
GPIO.cleanup()

print("ending")