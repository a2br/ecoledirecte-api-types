import Util from "../util/Util";
import { role } from ".";

type Solid<T> = {
	[P in keyof T]-?: T[P];
};

export const root = "https://api.ecoledirecte.com";

export const Routes = {
	//! LOGIN

	/**
	 * Route for:
	 * - POST /v3/login.awp
	 */
	login(): string {
		return "/v3/login.awp";
	},

	//! STUDENT
	/**
	 * Route for:
	 * - POST /v3/login.awp
	 */
	studentMailbox<
		tempParams extends {
			verbe?: "getall";
			typeRecuperation?: "received" | "sent";
			orderBy?: "date";
			order?: "desc";
			page?: number;
			itemsPerPage?: number;
			onlyRead?: "" | unknown;
			query?: "" | unknown;
			idClasseur?: number;
		}
	>(studentId: number, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "getall",
			typeRecuperation: "received",
			orderBy: "date",
			order: "desc",
			page: 0,
			itemsPerPage: 0,
			onlyRead: "",
			query: "",
			idClasseur: 0,
		} as solid;

		const nParams: solid = Util.mergeDefault(defaultParams, params);
		return Util.mergeParams(`/v3/eleves/${studentId}/messages.awp`, nParams);
	},

	/**
	 * Route for:
	 * - POST /v3/eleves/{studentId}/messages/{messageId}.awp
	 */
	studentMessage<
		tempParams extends {
			verbe?: "get";
			mode: "destinataire" | "expediteur" | "";
		}
	>(studentId: number, messageId: number, params: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
			mode: "",
		} as solid;
		const nParams: solid = Util.mergeDefault(defaultParams, params);
		return Util.mergeParams(
			`/v3/eleves/${studentId}/messages/${messageId}.awp`,
			nParams
		);
	},

	/**
	 * Route for:
	 * - POST /v3/eleves/{studentId}/cahierdetexte.awp
	 */
	studentHomework<
		tempParams extends {
			verbe?: "get" | "put";
		}
	>(studentId: number, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
		} as solid;
		const nParams: solid = Util.mergeDefault(defaultParams, params);

		return Util.mergeParams(
			`/v3/Eleves/${studentId}/cahierdetexte.awp`,
			nParams
		);
	},

	/**
	 * Route for:
	 * - POST /v3/eleves/{studentId}/cahierdetexte/{date}.awp
	 * @param date Must be of type YYYY-MM-DD
	 */
	studentHomeworkDate<
		tempParams extends {
			verbe?: "get";
		}
	>(studentId: number, date: string, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
		} as solid;
		const nParams: solid = Util.mergeDefault(defaultParams, params);

		return Util.mergeParams(
			`/v3/Eleves/${studentId}/cahierdetexte/${date}.awp`,
			nParams
		);
	},

	/**
	 * Route for:
	 * - POST /v3/eleves/{studentId}/notes.awp
	 */
	studentGrades(studentId: number): string {
		const params = {
			verbe: "get",
		};

		return Util.mergeParams(`/v3/eleves/${studentId}/notes.awp`, params);
	},

	/**
	 * Route for:
	 * - POST /v3/eleves/{studentId}/timeline.awp
	 */
	studentTimeline<
		tempParams extends {
			verbe?: "get";
		}
	>(studentId: number, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
		};
		const nParams: solid = Util.mergeDefault(defaultParams, params);
		return Util.mergeParams(`/v3/eleves/${studentId}/timeline.awp`, nParams);
	},

	/**
	 * Route for:
	 * - POST /v3/{accountType}/{accountId}/timelineAccueilCommun.awp
	 */
	commonTimeline<
		tempParams extends {
			verbe?: "get";
		}
	>(accountType: "E", accountId: number, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
		};
		const nParams: solid = Util.mergeDefault(defaultParams, params);
		return Util.mergeParams(
			`/v3/${accountType}/${accountId}/timelineAccueilCommun.awp`,
			nParams
		);
	},

	/**
	 * Route for:
	 * - POST /v3/cloud/{accountType}/{accountId}.awp
	 */
	cloudFolder<
		tempParams extends {
			verbe?: "get" | "post" | "delete";
			idFolder?: string;
		}
	>(accountType: role, accountId: number, params?: tempParams): string {
		type solid = Solid<tempParams>;
		const defaultParams = {
			verbe: "get",
		};
		const nParams: solid = Util.mergeDefault(defaultParams, params);
		return Util.mergeParams(
			`/v3/cloud/${accountType}/${accountId}.awp`,
			nParams
		);
	},
};
