def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_number(子機番号)
    else:
        # 自分が指定されていれば、解答権を得た
        if receivedNumber == 子機番号:
            basic.show_icon(IconNames.HEART)
            music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
                music.PlaybackMode.UNTIL_DONE)
radio.on_received_number(on_received_number)

# 解答ボタンを押した

def on_button_pressed_a():
    radio.send_number(子機番号)
input.on_button_pressed(Button.A, on_button_pressed_a)

# 子機番号を設定する。

def on_button_pressed_b():
    global 子機番号
    子機番号 += 1
    if 子機番号 == 4:
        子機番号 = 1
    basic.show_number(子機番号)
input.on_button_pressed(Button.B, on_button_pressed_b)

子機番号 = 0
radio.set_group(1)
radio.set_transmit_power(7)
# 未設定のままでは混乱するので、仮に設定する。衝突を考慮していない。
子機番号 = randint(1, 3)
basic.show_number(子機番号)