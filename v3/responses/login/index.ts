import { failureRes } from "..";
import { account } from "./accounts";

export type loginRes = loginResSuccess | failureRes;

export type loginResSuccess = {
	code: 200;
	token: string;
	message: "";
	data: {
		accounts: Array<account>;
	};
};
