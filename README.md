# Exampe Notifee X FCM

just copy your google-service.json to android/app

## Example CURL post FCM

```curl
curl --location 'https://fcm.googleapis.com/fcm/send' \

--header 'Authorization: key={{Cloud_Messaging_API_key}}' \

--header 'Content-Type: application/json' \

--data  '{

"to": "{{fcm_token_device}}",

"priority":10,

"data":{

"message":"hello world",

"screen":"1",

"title":"hello world"

}

}'
```
