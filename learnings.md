# Raspberry Interface

## General Notes

+ MongoDb
  + noSql version of postgresql
  + using mLab
    + xna, h9
+ E
+ R react
+ Node
  + rails' rack

## Raspberry Pi Set Up

+ Models Avaliable
  + `Raspberry Pi 2 Model B`
    + ip: 192.168.2.2
  + `Raspberry Pi 3, Model B`
    + ip: 192.168.2.3
    + considerable much faster than pi 2!
+ Find ip address
  + Connect raspberry pi to [ssh][connect-ssh]
  + find pi address `ping raspberrypi.local`
+ Update Raspberry Pi
  + `sudo apt-get update`
  + `sudo apt-get dist-upgrade`
+ Install Programs
  + `sudo apt-get install realvnc-vnc-server realvnc-vnc-viewer`

## Raspberry Pi Connection

+ Load raspberry pi w/ vnc viewer[gui]
  + `ssh pi@192.168.2.2`
  + `vncserver :10`: you can use any port number after the colon
  + using vnc viewer, connect to `192.168.2.2:10`

## Steps

- [ ] Connect Raspberry Pi Headless with router
- [ ] Turn on Wifi
- [ ] Connect backend raspberry pi to post to mongo db
  - [ ] pass params into axios or ajax to create post
  - [ ] use pymongo
- [ ] read latest entry from mongodb

## Turning on WIFI

  + `sudo apt-get update`
  + `sudo apt-get upgrade` takes so long!

## Python Program

```python

import time 
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD) 
  # vs GPIO.setmode(GPIO.BCM)
red = 11
GPIO.setup(red, GPIO.OUT)
GPIO.output(red, True)
time.sleep(1)
GPIO.cleanup()

```

[connect-ssh]:https://medium.com/@tzhenghao/how-to-ssh-into-your-raspberry-pi-with-a-mac-and-ethernet-cable-636a197d055
[gui]:https://www.raspberrypi.org/documentation/remote-access/vnc/README.md