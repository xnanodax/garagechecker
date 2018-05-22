# Raspberry Interface

## Connecting to Raspberry 

+ Connect raspberry pi to [ssh][connect-ssh]
+ Load raspberry pi [gui]
    + in ssh
        + installation
            + `sudo apt-get update`
            + `sudo apt-get install realvnc-vnc-server realvnc-vnc-viewer`
        + viewing
            + `vncserver`

Steps:
- [ ] Connect Raspberry Pi Headless
- [ ] Connect backend raspberry pi to post to mongo db
    - [ ] pass params into axios or ajax to create post
    - [ ] use pymongo
- [ ] read from mongodb 

[connect-ssh](https://medium.com/@tzhenghao/how-to-ssh-into-your-raspberry-pi-with-a-mac-and-ethernet-cable-636a197d055)
[gui](https://www.raspberrypi.org/documentation/remote-access/vnc/README.md)