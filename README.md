# LED Tower Extension
### Remote control with InspireLab LED Tower


## Initialization
``||LEDTower.LEDTowerInit()||`` Must be used on Start
```blocks
LEDTower.LEDTowerInit()
```

## Sending Commands
This function helps to send commands to a LED tower and wait for some ms to send another command

``||LEDTower.sendLEDCommand(cmd_to_send, wait_ms)||``
* `cmd_to_send`: String Command to send
* `wait_ms`: ms to wait
```block
// @collapsed
    LEDTower.sendLEDCommand(LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 0), LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up)), LEDTower.getColorPickerString(0x00ff00)), 50)
```

## String Command Configuration

Return and convert the command string to be sent
`||getCommandToSend(tower_pos,led_str,color_rgb)||`
* `tower_pos`: tower position of x=[0,9] y=[0,2]
* `led_str`: Command String for z-x-y
* `color_rgb`: Color = [0x000000,0xFFFFFF]

Return and convert the command string from serial port or text
```block
LEDTower.getStringCommandToSend(read_string)
```
* `read_string`: serial string to be read   

### ~hint

#### Here is the command format for:
* Dot: Max 6 points on different levels
> `Dot|tx,ty|zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y|RRR,GGG,BBB;'
* Line(2-point): Points within 2 given locations with max 3 lines
> `Line|tx,ty|zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y:zz,x,y|RRR,GGG,BBB;`  
* Rectangle(2-point): Points within 2 corners on the same floor with max 4 retangle
> `Rect|tx,ty|zz,x,y,x,y:zz,x,y,x,y:zz,x,y,x,y:zz,x,y,x,y|RRR,GGG,BBB;`  
* Same Floor: Max 12 points on the same floor
> `Floor|tx,ty|zz:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y:x,y|RRR,GGG,BBB;`  
* Character: Show charactor from '0~9','A~Z','a~z' in designated direction
> `Char|tx,ty|C|zz|D|RRR,GGG,BBB;`  
* Show: make the designated LED Tower to light up
`Show|tx,ty;` 
* Show: make all LED Towers to light up 
> `Show|All;`  
* Clear: light off all LED Towers to light up 
> `Clear|tx,ty;`  
* Show: turn on all LED Towers  
> `Clear|All;`   

where *tx=[0,9]; ty=[0,2]; zz=[0,21]; x=[0,4]; y=[0,4];*  
*RRR=[0,255]; GGG=[0,255]; BBB=[0,255];*  
*C={['0','9'],['A','Z'],['a','z']}; D={'U','D','L','R'}*
### ~
    



## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/inspirelab-admin/pxt-ledtower-remote** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/inspirelab-admin/pxt-ledtower-remote** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>