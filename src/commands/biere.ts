import type { Message } from "discord.js";

export async function servirBiere(message: Message): Promise<void> {

    const pseudo = message.member?.displayName || message.author.username;

    const repliques: string[] = [
    `🍺 TIENS, TA BIÈRE ${pseudo.toUpperCase()} ! Et essaie de pas t'étouffer avec, sac à viande !`,

    "🍺 PAR LES CROCS DE THRALL ! Encore toi ?! T'as un tonneau à la place du foie ?!",

    "🍺 GRUMLOK SERT UNE PINTE ! C'est trois pièces d'or. QUOI ?! Tu croyais que c'était gratuit ?!",

    "🍺 Une bière pour le mercenaire ! Et qu'personne parle de la mousse verte... C'EST NORMAL !",

    "🍺 BOIS ÇA, GROS TAS ! Ça fera peut-être pousser des muscles à ton cerveau !",

    "🍺 Et fais gaffe à pas la renverser espèce de phacochère! LOK'TAR !",
    
    `🍺 Tiens, bois ça ${pseudo.toUpperCase()} ! C'est assez fort pour faire pousser des poils à un Elfe. Enfin... paraît-il.`,

    "🍺 Ma bière est tellement bonne qu'un Elfe en a bu une fois. Il a immédiatement développé une personnalité.",

    "🍺 J'ai brassé ça avec de l'orge, de l'eau et mes pieds. T'inquiète, j'ai lavé l'orge.",

    `🍺 Attention ${pseudo.toUpperCase()}, cette bière peut rendre intelligent. Enfin, sauf si t'es un Elfe, faut pas demander l'impossible.`,

    `🍺 Une bière pour toi ${pseudo.toUpperCase()} ! Et si tu vois un Elfe, crache dedans avant de lui offrir.`,

    "🍺 C'est de la vraie bière orque ! Pas du jus de pétales pour danseuses de Lune-d'Argent !"
    ];

    const index = Math.floor(Math.random()* repliques.length);
    
    await message.reply(repliques[index]);
}