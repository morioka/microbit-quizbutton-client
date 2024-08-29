radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(子機番号)
    } else {
        // 自分が指定されていれば、解答権を得た
        if (receivedNumber == 子機番号) {
            basic.showIcon(IconNames.Heart)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        }
    }
})
// 解答ボタンを押した
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(子機番号)
})
// 子機番号を設定する。
input.onButtonPressed(Button.B, function () {
    子機番号 += 1
    if (子機番号 == 4) {
        子機番号 = 1
    }
    basic.showNumber(子機番号)
})
let 子機番号 = 0
radio.setGroup(1)
radio.setTransmitPower(7)
// 未設定のままでは混乱するので、仮に設定する。衝突を考慮していない。
子機番号 = randint(1, 3)
basic.showNumber(子機番号)
