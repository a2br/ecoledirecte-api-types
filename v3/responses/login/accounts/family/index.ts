import { accountModule, account } from "..";

export type familyAccount = {
	idLogin: number;
	id: number;
	uid: string;
	identifiant: string;
	typeCompte: "1";
	codeOgec: string;
	main: boolean;
	lastConnexion: string;
	civilite: string;
	prenom: string;
	particule: string;
	nom: string;
	email: string;
	anneeScolaireCourante: string;
	nomEtablissement: string;
	logoEtablissement: string;
	couleurAgendaEtablissement: string;
	accessToken: string;
	socketToken: string;
	modules: Array<accountModule>;
	parametresIndividuels: {
		lsuPoilDansLaMainBorne1: string;
		lsuPoilDansLaMainBorne2: string;
		lsuPoilDansLaMainBorne3: string;
		modeCalculLSU: string;
		isQrcode: boolean;
		modeAccessibiliteVisuelle: boolean;
		typeSaisieNotesDefaut: string;
		nbJoursMaxRenduDevoirCDT: string;
		typeViewCDTDefaut: string;
	};
	profile: {
		email: string;
		telPortable: string;
		telPortableConjoint: string;
		eleves: Array<{
			id: number;
			prenom: string;
			nom: string;
			sexe: string;
			infoEDT: string;
			photo: string;
			nomEtablissement: string;
			/**
			 * @example
			 * "2"
			 */
			idEtablissement: string;
			/**
			 * @example
			 * "2"
			 */
			idReelEtab: string;
			modules: Array<accountModule>;
			classe: {
				id: number;
				code: string;
				libelle: string;
			};
		}>;
	};
};
export function isFamilyAccount(account: account): account is familyAccount {
	return account.typeCompte === "1";
}
