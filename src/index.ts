
import { Client, Events, GatewayIntentBits } from "discord.js";
import { servirBiere } from "./commands/biere";
import { unElfe } from "./commands/elfe";
import { direBonjour } from "./commands/bonjour";

// Chargement des variables d'environnement 
process.loadEnvFile();

//Récupération du token 
const token = process.env.DISCORD_TOKEN;

if (!token) {
  throw new Error("Le Token Discord est introuvable !");
}

// Création de notre bot Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Événement déclenché lorsque le bot est connecté
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Grumlok est connecté en tant que ${readyClient.user.tag} !`);
  console.log("LOK'TAR OGAR ! La taverne est ouverte !");
});

client.on(Events.MessageCreate, async (message) =>{

  //ignorer les messages envoyés par des bots
  if (message.author.bot) return;

  //vérifier si un joueur demande une bière 
  if (message.content.trim().toLowerCase() === "!bière") {
    await servirBiere(message);
  }

  if (message.content.trim().toLowerCase() === "!elfe") {
    await unElfe(message);
  }

  const contenu = message.content.trim().toLowerCase();
  if (contenu === "!bonjour" || contenu.startsWith("!bonjour ")) {
    await direBonjour(message);
  }
});

client.login(token);
