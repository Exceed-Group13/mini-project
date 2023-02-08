#include <Arduino.h>
#define THRESHOLD 30

int digitalTouch(int pin)
{
    return touchRead(pin) < THRESHOLD ? 1:0;
}
boolean debounceButton(boolean state,int buttonPin)
{
    boolean stateNow = digitalTouch(buttonPin);
    if (state != stateNow)
    {
        // vTaskDelay(10/portTICK_PERIOD_MS);
        delay(10);
        stateNow = digitalTouch(buttonPin);
    }
    return stateNow;
}

boolean tRead(int pin)
{
    static boolean buttonState = 0;
    if (debounceButton(buttonState,pin) == HIGH && buttonState == LOW)
    {
        buttonState = HIGH;
        return 1;
    }
    else if (debounceButton(buttonState,pin) == LOW && buttonState == HIGH)
    {
        buttonState = LOW;
    }
    return 0;
}

boolean tRead2(int pin)
{
    static boolean buttonState = 0;
    if (debounceButton(buttonState,pin) == HIGH && buttonState == LOW)
    {
        buttonState = HIGH;
        return 1;
    }
    else if (debounceButton(buttonState,pin) == LOW && buttonState == HIGH)
    {
        buttonState = LOW;
    }
    return 0;
}

boolean tRead3(int pin)
{
    static boolean buttonState = 0;
    if (debounceButton(buttonState,pin) == HIGH && buttonState == LOW)
    {
        buttonState = HIGH;
        return 1;
    }
    else if (debounceButton(buttonState,pin) == LOW && buttonState == HIGH)
    {
        buttonState = LOW;
    }
    return 0;
}