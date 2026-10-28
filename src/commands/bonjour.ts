import {Message} from "discord.js";

export async function direBonjour(message: Message): Promise<void> {

const pseudo = message.member?.displayName || message.author.username;

    const repliques: string[] = [
        `AH ! ${pseudo.toUpperCase()} ! Ramène ton gros cul, espèce de vieille couille moisie !`,

        `Tiens, tiens... ${pseudo.toUpperCase()} ! Je te croyais crevé, sale fumier !`,

        `PAR LES COUILLES DE THRALL ! ${pseudo.toUpperCase()} ! Toujours aussi laid, à ce que je vois !`,

        `${pseudo.toUpperCase()} ! Espèce de sac à merde ! Viens boire avant que je change davis !`,

        `AH ! Voilà ${pseudo.toUpperCase()} ! Le seul abruti capable de se perdre dans une taverne !`,

        `${pseudo.toUpperCase()} ! Viens là, vieille charogne ! Jai une bière qui porte ton nom et qui sent aussi mauvais que toi !`,

        `Bordel de merde ! ${pseudo.toUpperCase()} est encore vivant ! Quel gâchis pour les vautours !`,

        `${pseudo.toUpperCase()} ! Assieds-toi, tête de gland ! Et touche pas à ma serveuse !`,

        `AH ! Mon vieux ${pseudo.toUpperCase()} ! Toujours cette gueule de cul mal essuyé !`,

        `! Que les ancêtres me pardonnent, voilà ${pseudo.toUpperCase()}, le plus gros trou du cul de la Horde !`,
        
        `${pseudo.toUpperCase()}?! Qui a laissé entrer cette erreur de la nature ?!`,

        `PUTAIN ! ${pseudo.toUpperCase()} ! Jai déjà vu des cadavres de gnolls plus présentables que toi !`,

        `${pseudo.toUpperCase()} ! Tas une tête à faire débander un ogre !`,

        `Ah, ${pseudo.toUpperCase()} ! Le seul guerrier qui fait peur aux ennemis en retirant son casque !`,

        `${pseudo.toUpperCase()} ! Espèce de résidu de fausse couche de Murloc !`,

        `Nom dun cul de kodo ! ${pseudo.toUpperCase()} ! Tes encore plus moche que dans mes souvenirs !`,

        `${pseudo.toUpperCase()} ! Va te laver, bordel ! Même les sangliers de Durotar ont porté plainte !`,

        `AH ! ${pseudo.toUpperCase()} ! La preuve vivante quon peut survivre sans cerveau !`,

        `${pseudo.toUpperCase()} ! Jpréférerais embrasser un abomination du Fléau plutôt que de sentir ton haleine !`,

        `Eh merde... ${pseudo.toUpperCase()} ! Javais pourtant mis du poison dans ta dernière bière !`,

        `${pseudo.toUpperCase()} ! Eh ben putain, les mauvaises herbes, ça crève vraiment jamais !`,

        `Ah, ${pseudo.toUpperCase()} ! Jétais justement en train de direquil nous manquait un con. Te voilà !`,

        `${pseudo.toUpperCase()} ! Pose ton cul et ferme ta gueule, on commençait à passer une bonne soirée !`,

        `Tiens, ${pseudo.toUpperCase()} ! Tas fini de te gratter les couilles dans les bois ?`,

        `${pseudo.toUpperCase()} ! Si la connerie était une arme, tu serais chef de guerre !`,

        `Ah ben voilà ${pseudo.toUpperCase()} ! Jme disais bien que ça sentait soudainement le vieux slip de Troll !`,

        `${pseudo.toUpperCase()} ! Ça fait plaisir de revoir ta sale tronche. Enfin... plaisir, cest un grand mot. `,

        `${pseudo.toUpperCase()} ! Tu tombes bien, javais besoin dun volontaire pour nettoyer les latrines !`,

        `Tiens, ${pseudo.toUpperCase()} ! Tes venu boire ou nous faire profiter de ton intelligence de caillou ?`,

        `AH ! ${pseudo.toUpperCase()} ! Ça faisait longtemps ! Pas assez, mais longtemps !`,
    ] 

    const index = Math.floor(Math.random() * repliques.length);

    await message.reply(repliques[index]);  
}


