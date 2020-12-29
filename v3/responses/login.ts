import { failureRes } from "../responses";
import { account } from "../types";

export type loginRes = loginResSuccess | failureRes;

export type loginResSuccess = {
	code: 200;
	token: string;
	message: "";
	data: {
		accounts: Array<account>;
	};
};
