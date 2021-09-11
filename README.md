A discord bot used in a specific server that can react to what the user says, including commands and emotes, and give roles
Some of these commands/features won't run on another server without configuration

#Instructions
1. Have a Javascript environment to run (terminal and Visual Studios recommended)
2. Create a .env file to store various environment variables that will be used later
3. Create and add a bot to a Discord server you have admin priveleges in. Read https://www.businessinsider.com/how-to-add-a-bot-to-discord for instructions to do so
4. Get your bot token and in the .env file write TOKEN = 'your token'
5. In the message create method, some of the emotes come from a specific server. To add yours to replace them, make environment variables and set them to the emoji code
   This can be done by putting a backslash in front of an emote.
6. For the roles, you must find the code for the role as well and create an environment variable to store them.

