basic.forever(function () {
    if (maqueen.Ultrasonic() <= 15 && maqueen.Ultrasonic() == 0) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
})
