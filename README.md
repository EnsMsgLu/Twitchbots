
Twitch Bot 

A chat bot that works with simple model created by EnsMsgLu

config.js is processing env for simple and easy

./auth/twitch.js is the oauth authorization code flow 

So Thats have Twitch_id Twitch_secret key and Twitch_channel access link
but we are using dotenv as very important to hide keys

Dotenv as well ;
.env file has PORT name for PORT , TWITCH_ID name for Twitch_id key , TWITCH_OAUTH name for secret key ,
TWITCH_CHANNEL name for Twitch_channel access link

MONGO_USER,PASS,HOST,DBNAME is using for connecting mongo db 

http://localhost:8888

// Use this link for take apply authorization access
http://localhost:8888/auth/twitch?scope=chat:edit+chat:read+whispers:read+channel:moderate+whispers:edit




