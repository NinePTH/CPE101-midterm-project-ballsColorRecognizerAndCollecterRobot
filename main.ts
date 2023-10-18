function check () {
    huskylens.request()
    Normforward()
    if (huskylens.readeBox(ID_Red, Content1.yCenter) >= 120 || huskylens.readeBox(ID_Blue, Content1.yCenter) >= 120 || huskylens.readeBox(ID_Yellow, Content1.yCenter) >= 120 || (huskylens.readeBox(ID_White, Content1.yCenter) >= 120 || huskylens.readeBox(ID_Green, Content1.yCenter) >= 120)) {
        if (SeeCount == 0) {
            while (second < 2) {
                second += 1
                Backward()
                basic.showNumber(second)
            }
            second = 0
            iBIT.MotorStop()
            SeeCount = 1
            basic.pause(200)
        } else {
            checkColor()
            Normforward()
            iBIT.MotorStop()
            SeeCount = 0
        }
    }
}
function PlaceColorBlue () {
    backwardTodropBlue()
}
function forwardToCollect () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 29)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 35)
}
function Collect () {
    basic.pause(200)
    while (second < 3) {
        second += 1
        forwardToCollect()
        basic.showNumber(second)
    }
    second = 0
    iBIT.MotorStop()
    close()
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function backwardTodropRed () {
    iBIT.Servo(ibitServo.SV1, 35)
    basic.pause(200)
    while (second < 4) {
        second += 1
        BackLeft()
        basic.showNumber(second)
    }
    second = 0
    iBIT.MotorStop()
    close()
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    run += 1
})
function BackLeft () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Backward, 50)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 10)
}
function backwardTodropBlue () {
    iBIT.Servo(ibitServo.SV1, 180)
    basic.pause(200)
    while (second < 4) {
        second += 1
        BackRight()
        basic.showNumber(second)
    }
    second = 0
    iBIT.MotorStop()
    close()
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function checkColor () {
    if (huskylens.readeBox(ID_Red, Content1.yCenter) >= 120) {
        iBIT.MotorStop()
        basic.showLeds(`
            # . . . #
            # . . # .
            # . # . .
            # # . . .
            . # # # #
            `)
        Red()
    } else if (huskylens.readeBox(ID_Blue, Content1.yCenter) >= 120) {
        iBIT.MotorStop()
        basic.showLeds(`
            # . . . #
            . # . . #
            . . # . #
            . . . # #
            # # # # .
            `)
        Blue()
    } else if (huskylens.readeBox(ID_Green, Content1.yCenter) >= 120 || (huskylens.readeBox(ID_White, Content1.yCenter) >= 120 || huskylens.readeBox(ID_Yellow, Content1.yCenter) >= 120)) {
        iBIT.MotorStop()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Other()
    } else {
        Normforward()
    }
}
function BackRight () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Backward, 10)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 50)
}
function close () {
    iBIT.Servo(ibitServo.SV1, 70)
}
function Normforward () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 24)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 28)
}
function PlaceColorRed () {
    backwardTodropRed()
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    iBIT.Servo(ibitServo.SV1, 70)
    run += 0
    basic.showIcon(IconNames.Yes)
})
function Other () {
    iBIT.Servo(ibitServo.SV1, 110)
    Collect()
}
function Blue () {
    iBIT.Servo(ibitServo.SV1, 180)
    Collect()
}
function Red () {
    iBIT.Servo(ibitServo.SV1, 35)
    Collect()
}
function Backward () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Backward, 22)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 25)
}
let second = 0
let SeeCount = 0
let ID_Green = 0
let ID_White = 0
let ID_Yellow = 0
let ID_Blue = 0
let ID_Red = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.showIcon(IconNames.Ghost)
ID_Red = 3
ID_Blue = 2
ID_Yellow = 4
ID_White = 1
ID_Green = 5
let run = 0
SeeCount = 0
basic.forever(function () {
    while (run == 1) {
        check()
    }
})
