// tests go here; this will not be compiled when this package is used as an extension.
LEDTower.LEDTowerInit()


input.onButtonPressed(Button.A, function() {
    LEDTower.sendLEDCommand(LEDTower.getClearCommand(true),500)
    LEDTower.sendLEDCommand(LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 1), LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up)), LEDTower.getColorPickerString(0xff00ff)), 50)
    LEDTower.sendLEDCommand(LEDTower.getShowCommand(true),100)
})

input.onButtonPressed(Button.B, function() {
    LEDTower.sendLEDCommand(LEDTower.getClearCommand(true),100)
    LEDTower.sendLEDCommand(LEDTower.getStringCommandToSend("Dot|9,0|5,1,0:6,2,0:7,3,0:8,4,0:9,4,1:10,4,2|255,0,255;"), 50)
    LEDTower.sendLEDCommand(LEDTower.getShowCommand(true),100)
    
})