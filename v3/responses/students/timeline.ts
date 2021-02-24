import { failureRes } from "../failure";
import { role } from "../login/accounts";

export type studTlRes = studTlResSuccess | failureRes;

export type studTlResSuccess = {
	code: 200;
	token: string;
	host: string;
	data?: Array<studTlElem>;
};

export type studTlElem = {
	/**
	 * YYYY-MM-DD
	 */
	date: string;
	typeElement: "Note" | "Document" | "VieScolaire" | "ReunionPP" | string;
	idElement: number;
	titre: string;
	soustitre: string;
	contenu: string;
};

export type studCommonTlRes = studCommonTlResSuccess | failureRes;

export type studCommonTlResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: {
		evenements: Array<studCommonTlEvent>;
		postits: Array<studCommonTlPostit>;
	};
};

export type studCommonTlEvent = {
	id: number;
	libelle: string;
	/**
	 * BASE64
	 */
	description: string;
	theme: string;
	dateDebut: string;
	heureDebut: string;
	dateFin: string;
	heureFin: string;
	dateFormatee: string;
	cibles: Array<"F" | "E" | "A" | "P">;
	ciblesEtab: Array<number>;
};

export type studCommonTlPostit = {
	id: number;
	/**
	 * As interpreted by ED website
	 * ```
	 * alerte:   "#FFF956"
	 * info:     "#d9edf7"
	 * couleur1: "#ff8000"
	 * couleur2: "#ff0000"
	 * couleur3: "#80cc33"
	 * couleur4: "#1796b0"
	 * couleur5: "#0080ff"
	 * couleur6: "#9999ff"
	 * couleur7: "#ca619f"
	 * couleur8: "#bf00ff"
	 * ```
	 */
	type:
		| "alerte"
		| "info"
		| "couleur1"
		| "couleur2"
		| "couleur3"
		| "couleur4"
		| "couleur5"
		| "couleur6"
		| "couleur7"
		| "couleur8";
	/**
	 * BASE64
	 */
	contenu: string;
	/**
	 * DD/MM/YYYY
	 */
	dateCreation: string;
	/**
	 * DD/MM/YYYY
	 */
	dateDebut: string;
	/**
	 * DD/MM/YYYY
	 */
	dateFin: string;
	cible: Array<"F" | "E" | "A" | "P">;
	ciblesEtab: Array<number>;
	auteur: {
		civilite: string;
		prenom: string;
		particule: string;
		nom: string;
		type: role;
		/**
		 * @example "277"
		 */
		id: string;
	};
};
