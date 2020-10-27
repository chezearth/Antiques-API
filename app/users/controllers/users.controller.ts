import express from 'express';

export class UsersController {

	listUsers(req: express.Request, res: express.Response) {
		res.status(200).send(`GET to users`);
	}

	getUser(req: express.Request, res: express.Response) {
		res.status(200).send(`GET to user ${req.params.userId}`);
	}

	
	createUser(req: express.Request, res: express.Response) {
		res.status(200).send(`POST new user`);
	}

	patchUser(req: express.Request, res: express.Response) {
		res.status(200).send(`PATCH to user ${req.params.userId}`);
	}

	updateUser(req: express.Request, res: express.Response) {
		res.status(200).send(`PUT to user ${req.params.userId}`);
	}

	removeUser(req: express.Request, res: express.Response) {
		res.status(200).send(`DELETE user ${req.params.userId}`);
	}

}
