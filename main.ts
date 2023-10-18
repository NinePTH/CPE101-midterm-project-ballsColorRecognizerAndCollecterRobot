function white () {
    iBIT.Servo(ibitServo.SV1, 110)
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 44)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
}
input.onButtonPressed(Button.A, function () {
    Red()
})
function close () {
    iBIT.Servo(ibitServo.SV1, 65)
}
input.onButtonPressed(Button.AB, function () {
    Blue()
})
input.onButtonPressed(Button.B, function () {
    white()
})
function forward () {
	
}
function Blue () {
    iBIT.Servo(ibitServo.SV1, 180)
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 44)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
}
function Red () {
    iBIT.Servo(ibitServo.SV1, 35)
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 44)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
}
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
