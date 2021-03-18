import { failureRes } from "..";
import { role } from "../login/accounts";

export type cloudRes = cloudResSuccess | failureRes;

export type cloudResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: Array<cloudResFolder>;
};

export type cloudResFolder = {
	type: "folder";
	libelle: string;
	date: string;
	taille: number;
	quota: number;
	id: string;
	isLoaded: boolean;
	children: Array<cloudResFolder | cloudResFile>;
};

export type cloudResFile = {
	type: "file";
	libelle: string;
	date: string;
	taille: number;
	id: string;
	proprietaire: {
		id: number;
		type: role;
		nom: string;
		prenom: string;
		particule: string;
	};
};
