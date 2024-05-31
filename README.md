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
```block
LEDTower.getStringCommandToSend("Dot|9,0|5,1,0:6,2,0:7,3,0:8,4,0:9,4,1:10,4,2|255,0,255;")
```
Return and convert the command string from serial port or text
* `||read_string||`: serial string to be read   

### ~hint
#### **Here is the command format for:**
* Dot: Max 6 points on different levels
> `Dot|tx,ty|zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y|RRR,GGG,BBB;`
* Line(2-point): Points within 2 given locations with max 3 lines
> `Line|tx,ty|zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y|RRR,GGG,BBB;`  
* Rectangle(2-point): Points within 2 corners on the same floor with max 4 retangle
> `Rect|tx,ty|zz,x,y,x,y:zz,x,y,x,y:zz,x,y,x,y:zz,x,y,x,y|RRR,GGG,BBB;`  
* Same Floor: Max 12 points on the same floor
> `Floor|tx,ty|zz:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y|RRR,GGG,BBB;`  
* Character: Show charactor from '0~9','A~Z','a~z' in designated direction
> `Char|tx,ty|C|zz|D|RRR,GGG,BBB;`  
* Show: make the designated LED Tower to light up
> `Show|tx,ty;` 
* Show: make all LED Towers to light up 
> `Show|All;`  
* Clear: light off all LED Towers to light up 
> `Clear|tx,ty;`  
* Show: turn on all LED Towers  
> `Clear|All;`   

where *tx=[0,9]; ty=[0,2]; zz=[0,21]; x=[0,4]; y=[0,4]; RRR=[0,255]; GGG=[0,255]; BBB=[0,255];*  
*C={['0','9'],['A','Z'],['a','z']}; D={'U','D','L','R'}*
### ~


##### ``|LEDTower.getClearCommand(to_all_tower: boolean, tower_pos?: string)|``
```block
LEDTower.getClearCommand(true)
``` 
Return string of Command for lighting off a tower
* `||to_all_tower||`: set yes if all tower to be lighted off
* `||tower_pos||`: (Optional) tower position if No


##### ``|LEDTower.getShowCommand(to_all_tower: boolean, tower_pos?: string)|``
```block
LEDTower.getShowCommand(true)
``` 
Return string of Command for lighting on a tower
* `||to_all_tower||`: set yes if all tower to be lighted on
* `||tower_pos||`: (Optional) tower position if No



## Command String
###### `|getLEDCharString(char_to_show: string, led_cz: number, face_dir: string)|`
```block
LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up))
``` 
Return Character String from coordinates
* `||char_to_show||`: character to be shown ['0','z']
* `||led_cz||`: floor of character to be shown
* `||face_dir||`: direction of the character


###### ``|getLEDDotsString(led_p1: string, led_p2?: string, led_p3?: string, led_p4?: string, led_p5?: string, led_p6?: string)|``
```block
LEDTower.getLEDDotsString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up))
``` 
Return Character String from coordinates
* `||led_p1||`: position of LED dot
* `||led_p2||`: (Optional) position of LED dot
* `||led_p3||`: (Optional) position of LED dot
* `||led_p4||`: (Optional) position of LED dot
* `||led_p5||`: (Optional) position of LED dot
* `||led_p6||`: (Optional) position of LED dot


##### ``|getLEDLinesString(led_l1: string, led_l2?: string, led_l3?: string)|``
```block
LEDTower.getLEDLinesString(LEDTower.getLEDOneLineString(LEDTower.get3DCoor(0, 0, 0), LEDTower.get3DCoor(0, 0, 0)))
``` 
Return Character String from coordinates
* `||led_l1||`: position of 2 points for LED line
* `||led_l2||`: (Optional) position of 2 points for LED line
* `||led_l3||`: d(Optional) position of 2 points for LED line


##### ``|getLEDRectsString(led_r1: string, led_r2?: string, led_r3?: string, led_r4?: string)|``
```block
LEDTower.getLEDRectsString(LEDTower.getLEDOneRectString(0, LEDTower.get2DCoor(0, 0), LEDTower.get2DCoor(0, 0)))
``` 
Return Character String from coordinates
* `||led_r1||`: position of 2 corners to form rectangle on the same floor
* `||led_r2||`: (Optional) position of 2 corners to form rectangle on the same floor
* `||led_r3||`: (Optional) position of 2 corners to form rectangle on the same floor
* `||led_r4||`: (Optional) position of 2 corners to form rectangle on the same floor

##### ``|getLEDSameFloorString(led_rz: number, led_p1?: string, led_p2?: string, led_p3?: string, led_p4?: string, led_p5?: string, led_p6?: string, led_p7?: string, led_p8?: string, led_p9?: string, led_p10?: string, led_p11?: string, led_p12?: string)|``
```block
LEDTower.getLEDSameFloorString(0, LEDTower.get2DCoor(0, 0))
``` 
Return Character String from coordinates
* `||led_rz||`: position of LED dotfloor to be set
* `||led_p1||`: position of LED dot
* `||led_p2||`: (Optional) position of LED dot
* `||led_p3||`: (Optional) position of LED dot
* `||led_p5||`: (Optional) position of LED dot
* `||led_p6||`: (Optional) position of LED dot
* `||led_p7||`: (Optional) position of LED dot
* `||led_p8||`: (Optional) position of LED dot
* `||led_p9||`: (Optional) position of LED dot
* `||led_p10||`: (Optional) position of LED dot
* `||led_p11||`: (Optional) position of LED dot
* `||led_p12||`: (Optional) position of LED dot

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/inspirelab-admin/pxt-ledtower-remote** and import

## License

MIT


#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>