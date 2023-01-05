let A = 0
let B = 0
let AB = 0
let AB_change_new = 0
let AB_change_old = 0
let B_change_new = 0
let B_change_old = 0
let A_change_new = 0
let A_change_old = 0
input.onButtonPressed(Button.A, function () {
    A = 1
    B = 0
    AB = 0
    while (A == 1) {
        basic.showNumber(input.temperature())
    }
})
input.onButtonPressed(Button.AB, function () {
    A = 0
    B = 0
    AB = 1
    while (AB == 1) {
        if (AB_change_new != AB_change_old) {
            basic.clearScreen()
        } else {
            basic.showNumber(input.acceleration(Dimension.Strength))
        }
    }
})
/**
 * Feature Activator
 */
input.onButtonPressed(Button.B, function () {
    A = 0
    B = 1
    AB = 0
    while (B == 1) {
        if (B_change_new != B_change_old) {
            basic.clearScreen()
        } else {
            basic.showNumber(input.compassHeading())
        }
    }
})
/**
 * Screen Change
 */
basic.forever(function () {
    if (AB_change_new != AB_change_old && AB == 1) {
        basic.clearScreen()
    }
    AB_change_old = input.temperature()
    AB_change_new = input.temperature()
})
basic.forever(function () {
    A_change_new = input.temperature()
    if (A_change_new != A_change_old && A == 1) {
        basic.clearScreen()
    }
    A_change_old = input.temperature()
})
basic.forever(function () {
    B_change_new = input.temperature()
    if (B_change_new != B_change_old && B == 1) {
        basic.clearScreen()
    }
    B_change_old = input.temperature()
})
