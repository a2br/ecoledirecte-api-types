import { account } from "../index";
import { studentAccountModule } from "./modules";

export * from "./modules";

export type studentAccount = {
	/** Changes frequently. */
	idLogin: number;

	/** Unique and immutable. May be used to recognize an account. */
	id: number;

	uid: string;

	/** Unique, but may change */
	identifiant: string;

	typeCompte: "E";

	codeOgec: string;

	main: boolean;

	/** Time the request has been made */
	lastConnexion: string;

	civilite: string;

	prenom: string;

	particule: string;

	nom: string;

	/** May be empty */
	email: string;

	anneeScolaireCourante: string;

	nomEtablissement: string;

	logoEtablissement: string;

	couleurAgendaEtablissement: string;

	dicoEnLigneLeRobert: boolean;

	accessToken: string;

	socketToken: string;

	modules: Array<studentAccountModule>;

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
		sexe: string;
		infoEDT: string;
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
		photo: string;
		classe?: {
			id: number;
			code: string;
			libelle: string;
		};
	};
};
export function isStudentAccount(account: account): account is studentAccount {
	return account.typeCompte === "E";
}
