#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Bounce2.h>

const char *ssid = "dani";
const char *password = "212224236248";
const String baseUrl = "https://exceed-hardware-stamp465.koyeb.app/all_traffic"; // change url
const String result,mode1,mode2,mode3;
JsonArray result_array;
bool state1,state2,state3;
int room1,room2,room3,light1,light2,light3;

void Connect_Wifi() {
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WiFi");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.print("OK! IP=");
    Serial.println(WiFi.localIP());
}


void GET_value()
{
    DynamicJsonDocument doc(65536);
    HTTPClient http;
    const String url = baseUrl;
    http.begin(url);

    int httpResponseCode = http.GET();
    if (httpResponseCode == 200){
        String payload = http.getString();
        Serial.println(payload);
        deserializeJson(doc, payload);

        // waiting for url, it's not all traffic
        result_array = doc["all_traffic"].as<JsonArray>();
        // for room1 
        state1 = result_array[0]["state"].as<bool>();
        room1 = result_array[0]["room"].as<int>();
        mode1 = result_array[0]["mode"].as<String>();
        light1 = result_array[0]["light"].as<int>();
        Serial.println(result_array[0]["state"].as<bool>());
        Serial.println(result_array[0]["room"].as<int>());
        Serial.println(result_array[0]["mode"].as<String>());
        Serial.println(result_array[0]["light"].as<int>());
        // for room2
        state2 = result_array[0]["state"].as<bool>();
        room2 = result_array[0]["room"].as<int>();
        mode2 = result_array[0]["mode"].as<String>();
        light2 = result_array[0]["light"].as<int>();
        Serial.println(result_array[1]["state"].as<bool>());
        Serial.println(result_array[1]["room"].as<int>());
        Serial.println(result_array[1]["mode"].as<String>());
        Serial.println(result_array[1]["light"].as<int>());
        // for room3
        state3 = result_array[0]["state"].as<bool>();
        room3 = result_array[0]["room"].as<int>();
        mode3 = result_array[0]["mode"].as<String>();
        light3 = result_array[0]["light"].as<int>();
        Serial.println(result_array[2]["state"].as<bool>());
        Serial.println(result_array[2]["room"].as<int>());
        Serial.println(result_array[2]["mode"].as<String>());
        Serial.println(result_array[2]["light"].as<int>());
    }
    else
  {
    Serial.print("Error ");
    Serial.println(httpResponseCode);
  }
  Serial.println("----------------------------------");
}

// void PUT_value(){
//     String json;
//     DynamicJsonDocument doc(65536);
//     doc["userId"] = 1;
//     doc["title"] = "Exceed AHHHHHH";
//     doc["body"] = "THIS IS BODY";
//     serializeJson(doc,json);

//     const String url = baseUrl + "posts";
//     HTTPClient http;
//     http.begin(url);
//     http.addHeader("Content-Type","application/json");

//     int httpResponseCode = http.POST(json);
//     if (httpResponseCode >= 200 && httpResponseCode < 300) {
//         Serial.print("HTTP ");
//         Serial.println(httpResponseCode);
//     }
//     else {
//         Serial.print("Error code: ");
//         Serial.println(httpResponseCode);
//     }
// }
