let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(255)
let i = 0
basic.forever(function () {
    strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
    strip.clear()
    if (i == 11) {
        i = 0
    } else {
        i += 1
    }
})
