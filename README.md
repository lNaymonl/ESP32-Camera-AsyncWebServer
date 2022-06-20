# ESP32-Camera AsyncWebServer

## Includes

> Als erstes müssen folgende Bibliotheken installiert werden:

> - **[AsyncTCP.h](https://github.com/me-no-dev/AsyncTCP)**
> - **[ESPAsyncWebServer.h](https://github.com/me-no-dev/ESPAsyncWebServer)**<br><br>
> - **WiFi.h**

> Die Bibliotheken vor dem Absatz müssen von der dort angegebenen Website heruntergeladen werden

<br>

## Fileupload auf den ESP32

> Ich verwende hier SPIFFS um Dateien auf den ESP32 zu laden.
> Um Dateien zu laden, gehe zu:
> ArduinoIDE &rarr; Werkzeuge &rarr; ESP32 Sketch Data Upload

<br>

## WiFi Daten ändern

> Die beiden folgenden Variablen, in Zeile 28/29, müssen angepasst werden:

```c++
const char *ssid = "NETWORK_NAME";
const char *password = "NETWORK_PASSWORD";
```
> Zudem sind evtl. noch änderungen an den Pin definitionen nötig, Zeile 11-26.

<br>

## Upload

> Nun muss der Code nur noch compiled und hochgeladen werden.
