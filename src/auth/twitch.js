const express = require('express');
const axios = require('axios');
const config = require('../config');
const DwibotModel = require('../db/bot');

const { response } = require('express');

const router = express.Router();

const redirect_uri = `${config.TWITCH_CHANNEL}/auth/twitch/callback`;
const authbaseurl = 'https://id.twitch.tv/oauth2';
const authAPI = axios.create({
    baseURL: authbaseurl,
  });




router.get('/', (req, res) => {
    const qs = new URLSearchParams({
        client_id: config.TWITCH_ID,
        redirect_uri,
        response_type: 'code',
        scope: req.query.scope    
    });
    const redirectURL = `${authbaseurl}/authorize?${qs}`;
    res.redirect(redirectURL);
});
router.get('/callback', async (req, res) => {
    const { code , /* state */ } = req.query;
    const qs = new URLSearchParams({
        client_id: config.TWITCH_ID,
        client_secret: config.TWITCH_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri
    });
    try {
        const response2 = await authAPI.post(`/token?${qs}`);
        const refresh_token = response2.data.refresh_token;
        const DwiBot = await DwibotModel.collection.find({ name: 'bots' });
        if(!DwiBot){
            await DwibotModel.create({ 
            name: 'bots',
            refresh_token: refresh_token
            });
        }
        else{
            DwiBot.refresh_token = refresh_token
            await Dwibot.save();
        };
        
            console.log('bot', DwiBot);
			console.log(response2.data.scope);
            console.log(refresh_token);
      res.json({
        message: 'Everythings okay',
        });        
    } catch (error) {
      res.json({
            message: error.message,
            //body: error.response ? error.response.data : error,
        });
    }
});
module.exports = router;