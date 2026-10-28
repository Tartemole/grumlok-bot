import type { Message } from "discord.js";

export async function unElfe(message: Message): Promise<void> {

    const repliques: string[] = [
        "PAR LES COUILLES DE MANNOROTH ! Qui a laissé entrer une salade avec des oreilles ?!",

        "Tiens, un Elfe ! J'croyais qu'on avait dératisé la taverne.",

        "Eh, les gars ! Planquez vos femmes et vos miroirs, y'a un Elfe qui débarque !",

        "T'as vu la taille de ses oreilles ? Avec ça, il doit entendre pousser les navets",

        "J'sers pas les Elfes. La dernière fois, y'en a un qui m'a demandé si ma bière était bio. BIO !",

        "Oh non... Encore un bouffeur de fleurs qui va m'expliquer comment brasser ma bière.",

        "Un Elfe dans ma taverne ? C'est comme un pet dans une armure : personne en veut, mais tout le monde le sent.",

       "Les Elfes vivent mille ans et trouvent quand même le moyen d'être cons tout du long.",

        "J'ai connu des cadavres plus chaleureux qu'un Elfe. Et moins parfumés.",

        "Un Elfe, c'est un Troll qui a raté sa croissance et réussi son brushing.",

        "J'ai demandé à un Elfe de couper du bois. Il s'est excusé auprès de l'arbre.",

        "Tu sais pourquoi les Elfes ont de grandes oreilles ? Pour mieux entendre à quel point on les déteste !",

        "Les Elfes appellent ça de la magie ancestrale. Moi j'appelle ça agiter les bras comme des cons.",

        "Un Elfe m'a défié en duel. Il a passé vingt minutes à choisir la couleur de sa cape. ",

        "On m'a dit que les Elfes étaient raffinés. J'en ai goûté un. J'ai préféré ma pisse.",

        "J'ai accroché des oreilles d'Elfe au-dessus du comptoir. Ça éloigne les moustiques et les bardes",

        "Dix mille ans d'existence pour finir à poil dans les arbres. Belle civilisation !",

        "Ici on sert de la bière, pas du parfum !",
    ];

    const index = Math.floor(Math.random() * repliques.length);

    await message.reply(repliques[index]);
    
}