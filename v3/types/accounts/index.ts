import { studentAccount } from "./student";
import { familyAccount } from "./family";
import { teacherAccount } from "./teacher";
import { staffAccount } from "./staff";

export * from "./student";
export * from "./family";
export * from "./teacher";
export * from "./staff";

export type account =
	| studentAccount
	| teacherAccount
	| familyAccount
	| staffAccount;

export type role = "E" | "P" | "A" | "1";

export interface accountModule {
	code: string;
	enable: boolean;
	ordre: number;
	badge: number;
	params: Record<string, unknown>;
}

export interface modSitFinanc extends accountModule {
	code: "SITUATION_FINANCIAIRE";
}
