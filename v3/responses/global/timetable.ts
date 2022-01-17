import { failureRes } from "../failure";

export type timetableRes = timetableResSuccess | failureRes;

export type timetableResSuccess = {
    code: 200;
    token: string;
    host : string;
    data: timetableResData;
};

export type timetableResData = course[];

export type course = {
    id: number;
    text: string;
    matiere: string;
    codeMatiere: string;
    typeCours: string;
    start_date: string;
    end_date: string;
    color: string;
    dispensable: boolean;
    dispense: number;
    prof: string;
    salle: string;
    classe: string;
    classeId: number;
    classeCode: string;
    groupe: string;
    groupeCode: string;
    isFlexible: boolean;
    groupeId: number;
    icone: string;
    isModifie: boolean;
    contenuDeSeance: boolean;
    devoirAFaire: boolean;
    isAnnule: boolean;
};
