input.onButtonPressed(Button.A, function () {
    iBIT.MotorStop()
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 100)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 75)
})
