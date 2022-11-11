import { failureRes } from "../failure";
import { role } from "../login/accounts";

export type studentDocsRes = studentDocsResSuccess | failureRes;

export type studentDocsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: {
		administratifs: Array<studentDoc>;
		factures: Array<studentDoc>;
		viescolaire: Array<studentDoc>;
		notes: Array<studentDoc>;

		listesPiecesAVerser: {
			listesPieces: unknown[];
			personnes: Array<{
				id: number;
				nom: string;
				prenom: string;
				type: role;
			}>;
			pieces: unknown[];
			televersements: unknown[];
		};
	};
};

export type studentDoc<type = string> = {
	/**
	 * @example 2021-10-30
	 */
	date: string;
	id: number;
	idEleve: number;
	libelle: string;
	signature: unknown;
	signatureDemandee: boolean;
	type: type;
};
