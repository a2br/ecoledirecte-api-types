import { accountModule } from "../";
import { modSitFinanc } from "../";

export type studentAccountModule =
	| modStudBarcode
	| modStudVieScol
	| modStudVDC
	| modStudNotes
	| modStudCloud
	| modStudMessagerie
	| modStudEDT
	| modStudDocs
	| modStudCahierTexte
	| modStudQCM
	| modStudReservations
	| modStudCorrespondance
	| modStudEsidoc
	| modStudEdunao
	| modStudCater
	| modStudArd
	| modStudPearltrees
	| modStudEdumalin
	| modStudStage
	| modStudClickNPlay
	| modStudVoltaire
	| modStudOnisep
	| modStudAvenria
	| modStudSacoche
	| modStudEtudiant
	| modStudIjbox
	| modSitFinanc;

export interface modStudBarcode extends accountModule {
	code: "CANTINE_BARCODE";
}
export interface modStudVieScol extends accountModule {
	code: "VIE_SCOLAIRE";
}
export interface modStudVDC extends accountModule {
	code: "VIE_DE_LA_CLASSE";
}
export interface modStudNotes extends accountModule {
	code: "NOTES";
}
export interface modStudCloud extends accountModule {
	code: "CLOUD";
	params: {
		/**
		 * @example "1"
		 */
		padsActif: string;
	};
}
export interface modStudMessagerie extends accountModule {
	code: "MESSAGERIE";
	params: {
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		isActif: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		canParentsLireMessagesEnfants: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		destAdmin: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		destEleve: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		destFamille: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		destProf: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		destEspTravail: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		disabledNotification: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		notificationEmailEtablissement: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		choixMailNotification: string | "0" | "1";
		autreMailNotification: string;
		mailPro: string;
		mailPerso: string;
		messagerieApiVersion: "v3" | string;
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		blackListProfActive: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		estEnBlackList: string | "0" | "1";
		/**
		 * @fakebool
		 * @description May be `"0"` or `"1"`
		 */
		afficherToutesLesClasses: string | "0" | "1";
	};
}

export interface modStudEDT extends accountModule {
	code: "EDT";
}

export interface modStudDocs extends accountModule {
	code: "DOCUMENTS_ELEVE";
	params: {
		/**
		 * @example "1"
		 */
		DocumentsNotesActif: string;
		/**
		 * @example "1"
		 */
		DocumentsVSActif: string;
		/**
		 * @example "1"
		 */
		DocumentsAdministratifActif: string;
		/**
		 * @example "2016-2017,2017-2018,2018-2019,2019-2020,2020-2021"
		 */
		AnneArchive: string;
	};
}

export interface modStudCahierTexte extends accountModule {
	code: "CAHIER_DE_TEXTES";
	params: {
		/**
		 * @example "1"
		 */
		compteRenduSeance: string;
		/**
		 * @fakebool
		 * @example "0"
		 */
		isCDTPrimaire: string;
	};
}

export interface modStudQCM extends accountModule {
	code: "QCM";
}

export interface modStudReservations extends accountModule {
	code: "RESERVATIONS";
	params: {
		/**
		 * @example "Demi pensionnaire"
		 */
		regime: string;

		repasmidi_1: "0" | "1";
		repassoir_1: "0" | "1";

		repasmidi_2: "0" | "1";
		repassoir_2: "0" | "1";

		repasmidi_3: "0" | "1";
		repassoir_3: "0" | "1";

		repasmidi_4: "0" | "1";
		repassoir_4: "0" | "1";

		repasmidi_5: "0" | "1";
		repassoir_5: "0" | "1";

		repasmidi_6: "0" | "1";
		repassoir_6: "0" | "1";

		repasmidi_7: "0" | "1";
		repassoir_7: "0" | "1";
	};
}

export interface modStudCorrespondance extends accountModule {
	code: "CARNET_CORRESPONDANCE";
}

export interface modStudEsidoc extends accountModule {
	code: "ESIDOC";
	params: {
		tabParams: Array<{
			/**
			 * @example "CDI Coll\u00e8ge et Lyc\u00e8e X"
			 */
			libelle: string;
			/**
			 * @example "https://x.esidoc.fr"
			 */
			url: string;
		}>;
	};
}

export interface modStudEdunao extends accountModule {
	code: "EDUNAO";
}
export interface modStudCater extends accountModule {
	code: "CATER";
}
export interface modStudArd extends accountModule {
	code: "ARD";
}
export interface modStudPearltrees extends accountModule {
	code: "PEARLTREES";
}
export interface modStudEdumalin extends accountModule {
	code: "EDUMALIN";
}
export interface modStudStage extends accountModule {
	code: "SUIVI_STAGE";
}
export interface modStudClickNPlay extends accountModule {
	code: "CLICKNPLAY";
}
export interface modStudVoltaire extends accountModule {
	code: "VOLTAIRE";
}
export interface modStudOnisep extends accountModule {
	code: "ONISEPSERVICES";
}
export interface modStudAvenria extends accountModule {
	code: "AVENRIA";
}
export interface modStudSacoche extends accountModule {
	code: "SACOCHE";
}
export interface modStudEtudiant extends accountModule {
	code: "ETUDIANT";
	params: {
		/**
		 * @example "https://www.letudiant.fr/premium/ecole-directe.html?utm_source=connecteur&utm_medium=lien&utm_campaign=DIG-Ecoledirecte"
		 */
		url: string;
	};
}
export interface modStudIjbox extends accountModule {
	code: "IJBOX";
}
