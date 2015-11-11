Garage
-----

Control a garage door with a Rasberry Pi and Node.js.

### Plugins

* https://github.com/rosie-home-automation/garage_door_core
 * The main plugin for actually controlling the garage door 
* https://github.com/rosie-home-automation/garage_door_rfid
 * Allows reading rfid cards as well as user authorization
 * If an authorized rfid card is read, it will trigger the garage door
 * Adds basic garage and rfid logging
* https://github.com/rosie-home-automation/garage_door_slack
 * Sends garage door events (open/closed) to a slack channel


### Schematic and Board Layout on 123d.circuits.io

https://123d.circuits.io/circuits/1109243

* Can be printed from companies such as [OSH Park](https://oshpark.com)

### Parts list

* Raspberry Pi B+
* Jrelay - 5v DC relay
  * Developed for [TOOGOO(R) DC 5V Coil Relay Module](http://www.amazon.com/gp/product/B00TO7IY76?psc=1&redirect=true&ref_=oh_aui_detailpage_o02_s01)
* URFID - RFID reader
  * Developed with Wiegand in mind
  * Developed for [aptiQ MTK15](http://us.allegion.com/products/readers/multitech/mtk15/pages/default.aspx)
* Dclosed - Green 3mm LED
* Dopen - Red 3mm LED
* R1 - 220 ohm resistor
* R2 - 220 ohm resistor
* R3 - 2.2k ohm resistor
* R4 - 2.2k ohm resistor
* R5 - 1k ohm resistor
* R6 - 10k ohm resistor
* R7 - 3.3k ohm resistor
* R8 - 3.3k ohm resistor
