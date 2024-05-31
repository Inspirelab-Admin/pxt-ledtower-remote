# LED Tower Extension
### Remote control with InspireLab LED Tower
### ~
#### Tower coordination (x,y)  
`2 x x x x x x x x x x`  
`1 x x x x x x x x x x`  
`0 x x x x x x x x x x`  
`# 0 1 2 3 4 5 6 7 8 9`  
#### Floor coordination (z,x,y)
z:  
`0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21`
x,y:  
`4  x  x  x  x  x`  
`3  x  x  x  x  x`  
`2  x  x  x  x  x`  
`1  x  x  x  x  x`  
`0  x  x  x  x  x`  
`#  0  1  2  3  4`
### ~
## Initialization
``||LEDTower.LEDTowerInit()||`` Must be used on Start
```blocks
LEDTower.LEDTowerInit()
```
## Sending Commands
##### ``|LEDTower.sendLEDCommand(cmd_to_send: string, wait_ms: number)|``
```block
LEDTower.sendLEDCommand(LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 0), LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up)), LEDTower.getColorPickerString(0x00ff00)), 50)
```
This function helps to send commands to a LED tower and wait for some ms to send another command
* `||cmd_to_send||`: String Command to send
* `||wait_ms||`: ms to wait
## String Command Configuration
##### ``|LEDTower.getCommandToSend(tower_pos: string, led_str: string, color_rgb: number)|``
```block
LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 0), LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up)), LEDTower.getColorPickerString(0xff0000))
```
Return and convert the command string to be sent
* `||tower_pos||`: tower position of x=[0,9] y=[0,2]
* `||led_str||`: Command String for z-x-y
* `||color_rgb||`: Color = [0x000000,0xFFFFFF]
##### ``|LEDTower.getStringCommandToSend(read_string: string)|``


## ~button docs/README2

NEXT: Next page

## ~
Go to [Next page](/README2.md)
Go to [Next page](/docs/README2.md)