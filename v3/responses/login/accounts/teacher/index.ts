import { accountModule, account } from "..";

export type teacherAccount = {
	idLogin: number;
	id: number;
	uid: string;
	identifiant: string;
	typeCompte: "P";
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
	};
	profile: {
		sexe?: string;
		infoEDT?: string;
		nomEtablissement: string;
		/**
		 * @example
		 * "2"
		 */
		idEtablissement: string;
		photo: string;
		classes?: Array<{
			id: number;
			code: string;
			libelle: string;
			idGroupe: number;
		}>;
	};
};
export function isTeacherAccount(account: account): account is teacherAccount {
	return account.typeCompte === "P";
}
