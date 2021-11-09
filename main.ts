input.onButtonPressed(Button.A, function () {
    Points += 1
})
input.onButtonPressed(Button.AB, function () {
    Points += 3
})
input.onButtonPressed(Button.B, function () {
    Points += 2
})
let Points = 0
basic.forever(function () {
    basic.showNumber(Points)
    if (Points == 7) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showString("You win")
    }
})
