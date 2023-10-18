function forwardToCollect () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 33)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 38)
}
function Collect () {
    basic.pause(200)
    while (second < 5) {
        second += 1
        forwardToCollect()
        basic.showNumber(second)
    }
    second = 0
    iBIT.MotorStop()
    basic.showNumber(second)
}
function white () {
    iBIT.Servo(ibitServo.SV1, 110)
    Collect()
}
input.onButtonPressed(Button.A, function () {
    Normforward()
})
function close () {
    iBIT.Servo(ibitServo.SV1, 70)
}
function Normforward () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 44)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
}
input.onButtonPressed(Button.AB, function () {
    iBIT.Servo(ibitServo.SV1, 35)
})
input.onButtonPressed(Button.B, function () {
    iBIT.Servo(ibitServo.SV1, 180)
})
function Blue () {
    iBIT.Servo(ibitServo.SV1, 180)
    Collect()
}
function Red () {
    iBIT.Servo(ibitServo.SV1, 35)
    Collect()
}
let second = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        iBIT.MotorStop()
        basic.showIcon(IconNames.Yes)
        Red()
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        iBIT.MotorStop()
        basic.showIcon(IconNames.Happy)
        white()
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        iBIT.MotorStop()
        basic.showIcon(IconNames.Duck)
        Blue()
    } else {
    	
    }
})
