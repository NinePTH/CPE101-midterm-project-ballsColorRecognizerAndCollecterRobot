input.onButtonPressed(Button.A, function () {
    iBIT.MotorStop()
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Yes)
        iBIT.MotorStop()
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Happy)
        iBIT.MotorStop()
    } else {
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 10)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 10)
    }
})
