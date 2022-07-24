import { failureRes } from "../failure";

export type studentsRes = studentsResSuccess | failureRes;

export type studentsResSuccess = {
	code: 200;
	token: string;
	host: string;
	data: studentsResData;
};

export type studentsResData = {
	eleves: teacherStudent[];
	entity: teacherClassEntity;
};

export type teacherStudent = {
	/**
	 * @example 2483
	 */
	id: number;
	nom: string;
	/**
	 * @example ""
	 */
	particule: string;
	prenom: string;
	/**
	 * @example "F", "M"
	 */
	sexe: string;
	/**
	 * @example 53
	 */
	classeId: number;
	/**
	 * @example "TROISIEME 2"
	 */
	classeLibelle: string;
	/**
	 * @description The date the student was created.
	 * @example "2018-09-02"
	 */
	dateEntree: string;
	/**
	 * @example ""
	 */
	dateSortie: string;
	/**
	 * @example "24830"
	 */
	numeroBadge: string;
	/**
	 * @example "Demi pensionnaire", "Externe"
	 */
	regime: string;
	/**
	 * @example ""
	 */
	email: string;
	/**
	 * @example "", "07 99 99 99 99"
	 */
	portable: string;
	/**
	 *  @example "//doc1.ecoledirecte.com/PhotoEleves/.../....jpg"
	 */
	photo: string;
	/**
	 * @example 2006-01-01
	 */
	dateNaissance: string;
};

export type teacherClassEntity = {
	id: number;
	code: string;
	libelle: string;
	/**
	 * @example "C"
	 */
	type: string;
	isFlexible: boolean;
};
