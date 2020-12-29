import { failureRes } from "../../responses";

//? WITH DATE

export type textbookDateRes = textbookDateResSuccess | failureRes;

export type textbookDateResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: {
		date: string;
		matieres: Array<textbookDateAssignement>;
	};
};

export type textbookDateAssignement = {
	entityCode: string;
	entityLibelle: string;
	entityType: string;
	matiere: string;
	codeMatiere: string;
	nomProf: string;
	id: number;
	interrogation: boolean;
	blogActif: boolean;
	nbJourMaxRenduDevoir: number;
	aFaire?: {
		idDevoir: number;
		/** BASE64 */
		contenu: string;
		rendreEnLigne: boolean;
		donneLe: string;
		effectue: boolean;
		ressource: string;
		ressourceDocuments: unknown[];
		documents: unknown[];
		elementsProg: unknown[];
		liensManuel: unknown[];
		documentsRendus: unknown[];
		/** The last one */
		contenuDeSeance: {
			/** BASE64 */
			contenu: string;
			documents: unknown[];
		};
	};
	/** The one of the day */
	contenuDeSeance: {
		idDevoir: number;
		/** BASE64 */
		contenu: string;
		documents: Array<unknown>;
		elementsProg: Array<unknown>;
		liensManuel: Array<unknown>;
	};
};

//? WITHOUT DATE

export type textbookRes = textbookResSuccess | failureRes;

export type textbookResSuccess = {
	code: 200;
	token: string;
	host: string;

	/**
	 * UNPREDICTABLE KEYS
	 * @example data["2020-01-14"]: Array<textbookAssignement>
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
};

export type textbookAssignement = {
	matiere: string;
	codeMatiere: string;
	aFaire: boolean;
	idDevoir: number;
	documentsAFaire: boolean;
	donneLe: string;
	effectue: boolean;
	interrogation: boolean;
	rendreEnLigne: boolean;
};
