def white():
    iBIT.servo(ibitServo.SV1, 110)
    basic.pause(200)
    forward()
    iBIT.motor_stop()

def on_button_pressed_a():
    Red()
input.on_button_pressed(Button.A, on_button_pressed_a)

def close():
    iBIT.servo(ibitServo.SV1, 65)

def on_button_pressed_ab():
    Blue()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    close()
input.on_button_pressed(Button.B, on_button_pressed_b)

def forward():
    iBIT.set_motor(ibitMotorCH.M1, ibitMotor.FORWARD, 44)
    iBIT.set_motor(ibitMotorCH.M2, ibitMotor.FORWARD, 50)
def Blue():
    iBIT.servo(ibitServo.SV1, 180)
    basic.pause(200)
    forward()
    iBIT.motor_stop()
def Red():
    global now, start
    now = input.running_time()
    start = now
    iBIT.servo(ibitServo.SV1, 35)
    basic.show_number(start)
    basic.pause(200)
    if now >= start + 5000:
        iBIT.motor_stop()
    else:
        forward()
start = 0
now = 0
basic.show_icon(IconNames.GHOST)

def on_forever():
    pass
basic.forever(on_forever)
