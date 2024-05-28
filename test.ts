// tests go here; this will not be compiled when this package is used as an extension.
LEDTower.LEDTowerInit()


input.onButtonPressed(Button.A, function() {
    LEDTower.getClearCommand(true)
    LEDTower.sendLEDCommand(LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 0), LEDTower.getLEDCharString("A", 21, LEDTower.getCharDirEnum(charFaceMap.up)), LEDTower.getColorPickerString(0x00ff00)), 50)
    LEDTower.getShowCommand(true)
})

input.onButtonPressed(Button.B, function() {
    LEDTower.getClearCommand(true)
    LEDTower.sendLEDCommand(LEDTower.getCommandToSend(LEDTower.get2DTowerCoor(0, 0), LEDTower.getLEDDotsString(LEDTower.get3DCoor(2, 0, 1), LEDTower.getLEDDotsString(LEDTower.get3DCoor(0, 3, 3)), LEDTower.getLEDDotsString(LEDTower.get3DCoor(0, 2, 0))), LEDTower.getColorPickerString(0xff0000)), 50)
    LEDTower.getShowCommand(true)
    LEDTower.getStringCommandToSend("Dot|9,0|5,1,0:6,2,0:7,3,0:8,4,0:9,4,1:10,4,2|255,0,255")
})