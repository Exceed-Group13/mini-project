#include <Arduino.h>
#include <ArduinoJson.h>
#include <HTTPClient.h>
#include <WiFi.h>

// declare variable
const char *ssid = "POCOPHONE";
const char *password = "a1b2c3d4";
const String baseUrl =
    "https://ecourse.cpe.ku.ac.th/exceed13"; // changed url to my group
String result, mode1, mode2, mode3;
JsonArray result_array;
bool state1, state2, state3;
int room1, room2, room3, light1, light2, light3;

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

void GET_value() {
  DynamicJsonDocument doc(4096);
  HTTPClient http;
  const String url = baseUrl;
  http.begin(url);

  int httpResponseCode = http.GET();
  if (httpResponseCode == 200) {
    String payload = http.getString();
    Serial.println(payload);
    deserializeJson(doc, payload);

    result_array = doc["result"].as<JsonArray>();
    // for room1
    state1 = result_array[0]["state"].as<bool>();
    room1 = result_array[0]["room"].as<int>();
    mode1 = result_array[0]["mode"].as<String>();
    light1 = result_array[0]["light"].as<int>();

    // for room2
    state2 = result_array[0]["state"].as<bool>();
    room2 = result_array[0]["room"].as<int>();
    mode2 = result_array[0]["mode"].as<String>();
    light2 = result_array[0]["light"].as<int>();

    // for room3
    state3 = result_array[0]["state"].as<bool>();
    room3 = result_array[0]["room"].as<int>();
    mode3 = result_array[0]["mode"].as<String>();
    light3 = result_array[0]["light"].as<int>();

  } else {
    Serial.print("Error ");
    Serial.println(httpResponseCode);
  }
  Serial.println("----------------------------------");
}