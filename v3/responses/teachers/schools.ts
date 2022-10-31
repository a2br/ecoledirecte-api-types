import { failureRes } from "../failure";
import { role } from "../login";

export type schoolsRes = schoolsResSuccess | failureRes;

export type schoolsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: schoolsResData;
};

export type schoolsResData = {
	groupes: teacherGroup[];
	etablissements: teacherSchool[];
};

type teacherGroup = unknown;

export type teacherSchool = {
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @example "COL"
	 */
	code: string;
	/**
	 * @example "Collège Privé X"
	 */
	libelle: string;
	/**
	 * @example "0272971B"
	 */
	rne: string;
	isTypeDevoirObligatoire: boolean;
	isCoefModifiable: boolean;
	isBorneModifiable: boolean;
	/**
	 * @example 0
	 */
	borneMin: number;
	/**
	 * @example 20
	 */
	borneMax: number;
	/**
	 * @example 20
	 */
	moyenneSur: number;
	saisieLettre: boolean;
	niveaux: teacherLevel[];
};

export type teacherLevel = {
	/**
	 * @example 10
	 */
	id: number;
	/**
	 * @example "3"
	 */
	code: string;
	/**
	 * @example "TROISIEME"
	 */
	libelle: string;
	classes: teacherClass[];
};

export type teacherClass = {
	id: number;
	/**
	 * @example "TROISIEME 2"
	 */
	libelle: string;
	/**
	 * @example "3-2"
	 */
	code: string;
	/**
	 * @example 0
	 */
	idGroupe: number;
	isPP: boolean;
	/**
	 * @example "Cycle 4"
	 */
	cycle: string;
	/**
	 * @example 4
	 */
	numeroCycle: number;
	/**
	 * @example 1
	 */
	estNote: number;
	/**
	 * @example 0
	 */
	positionnementLSU: number;
	/**
	 * @example 2
	 */
	degre: number;
	idCycleEtab: number;
	pcpNbPeriode: number;
	pcpMoyAnnuelle: number;
	pcpMoyGenAnnee: number;
	pcpMoyPeriode: number;
	pcpMoyMatiere: number;
	tabPP: {
		nom: string;
		prenom: string;
		id: number;
		type: role;
	}[];
	periodes: teacherClassPeriod[];
	paramsLSU: paramsLSU;
};

export type teacherClassPeriod = {
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @example "A001"
	 */
	codePeriode: string;
	/**
	 * @example 0
	 */
	periode: number;
	/**
	 * @example 0
	 */
	sousPeriode: number;
	/**
	 * @example 1
	 */
	coef: number;
	/**
	 * @example "Trimestre 1"
	 */
	libelle: string;
	/**
	 * @example ""
	 */
	libelleCourt: string;
	/**
	 * @example "cloture", "partiel"
	 */
	etat: string;
	saisieAppreciation: boolean;
	/**
	 * @example "2022-09-01"
	 */
	dateDebut: string;
	/**
	 * @example "2022-09-22"
	 */
	dateFin: string;
	/**
	 * @example "2022-11-28"
	 */
	dateConseil: string;
	/**
	 * @example "17:00"
	 */
	heureConseil: string;
	/**
	 * @example "09"
	 */
	salleConseil: string;
	/**
	 * @description Note: only subjects taught by teacher account are displayed in this array.
	 */
	matieres: teacherClassSubject[];
};

export type teacherClassSubject = {
	/**
	 * @example "3581"
	 */
	id: string;
	/**
	 * @example "EDUCATION MUSICALE"
	 */
	libelle: string;
	/**
	 * @example "EDMUS"
	 */
	libelleCourt: string;
	/**
	 * @example "EDMUS"
	 */
	code: string;
	coef: number;
	/**
	 * @example ""
	 */
	codeSSMatiere: string;
	/**
	 * @example ""
	 */
	codeGestion: string;
	/**
	 * @example 0
	 */
	avecSousMatiere: number;
	/**
	 * @example 1
	 */
	calculSousMatiere: number;
	/**
	 * @example "Toujours"
	 */
	isEditable: string;
	/**
	 * @example ""
	 */
	type: string;
	saisieAppreciationSSMat: boolean;
	avecNotation: boolean;
	evaluationLSUN: boolean;
	/**
	 * @example 0
	 */
	idMatiereCycle: number;
};

export type paramsLSU = {
	/**
	 * @example "#ff0000"
	 */
	couleurEval1: string;
	/**
	 * @example "#ffc000"
	 */
	couleurEval2: string;
	/**
	 * @example "#0070c0"
	 */
	couleurEval3: string;
	/**
	 * @example "#00b050"
	 */
	couleurEval4: string;

	/**
	 * @example "Tm9uIGF0dGVpbnRz"
	 */
	libelleEval1: string;
	/**
	 * @example "UGFydGllbGxlbWVudCBhdHRlaW50cw=="
	 */
	libelleEval2: string;
	/**
	 * @example "QXR0ZWludHM="
	 */
	libelleEval3: string;
	/**
	 * @example string;
	 */
	libelleEval4: "RMOpcGFzc8Opcw==";

	/**
	 * @example ""
	 */
	emojiEval1: string;
	emojiEval2: string;
	emojiEval3: string;
	emojiEval4: string;

	/**
	 * @example 300
	 */
	nombreCaracteresMax: number;
	/**
	 * @example 0
	 */
	saisieLibreActive: number;
	/**
	 * @example 999999999
	 */
	nbElementsProgrammeImprimes: number;
	/**
	 * @example 999999999
	 */
	nbElementsProgrammeImprimesSousMatiere: number;
	/**
	 * @example "Cycle 4"
	 */
	libelleCycle: string;
	/**
	 * @example 4
	 */
	numeroCycle: number;
};
