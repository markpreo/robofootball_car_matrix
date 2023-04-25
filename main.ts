radio.onReceivedString(function (receivedString) {
    if (receivedString == "hello") {
        basic.showString("Hello!")
    }
    if (receivedString == "right") {
        Matrix.motor(M_PORT.M1, 0)
        Matrix.motor(M_PORT.M2, 30)
    }
    if (receivedString == "left") {
        Matrix.motor(M_PORT.M1, 30)
        Matrix.motor(M_PORT.M2, 0)
    }
    if (receivedString == "forward") {
        Matrix.motor(M_PORT.M1, 50)
        Matrix.motor(M_PORT.M2, 50)
    }
    if (receivedString == "back") {
        Matrix.motor(M_PORT.M1, -50)
        Matrix.motor(M_PORT.M2, -50)
    }
    if (receivedString == "stop") {
        Matrix.motor(M_PORT.M1, 0)
        Matrix.motor(M_PORT.M2, 0)
    }
})
radio.setGroup(1)
