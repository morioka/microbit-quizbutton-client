radio.onReceivedNumber(function (receivedNumber) {
    受信した子機番号 = receivedNumber % 100
    受信した指示 = Math.idiv(receivedNumber, 100)
    // 自分が指定されていれば、解答権を得た
    if (受信した子機番号 == 子機番号) {
        if (受信した指示 == 1) {
            basic.showIcon(IconNames.Heart)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        } else if (受信した指示 == 2) {
            basic.showIcon(IconNames.Yes)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
        } else if (受信した指示 == 3) {
            basic.showIcon(IconNames.No)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
        } else {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            basic.showNumber(子機番号)
        }
    } else {
        basic.showNumber(子機番号)
    }
})
// 解答ボタンを押した
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(子機番号 + 0)
})
// 子機番号を設定する。
input.onButtonPressed(Button.AB, function () {
    子機番号 += 1
    if (子機番号 == 10) {
        子機番号 = 1
    }
    basic.showNumber(子機番号)
})
let 受信した指示 = 0
let 受信した子機番号 = 0
let 子機番号 = 0
radio.setGroup(1)
radio.setTransmitPower(7)
// 未設定のままでは混乱するので、仮に設定する。衝突を考慮していない。
子機番号 = randint(1, 9)
basic.showNumber(子機番号)
