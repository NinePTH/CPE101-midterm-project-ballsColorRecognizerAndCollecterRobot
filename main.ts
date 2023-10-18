function check () {
    huskylens.request()
    Normforward()
    if (huskylens.isAppear(ID_Red, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || huskylens.isAppear(ID_Blue, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || (huskylens.isAppear(ID_Green, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || (huskylens.isAppear(ID_White, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || huskylens.isAppear(ID_Yellow, HUSKYLENSResultType_t.HUSKYLENSResultBlock)))) {
        while (second < 2) {
            second += 1
            Backward()
            basic.showNumber(second)
        }
        second = 0
        iBIT.MotorStop()
        Normforward()
        if (huskylens.isAppear(ID_Red, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            iBIT.MotorStop()
            basic.showLeds(`
                # . . . #
                # . . # .
                # . # . .
                # # . . .
                . # # # #
                `)
            Red()
        } else if (huskylens.isAppear(ID_Blue, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            iBIT.MotorStop()
            basic.showLeds(`
                # . . . #
                . # . . #
                . . # . #
                . . . # #
                # # # # .
                `)
            Blue()
        } else if (huskylens.isAppear(ID_Green, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || (huskylens.isAppear(ID_White, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || huskylens.isAppear(ID_Yellow, HUSKYLENSResultType_t.HUSKYLENSResultBlock))) {
            iBIT.MotorStop()
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            Other()
        }
        Normforward()
        iBIT.MotorStop()
    }
}
function forwardToCollect () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 29)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 35)
}
function Collect () {
    basic.pause(200)
    while (second < 2) {
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
input.onButtonPressed(Button.A, function () {
    run += 1
})
function close () {
    iBIT.Servo(ibitServo.SV1, 70)
}
function Normforward () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 22)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 25)
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    iBIT.Servo(ibitServo.SV1, 70)
    run += 0
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
let ID_Green = 0
let ID_White = 0
let ID_Yellow = 0
let ID_Blue = 0
let ID_Red = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.showIcon(IconNames.Ghost)
ID_Red = 1
ID_Blue = 3
ID_Yellow = 2
ID_White = 4
ID_Green = 5
let run = 0
basic.forever(function () {
    while (run == 1) {
        check()
    }
})
