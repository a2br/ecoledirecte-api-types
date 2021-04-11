import { failureRes } from "../failure";

export type gradesRes = gradesResSuccess | failureRes;

export type gradesResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: gradesResData;
	/**
	 * UNPREDICTABLE KEYS
	 * @example LSUN["A001"]: Array<{ ... }>
	 */
	LSUN?: Record<
		string,
		Array<{
			cdt: boolean;
			codeMatiere: string;
			libelleMatiere: string;
			isFirstOfMatiere: boolean;
			nbElemProgMatiere: number;
			codeSousMatiere: string;
			libelleSousMatiere: string;
			isFirstOfSousMatiere: boolean;
			nbElemProfSousMatiere: number;
			libelleElementProgramme: string;
			idElemProg: number;
			/**
			 * @example "4"
			 */
			valeur: string;
			professeurs: Array<teacher>;
		}>
	>;
};

export type gradesResData = {
	periodes: Array<period>;
	notes: Array<grade>;
	parametrage: {
		couleurEval1: string;
		couleurEval2: string;
		couleurEval3: string;
		couleurEval4: string;
		libelleEval1: string;
		libelleEval2: string;
		libelleEval3: string;
		libelleEval4: string;
		affichageMoyenne: boolean;
		affichagePositionMatiere: boolean;
		affichageNote: boolean;
		affichageCompetence: boolean;
		affichageEvaluationsComposantes: boolean;
		affichageAppreciation: boolean;
		coefficientNote: boolean;
		colonneCoefficientMatiere: boolean;
		noteGrasSousMoyenne: boolean;
		noteGrasAudessusMoyenne: boolean;
		libelleDevoir: boolean;
		dateDevoir: boolean;
		typeDevoir: boolean;
		noteUniquementPeriodeCloture: boolean;
		notePeriodeReleve: boolean;
		notePeriodeAnnuelle: boolean;
		notePeriodeHorsP: boolean;
		libellesAppreciations: Array<string>;
		appreciationsParametrage: Array<{
			code: string;
			id: number;
			nbMaxCaractere: number;
			libelle: string;
		}>;
	};
};

type teacher = {
	id: number;
	nom: string;
};

export type period = {
	idPeriode: string;
	periode: string;
	annuel: boolean;
	/**
	 * YYYY-MM-DD
	 */
	dateDebut: string;
	/**
	 * YYYY-MM-DD
	 */
	dateFin: string;
	examenBlanc: boolean;
	cloture: boolean;
	/**
	 * YYYY-MM-DD
	 */
	dateConseil?: string;
	/**
	 * HH:mm
	 */
	heureConseil?: string;
	heureFinConseil?: string;
	salleConseil?: string;
	moyNbreJoursApresConseil: number;
	ensembleMatieres: {
		/**
		 * @example "" "2020-10-29 18:00"
		 */
		dateCalcul: string;
		/**
		 * @example "15,89"
		 */
		moyenneGenerale?: string;
		/**
		 * @example "15,89"
		 */
		moyenneClasse?: string;
		/**
		 * @example "9,89"
		 */
		moyenneMin?: string;
		/**
		 * @example "15,89"
		 */
		moyenneMax?: string;
		nomPP: string;
		appreciationPP?: string;
		nomCE: string;
		appreciationCE?: string;
		appreciationVS?: string;
		decisionDuConseil: string;
		/**
		 * @example "1"
		 */
		rang?: string;
		/**
		 * @example "19"
		 */
		effectif?: string;
		appreciationGeneraleClasse?: string;
		disciplines: Array<subject>;
		disciplinesSimulation: Array<unknown>;
	};
};

export type subject = {
	id: number;
	codeMatiere: string;
	codeSousMatiere: string;
	discipline: string;
	/**
	 * @example "15,89"
	 */
	moyenne?: string;
	moyenneClasse?: string;
	moyenneMin?: string;
	moyenneMax?: string;
	position?: string;
	coef: number;
	effectif: number;
	rang: number;
	groupeMatiere: boolean;
	idGroupeMatiere: number;
	option: number;
	sousMatiere: boolean;
	saisieAppreciationSSMat: boolean;
	/**
	 * BASE64
	 */
	appreciationClasse?: string;
	professeurs: Array<teacher>;
	/**
	 * BASE64
	 */
	appreciations?: Array<string>;
};

export type grade = {
	devoir: string;
	codePeriode: string;
	codeMatiere: string;
	libelleMatiere: string;
	codeSousMatiere: string;
	typeDevoir: "" | "Devoir Maison" | "Devoir sur table" | string;
	enLettre: boolean;
	/**
	 * @example "0.5"
	 */
	coef: string;
	/**
	 * PROBABLY WITH , floats
	 * @example "5"
	 */
	noteSur: string;
	/**
	 * User-defined. `"Disp" !== "Disp "`
	 * @example "4,5" "Disp" "Abs"
	 */
	valeur: string;
	nonSignificatif: boolean;
	/**
	 * YYYY-MM-DD
	 */
	date: string;
	/**
	 * YYYY-MM-DD
	 */
	dateSaisie: string;
	valeurisee: boolean;
	/**
	 * @example "3.54"
	 */
	moyenneClasse: string;
	/**
	 * @example "1.50"
	 */
	minClasse: string;
	/**
	 * @example "5.00"
	 */
	maxClasse: string;
	elementsProgramme: Array<{
		descriptif: string;
		idElemProg: number;
		/**
		 * @example "3"
		 */
		valeur: string;
		cdt: boolean;
		idCompetence: number;
		libelleCompetence: string;
	}>;
	qcm?: {
		idQCM: number;
		idAssociation: number;
		titre: string;
		/**
		 * YYYY-MM-DD HH-mm-SS
		 */
		debute: string;
	};
};
