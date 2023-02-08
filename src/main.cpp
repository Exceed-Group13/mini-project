#include <Arduino.h>
#include "data.h"
#include "touch.h"

#define RED 26
#define YELLOW 25
#define GREEN 33
#define LDR 32
int state = 0;
void GET_value();
//void POST_value();
void light01(void *param);
void light02(void* param);
void light03(void* param);
void get_data(void* param);
// int digitalTouch(int pin);
// boolean tRead(int pin);
// boolean tRead2(int pin);
// boolean debounceButton(boolean state,int buttonPin);

void Connect_Wifi();
void setup() {
  Serial.begin(115200);
  //ledcSetup(0, 5000, 8);
  //ledcAttachPin(GREEN, 0);
  //ledcWrite(0,255);
  //pinMode(GREEN,OUTPUT);
  //digitalWrite(GREEN,1);
  //ledcSetup(1, 5000, 8);
  //ledcAttachPin(YELLOW, 1);
  //ledcSetup(2, 5000, 8);
  //ledcAttachPin(RED, 2);
  pinMode(5,OUTPUT);
  digitalWrite(5,0);
  pinMode(GREEN,OUTPUT);
  digitalWrite(GREEN,0);
  pinMode(YELLOW,OUTPUT);
  digitalWrite(YELLOW,0);
  pinMode(RED,OUTPUT);
  digitalWrite(RED,0);
  //ledcWrite(0,255);
  Connect_Wifi();
  //xTaskCreatePinnedToCore(light01, "light1", 1024, NULL, 1, NULL, 1);
  //xTaskCreatePinnedToCore(light02, "light2", 1024, NULL, 1, NULL, 1);
  //xTaskCreatePinnedToCore(light03, "light3", 1024, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(get_data, "get_data", 20480, NULL, 1, NULL, 0);
}

void loop() {
  //Serial.println(touchRead(13));
  //delay(100); 
}
void get_data(void* param)
{
  GET_value();

}
void light01(void* param)
{
  while(true)
  {
    if(mode1 == "manual")
    {
      if(tRead(13))
      {
        Serial.println("HI");
        if(state){
           digitalWrite(GREEN,1);
           state = !state;
        }
        else {
          digitalWrite(GREEN,0);
          state = !state;
        }
      }
      if(state1 == 0)
      {
        digitalWrite(GREEN,1);
      }
      else
      {
        digitalWrite(GREEN,0);
      }
    }
    else
    {
      if(analogRead(LDR) < 4095)
      {
        digitalWrite(GREEN,1);
      }
      else
      {
        digitalWrite(GREEN,0);
      }
    } 
  }
}
int state02 = 0;
void light02(void* param)
{
  while(true)
  {
    if(mode2 == "manual")
    {
      if(tRead2(15))
      {
        if(state02){
           digitalWrite(YELLOW,1);
           state02 = !state02;
        }
        else {
          digitalWrite(YELLOW,0);
           state02 = !state02;
        }
      }
      if(state2 == 0)
      {
        digitalWrite(YELLOW,1);
      }
      else
      {
        digitalWrite(YELLOW,0);
      }
    }
    else
    {
      if(analogRead(LDR) < 4095)
      {
        digitalWrite(YELLOW,1);
      }
      else
      {
        digitalWrite(YELLOW,0);
      }
    }
  }
}
int state03 = 0;
void light03(void* param)
{
  while(true)
  {
    if(mode3 == "manual")
    {
      if(tRead3(12))
      {
        if(state03){
           digitalWrite(RED,1);
           state03 = !state03;
        }
        else {
          digitalWrite(RED,0);
           state03 = !state03;
        }
      }
      if(state3 == 0)
      {
        digitalWrite(RED,1);
      }
      else
      {
        digitalWrite(RED,0);
      }
    }
    else
    {
      if(analogRead(LDR) < 4095)
      {
        digitalWrite(RED,1);
      }
      else
      {
        digitalWrite(RED,0);
      }
    }
  }
}

