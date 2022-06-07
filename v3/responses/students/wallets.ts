import { failureRes } from "../failure";

export type walletsRes = walletsResSuccess | failureRes;

export type walletsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: walletsResData;
};

export type walletsResData = {
	comptes: compte[];
};

export type typeCompte = "portemonnaie" | "pmactivite";

export type compte = {
	id: number;
	idEleve: number;
	typeCompte: typeCompte;
	disponible: boolean;
	montantVersement: number;
	montantModifiable: boolean;
	quantiteModifiable: boolean;
	codeCompte: string;
	idServiceClasse: number;
	libelle: string;
	libelleCompte: string;
	solde: number;
	avenir: unknown[];
	ecritures: ecriture[];
};

export type ecriture = {
	/**
	 * YYYY-MM-DD
	 */
	date: string;
	libelle: string;
	lettrage: string;
	infoComp: string;
	montant: number;
	ecritures?: ecriture[];
};
