require("dotenv").config();
const token = process.env.DISCORD_TOKEN
const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	//protectors monsters+help command
	if (message.content === `${prefix}Armodax`) {
		message.channel.send('https://i.imgur.com/mzpWg63.jpg https://i.imgur.com/pmVwb1u.jpg');
	} else if (message.content === `${prefix}Defender X`) {
		message.channel.send('https://i.imgur.com/QhNMLUn.jpg https://i.imgur.com/lIrOQq0.jpg');
	} else if (message.content === `${prefix}General Hondo`) {
		message.channel.send(`https://i.imgur.com/7FwjfE5.jpg https://i.imgur.com/0ESkcvh.jpg`);
	} else if (message.content === `${prefix}Incinerus`) {
		message.channel.send(`https://i.imgur.com/WUKw2F9.png https://i.imgur.com/Pb6eN5U.png`);
	} else if (message.content === `${prefix}King Kondo`) {
		message.channel.send(`https://i.imgur.com/LuQypW8.jpg https://i.imgur.com/8ljhqvf.jpg`);
	}else if (message.content === `${prefix}Krakenoctus`) {
		message.channel.send(`https://i.imgur.com/r3oZIfi.jpg https://i.imgur.com/9pmibhi.jpg`);
	}else if (message.content === `${prefix}Leviathron`) {
		message.channel.send(`https://i.imgur.com/OWlxasK.jpg https://i.imgur.com/ulakRiY.jpg`);
	}else if (message.content === `${prefix}Nova ESR`) {
		message.channel.send(`https://i.imgur.com/wOoDM1w.jpg https://i.imgur.com/9WZyWhg.jpg`);
	}else if (message.content === `${prefix}Pteradax`) {
		message.channel.send(`https://i.imgur.com/cT2BBdV.jpg https://i.imgur.com/RUQcENU.jpg`);
	}else if (message.content === `${prefix}Sergeant Titanica`) {
		message.channel.send(`https://i.imgur.com/JorPbJc.jpg https://i.imgur.com/f3NYTFa.jpg`);
	}else if (message.content === `${prefix}Sky Sentinel`) {
		message.channel.send(`https://i.imgur.com/YiHvk5K.jpg https://i.imgur.com/ImS5ill.jpg`);
	}else if (message.content === `${prefix}help`) {
		message.channel.send(`Hello Ubercorp member ${message.author.username}! To acces my databanks, please type *m{Model Name}* (no brackets). To insure safety of ubecorp data, please leave no space between the *prefix* and the *name*, and be sure to captilize the first letter of *each* word. All acronyms should be all caps and all dashes should be replaced with spaces (mNova ESR, mArmodax, mGUARD Defense Base, mC Type Shinobi).`);
	}else if (message.content === `${prefix}Terra Khan`) {
		message.channel.send(`https://i.imgur.com/sAHStUz.jpg https://i.imgur.com/kFm5jJC.jpg`);
	}else if (message.content === `${prefix}White Dajan`) {
		message.channel.send(`https://i.imgur.com/pjLDDMv.jpg https://i.imgur.com/4OKCPVq.jpg`);
	}else if (message.content === `${prefix}Zor Magna`) {
		message.channel.send(`https://i.imgur.com/Jge2CMk.png https://i.imgur.com/DSWMcvs.png`);
	}else if (message.content === `${prefix}Zor Maxim`) {
		message.channel.send(`https://i.imgur.com/NVvSTLp.jpg https://i.imgur.com/pre9Zz6.jpg`);
	}else if (message.content === `${prefix}Zor Raiden`) {
		message.channel.send(`https://i.imgur.com/ph6XD7H.jpg https://i.imgur.com/YAvwZsy.jpg`);
		//protectors units
	}else if (message.content === `${prefix}Ape Bomber`) {
		message.channel.send(`https://i.imgur.com/jTFIjgd.jpg`);
	}else if (message.content === `${prefix}Ape Bomber Elite`) {
		message.channel.send(`https://i.imgur.com/GgsD7We.jpg`);
	}else if (message.content === `${prefix}Ape Gunner`) {
		message.channel.send(`https://i.imgur.com/OGFqpQk.jpg`);
	}else if (message.content === `${prefix}Ape Gunner Elite`) {
		message.channel.send(`https://i.imgur.com/iGTkqmB.jpg`);
	}else if (message.content === `${prefix}Ape Infiltrator`) {
		message.channel.send(`https://i.imgur.com/k0ZeXSe.jpg`);
	}else if (message.content === `${prefix}Assault Ape`) {
		message.channel.send(`https://i.imgur.com/PFetgh1.jpg`);
	}else if (message.content === `${prefix}Assault Ape Elite`) {
		message.channel.send(`https://i.imgur.com/i2PGslp.jpg`);
	}else if (message.content === `${prefix}Bellower`) {
		message.channel.send(`https://i.imgur.com/8mVa3Yj.jpg`);
	}else if (message.content === `${prefix}Bellower Elite`) {
		message.channel.send(`https://i.imgur.com/imzHSJH.jpg`);
	}else if (message.content === `${prefix}Brontox`) {
		message.channel.send(`https://i.imgur.com/l8SF7ya.jpg`);
	}else if (message.content === `${prefix}C Type Shinobi`) {
		message.channel.send(`https://i.imgur.com/l3xitSt.png`);
	}else if (message.content === `${prefix}C Type Shinobi Elite`) {
		message.channel.send(`https://i.imgur.com/L3u1Smp.png`);
	}else if (message.content === `${prefix}Carnidon`) {
		message.channel.send(`https://i.imgur.com/enWAs45.jpg`);
	}else if (message.content === `${prefix}Carnidon Elite`) {
		message.channel.send(`https://i.imgur.com/CXvMhpu.jpg`);
	}else if (message.content === `${prefix}Command Ape`) {
		message.channel.send(`https://i.imgur.com/ejZxFhj.jpg`);
	}else if (message.content === `${prefix}Exo Armor`) {
		message.channel.send(`https://i.imgur.com/yg2KaF1.jpg`);
	}else if (message.content === `${prefix}Exo Armor Elite`) {
		message.channel.send(`https://i.imgur.com/Ltjd4gH.jpg`);
	}else if (message.content === `${prefix}G Tank`) {
		message.channel.send(`https://i.imgur.com/CefM1bp.jpg`);
	}else if (message.content === `${prefix}G Tank Elite`) {
		message.channel.send(`https://i.imgur.com/m97vRon.jpg`);
	}else if (message.content === `${prefix}Interceptor`) {
		message.channel.send(`https://i.imgur.com/ldyJsNl.jpg`);
	}else if (message.content === `${prefix}Mr Tank`) {
		message.channel.send(`https://i.imgur.com/B6z7Y65.jpg`);
	}else if (message.content === `${prefix}Psi Eel`) {
		message.channel.send(`https://i.imgur.com/4KoebAH.jpg`);
	}else if (message.content === `${prefix}Pteradactix`) {
		message.channel.send(`https://i.imgur.com/SDIgF1c.jpg`);
	}else if (message.content === `${prefix}Raptix`) {
		message.channel.send(`https://i.imgur.com/vlYVzwc.jpg`);
	}else if (message.content === `${prefix}Raptix Elite`) {
		message.channel.send(`https://i.imgur.com/xHpq4TN.jpg`);
	}else if (message.content === `${prefix}Repair Truck`) {
		message.channel.send(`https://i.imgur.com/UVX7QfV.jpg`);
	}else if (message.content === `${prefix}Rocket Ape`) {
		message.channel.send(`https://i.imgur.com/jjMcCzZ.jpg`);
	}else if (message.content === `${prefix}Rocket Chopper`) {
		message.channel.send(`https://i.imgur.com/OG3r3b7.jpg`);
	}else if (message.content === `${prefix}S Type Shinobi`) {
		message.channel.send(`https://i.imgur.com/3pFz7Bt.jpg`);
	}else if (message.content === `${prefix}S Type Shinobi Elite`) {
		message.channel.send(`https://i.imgur.com/lT9FHar.jpg`);
	}else if (message.content === `${prefix}Scavenger Van`) {
		message.channel.send(`https://i.imgur.com/WQYqe6k.jpg`);
	}else if (message.content === `${prefix}Scavenger Van Elite`) {
		message.channel.send(`https://i.imgur.com/vnxfudK.jpg`);
	}else if (message.content === `${prefix}Scrapper`) {
		message.channel.send(`https://i.imgur.com/Orgk7KX.jpg`);
	}else if (message.content === `${prefix}Shadow Gate`) {
		message.channel.send(`https://i.imgur.com/oYdMijF.jpg`);
	}else if (message.content === `${prefix}Shadow Rider`) {
		message.channel.send(`https://i.imgur.com/sWteUkj.png`);
	}else if (message.content === `${prefix}Spikodon`) {
		message.channel.send(`https://i.imgur.com/NOm5bYf.jpg`);
	}else if (message.content === `${prefix}Steel Shell Crab`) {
		message.channel.send(`https://i.imgur.com/5n5ErVk.jpg`);
	}else if (message.content === `${prefix}Steel Shell Crab Elite`) {
		message.channel.send(`https://i.imgur.com/DDkLpPH.jpg`);
	}else if (message.content === `${prefix}Strike Fighter`) {
		message.channel.send(`https://i.imgur.com/Eit3XsB.jpg`);
	}else if (message.content === `${prefix}Strike Fighter Elite`) {
		message.channel.send(`https://i.imgur.com/a3om88x.jpg`);
	}else if (message.content === `${prefix}Sun Fighter`) {
		message.channel.send(`https://i.imgur.com/yRRHdpd.jpg`);
	}else if (message.content === `${prefix}Sun Fighter Elite`) {
		message.channel.send(`https://i.imgur.com/tWzaK4Z.jpg`);
		//destroyers monsters
	}else if (message.content === `${prefix}Ares Mothership`) {
		message.channel.send(`https://i.imgur.com/8RL7mQN.jpg https://i.imgur.com/k7MlB58.jpg`);
	}else if (message.content === `${prefix}Blastikutter`) {
		message.channel.send(`https://i.imgur.com/iKvuMbm.jpg https://i.imgur.com/QBhDF7Z.jpg`);
	}else if (message.content === `${prefix}Cthugrosh`) {
		message.channel.send(`https://i.imgur.com/lXFsi7D.jpg https://i.imgur.com/8SVTPTF.jpg`);
	}else if (message.content === `${prefix}Cyber Khan`) {
		message.channel.send(`https://i.imgur.com/02B9gGd.jpg https://i.imgur.com/FDoD20Z.jpg`);
	}else if (message.content === `${prefix}Deimos 9`) {
		message.channel.send(`https://i.imgur.com/gsaCkzV.jpg https://i.imgur.com/beItJPU.jpg`);
	}else if (message.content === `${prefix}Gallamaxus`) {
		message.channel.send(`https://i.imgur.com/rY48yZG.jpg https://i.imgur.com/RmZ9oIE.jpg`);
	}else if (message.content === `${prefix}Globbicus`) {
		message.channel.send(`https://i.imgur.com/XegVc9i.jpg https://i.imgur.com/i8rZ5VV.jpg`);
	}else if (message.content === `${prefix}Gorghadra`) {
		message.channel.send(`https://i.imgur.com/ry5Jxut.jpg https://i.imgur.com/tg0hsfL.jpg`);
	}else if (message.content === `${prefix}Gorghadratron`) {
		message.channel.send(`https://i.imgur.com/XH32X1i.png https://i.imgur.com/ioJpPFK.png`);
	}else if (message.content === `${prefix}Hammerklak`) {
		message.channel.send(`https://i.imgur.com/aac2gdV.jpg https://i.imgur.com/v9wbyTK.jpg`);
	}else if (message.content === `${prefix}Mecha Maxim`) {
		message.channel.send(`https://i.imgur.com/erZoXTc.png https://i.imgur.com/hlpgDN1.png`);
	}else if (message.content === `${prefix}Rogzor`) {
		message.channel.send(`https://i.imgur.com/PI2zX1q.jpg https://i.imgur.com/0c6DUxg.jpg`);
	}else if (message.content === `${prefix}Tharsis 5`) {
		message.channel.send(`https://i.imgur.com/cbFQQZA.jpg https://i.imgur.com/EQdbzRu.jpg`);
	}else if (message.content === `${prefix}Ulgoth`) {
		message.channel.send(`https://i.imgur.com/XybgZJw.jpg https://i.imgur.com/YALhJGJ.jpg`);
	}else if (message.content === `${prefix}Xaxor`) {
		message.channel.send(`https://i.imgur.com/4r7W2JZ.jpg https://i.imgur.com/DJNukcw.jpg`);
	}else if (message.content === `${prefix}Xixorax`) {
		message.channel.send(`https://i.imgur.com/Dd0qujo.png https://i.imgur.com/vmILd4D.png`);
	}else if (message.content === `${prefix}Yasheth`) {
		message.channel.send(`https://i.imgur.com/AlT654v.jpg https://i.imgur.com/Rin9LWZ.jpg`);
		//destroyers units
	}else if (message.content === `${prefix}Aaapebot`) {
		message.channel.send(`https://i.imgur.com/obxI2js.png`);
	}else if (message.content === `${prefix}Absorber`) {
		message.channel.send(`https://i.imgur.com/jj11ogi.jpg`);
	}else if (message.content === `${prefix}Belcher`) {
		message.channel.send(`https://i.imgur.com/GwPnj33.jpg`);
	}else if (message.content === `${prefix}Belcher Elite`) {
		message.channel.send(`https://i.imgur.com/hwOFh1a.jpg`);
	}else if (message.content === `${prefix}Carnitron`) {
		message.channel.send(`https://i.imgur.com/PBmxYyL.jpg`);
	}else if (message.content === `${prefix}Carnitron Elite`) {
		message.channel.send(`https://i.imgur.com/ZCpydUl.jpg`);
	}else if (message.content === `${prefix}Chomper`) {
		message.channel.send(`https://i.imgur.com/lldV4mI.jpg`);
	}else if (message.content === `${prefix}Chomper Elite`) {
		message.channel.send(`https://i.imgur.com/xzADso3.jpg`);
	}else if (message.content === `${prefix}Crawler`) {
		message.channel.send(`https://i.imgur.com/WN2RGi9.jpg`);
	}else if (message.content === `${prefix}Destructomite`) {
		message.channel.send(`https://i.imgur.com/Bin8CEy.jpg`);
	}else if (message.content === `${prefix}Explodohawk`) {
		message.channel.send(`https://i.imgur.com/wf1uwPr.jpg`);
	}else if (message.content === `${prefix}Exterminatrix`) {
		message.channel.send(`https://i.imgur.com/oVlv9Bg.jpg`);
	}else if (message.content === `${prefix}Harvester`) {
		message.channel.send(`https://i.imgur.com/De55EDB.jpg`);
	}else if (message.content === `${prefix}Hellion`) {
		message.channel.send(`https://i.imgur.com/PAMYRJ4.jpg`);
	}else if (message.content === `${prefix}Hunter`) {
		message.channel.send(`https://i.imgur.com/syNQHPe.jpg`);
	}else if (message.content === `${prefix}Meat Slave`) {
		message.channel.send(`https://i.imgur.com/GhuBUAH.jpg`);
	}else if (message.content === `${prefix}Mollock Berserker`) {
		message.channel.send(`https://i.imgur.com/aEqZCW4.jpg`);
	}else if (message.content === `${prefix}Mollock Brute`) {
		message.channel.send(`https://i.imgur.com/1sI9CMw.jpg`);
	}else if (message.content === `${prefix}Mollock Brute Elite`) {
		message.channel.send(`https://i.imgur.com/NSwwsUw.jpg`);
	}else if (message.content === `${prefix}Power Pod`) {
		message.channel.send(`https://i.imgur.com/rHin8BR.jpg`);
	}else if (message.content === `${prefix}Reaper`) {
		message.channel.send(`https://i.imgur.com/zWHINVn.jpg`);
	}else if (message.content === `${prefix}Reaper Elite`) {
		message.channel.send(`https://i.imgur.com/oZhlYuE.jpg`);
	}else if (message.content === `${prefix}Robo Brontox`) {
		message.channel.send(`https://i.imgur.com/fPv44Dg.jpg`);
	}else if (message.content === `${prefix}Saucer`) {
		message.channel.send(`https://i.imgur.com/RhW677m.jpg`);
	}else if (message.content === `${prefix}Shinobot`) {
		message.channel.send(`https://i.imgur.com/4IgjxzD.jpg`);
	}else if (message.content === `${prefix}Shinobot Elite`) {
		message.channel.send(`https://i.imgur.com/PUbacpn.jpg`);
	}else if (message.content === `${prefix}Shinobot Gunner`) {
		message.channel.send(`https://i.imgur.com/hisF5Mw.jpg`);
	}else if (message.content === `${prefix}Scorcher`) {
		message.channel.send(`https://i.imgur.com/wcRqxCb.jpg`);
	}else if (message.content === `${prefix}Scorcher Elite`) {
		message.channel.send(`https://i.imgur.com/JQ8TlLa.jpg`);
	}else if (message.content === `${prefix}Snatcher`) {
		message.channel.send(`https://i.imgur.com/s4jDWJ4.jpg`);
	}else if (message.content === `${prefix}Snatcher Elite`) {
		message.channel.send(`https://i.imgur.com/rtKJFmV.jpg`);
	}else if (message.content === `${prefix}Spitter`) {
		message.channel.send(`https://i.imgur.com/4OjOv5H.jpg`);
	}else if (message.content === `${prefix}Spitter Elite`) {
		message.channel.send(`https://i.imgur.com/ENvBAin.jpg`);
	}else if (message.content === `${prefix}Squix`) {
		message.channel.send(`https://i.imgur.com/e0vfVML.jpg`);
	}else if (message.content === `${prefix}Squix Elite`) {
		message.channel.send(`https://i.imgur.com/DtgRBEC.jpg`);
	}else if (message.content === `${prefix}Task Master`) {
		message.channel.send(`https://i.imgur.com/O8T5ZrL.jpg`);
	}else if (message.content === `${prefix}Toxxo`) {
		message.channel.send(`https://i.imgur.com/tRLjYEt.jpg`);
	}else if (message.content === `${prefix}Toxxo Elite`) {
		message.channel.send(`https://i.imgur.com/uNufyFH.jpg`);
	}else if (message.content === `${prefix}U Tank`) {
		message.channel.send(`https://i.imgur.com/k6FbD4g.png`);
	}else if (message.content === `${prefix}U Tank Elite`) {
		message.channel.send(`https://i.imgur.com/LQ6uctX.png`);
	}else if (message.content === `${prefix}Uber Jet`) {
		message.channel.send(`https://i.imgur.com/ZC1zUer.jpg`);
	}else if (message.content === `${prefix}Vanguard`) {
		message.channel.send(`https://i.imgur.com/Xub35RP.jpg`);
	}else if (message.content === `${prefix}Vanguard ELite`) {
		message.channel.send(`https://i.imgur.com/AUujEjL.jpg`);
		//buildings
	}else if (message.content === `${prefix}Apartment Building`) {
		message.channel.send(`https://i.imgur.com/ogPTu5U.jpg`);
	}else if (message.content === `${prefix}Communications Array`) {
		message.channel.send(`https://i.imgur.com/ImZU78d.jpg`);
	}else if (message.content === `${prefix}Construction Yard`) {
		message.channel.send(`https://i.imgur.com/5i8SU8I.png`);
	}else if (message.content === `${prefix}Deck Plate`) {
		message.channel.send(`https://i.imgur.com/LrjNg2S.png`);
	}else if (message.content === `${prefix}Defense Turret`) {
		message.channel.send(`https://i.imgur.com/AczRjAp.png`);
	}else if (message.content === `${prefix}Emergency Barricade`) {
		message.channel.send(`https://i.imgur.com/aWwBonz.png`);
	}else if (message.content === `${prefix}Force Field Generator`) {
		message.channel.send(`https://i.imgur.com/FoiSvTy.png`);
	}else if (message.content === `${prefix}Resource Extractor`) {
		message.channel.send(`https://i.imgur.com/oW9W8aC.png`);
	}else if (message.content === `${prefix}Security Bunker`) {
		message.channel.send(`https://i.imgur.com/vo23XFE.png`);
	}else if (message.content === `${prefix}Speed Boost`) {
		message.channel.send(`https://i.imgur.com/tudilQo.png`);
	}else if (message.content === `${prefix}Corporate Headquarters`) {
		message.channel.send(`https://i.imgur.com/Ie7O9ZF.jpg`);
	}else if (message.content === `${prefix}Downtown Highrise`) {
		message.channel.send(`https://i.imgur.com/7DET4rv.jpg`);
	}else if (message.content === `${prefix}GUARD Defense Base`) {
		message.channel.send(`https://i.imgur.com/FqO0txk.jpg`);
	}else if (message.content === `${prefix}Harbinger Comet Shard`) {
		message.channel.send(`https://i.imgur.com/6ay3rLp.jpg`);
	}else if (message.content === `${prefix}Imperial State Building`) {
		message.channel.send(`https://i.imgur.com/ZkXKfKU.jpg`);
	}else if (message.content === `${prefix}Industrial Complex`) {
		message.channel.send(`https://i.imgur.com/7kEWCvC.jpg`);
	}else if (message.content === `${prefix}Jungle Fortress`) {
		message.channel.send(`https://i.imgur.com/rIdmNTJ.jpg`);
	}else if (message.content === `${prefix}Martian Command Post`) {
		message.channel.send(`https://i.imgur.com/p9XXADE.jpg`);
	}else if (message.content === `${prefix}Mount Terra`) {
		message.channel.send(`https://i.imgur.com/cg0QY54.jpg`);
	}else if (message.content === `${prefix}Power Plant`) {
		message.channel.send(`https://i.imgur.com/LuwkW9u.jpg`);
	}else if (message.content === `${prefix}Skyscraper`) {
		message.channel.send(`https://i.imgur.com/ChB2J7g.jpg`);
	}else if (message.content === `${prefix}Statue Of Liberty`) {
		message.channel.send(`https://i.imgur.com/WSUdOn6.jpg`);
	}else if (message.content === `${prefix}Sun Industries Building`) {
		message.channel.send(`https://i.imgur.com/b2aDyNL.jpg`);
	}else if (message.content === `${prefix}The Tokyo Triumph`) {
		message.channel.send(`https://i.imgur.com/C7fHtLD.jpg`);
	}else if (message.content === `${prefix}UCI Industries`) {
		message.channel.send(`https://i.imgur.com/8SJeGG1.jpg`);
	}else if (message.content === `${prefix}Void Gate`) {
		message.channel.send(`https://i.imgur.com/7siNEfx.jpg`);
	}
});

client.login(token);