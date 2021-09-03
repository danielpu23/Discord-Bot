// cd Documents -> cd discordjsbot
// run using node ./src/bot.js

require('dotenv').config();

const Discord = require('discord.js');

const intents = new Discord.Intents(32767);

const client = new Discord.Client({intents});

const prefix = "$";

//const client = new Discord.Client({ intents: ["GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('messageCreate', msg => {
    if (msg.author.bot) {
        return;
    }
    if (msg.content.startsWith(prefix)) {
        const [command, ...args] = msg.content.trim()
            .substring(prefix.length).split(/\s+/);
        if (command == 'griefme') {
            if (args.length != 0) {
                msg.channel.send('Incorrect format, use $griefme');
                return;
            }
            msg.author.send(process.env.GRIEFPASTA);
        }
        else if (command == 'ethan') {
            if (args.length != 0) {
                msg.channel.send('Incorrect format, use $ethan');
                return;
            }
            msg.author.send("ethan bad daniel good");
        }
        else if (command === 'ship') {
            if (args.length != 3 || args[1] != '&') {
                msg.channel.send('Incorrect format, use $ship "user1" & "user2" with correct spacing');
                return;
            }
            let user1 = args[0], user2 = args[2];
            var userSum1 = 0, userSum2 = 0;
            for (let i = 0; i < user1.length; i++) {
                userSum1 += user1.charCodeAt(i) * 3;
                while (userSum1 >= 100) {
                    userSum1 -= 100;
                }
            }
            for (let i = 0; i < user2.length; i++) {
                userSum2 += user2.charCodeAt(i) * 3;
                while (userSum2 >= 100) {
                    userSum2 -= 100;
                }
            }
            var sumDiff = Math.abs(userSum1 - userSum2);
            switch (true) {
                case (sumDiff < 5):
                    msg.channel.send('Absolute perfection.');
                    break;
                case (sumDiff < 10):
                    msg.channel.send('Look at you lovebirds.');
                    break;
                case (sumDiff < 15):
                    msg.channel.send('Match made in heaven.');
                    break;
                case (sumDiff < 20):
                    msg.channel.send('You may kiss the bride.');
                    break;
                case (sumDiff < 25):
                    msg.channel.send('This will not do.');
                    break;
                case (sumDiff < 30):
                    msg.channel.send('Lovely.');
                    break;
                case (sumDiff < 35):
                    msg.channel.send('Pretty good.');
                    break;
                case (sumDiff < 40):
                    msg.channel.send("I've seen worse.");
                    break;
                case (sumDiff < 45):
                    msg.channel.send('Maybe.');
                    break;
                case (sumDiff < 50):
                    msg.channel.send("That's a bit of alright.");
                    break;
                case (sumDiff < 55):
                    msg.channel.send("I've seen better.");
                    break;
                case (sumDiff < 60):
                    msg.channel.send('A bit on the low side.');
                    break;
                case (sumDiff < 75):
                    msg.channel.send('Maybe look elsewhere.');
                    break;
                case (sumDiff < 80):
                    msg.channel.send('Nah.');
                    break;
                case (sumDiff < 85):
                    msg.channel.send('Maybe just stay friends.');
                    break;
                case (sumDiff < 90):
                    msg.channel.send('The two of you match like pineapple on pizza.');
                    break;
                case (sumDiff < 95):
                    msg.channel.send('Absolutely not.');
                    break;
                default:
                    msg.channel.send('Do you even know each other?');
                    break;
            }
        }
        else {
            msg.channel.send("I don't understand this command. Have a good day sir.");
        }
    }
    if (msg.content.toLowerCase() === 'test') {
        msg.channel.send('Test Failed');
    }

    if (msg.content.toLowerCase() === 'bad bot') {
        msg.channel.send('no u');
    }

    if (msg.content.toLowerCase() === 'no u') {
        msg.channel.send(msg.content);
    }
    if (msg.content.toLowerCase() === '🗿') {
        msg.channel.send("🗿");
        msg.react("🗿");
    }
    if (msg.content.toLowerCase() === 'kekw') {
        const emoji = client.emojis.cache.get(process.env.KEKW);
        msg.channel.send(`${emoji}`);
    }
    if (msg.content.toLowerCase() === 'tnt') {
        const emoji = client.emojis.cache.get(process.env.TNT);
        msg.channel.send(`${emoji}`); 
    }
    if (msg.content.toLowerCase() === "oh, you're approaching me?") {
        const jotaro = client.emojis.cache.get(process.env.JOTARO);
        msg.channel.send(`${jotaro}`);

        const emoji = client.emojis.cache.get(process.env.DIO);
        msg.channel.send(`${emoji}`);
    }
    
});

client.ws.on('INTERACTION_CREATE', async interaction => {
    console.log('works');
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandName === 'ff') {
        interaction.reply('Good choice');
    }
    console.log(interaction);
});

client.login(process.env.TOKEN);
