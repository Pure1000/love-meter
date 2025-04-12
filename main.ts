input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100))
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("0-25=No love")
    basic.showString("26-50=BFF love")
    basic.showString("51-75=Brokenhearted love")
    basic.showString("76-100=Fiery hot love")
})
basic.showString("LOVE METER")
