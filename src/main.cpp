#include <Arduino.h>
#include <WiFi.h>
#include <ArduinoJson.h>
#include "mini.h"
//void Connect_Wifi();

void setup() {
    Serial.begin(115200);
    Connect_Wifi();
    GET_value();
}

void loop() {

}