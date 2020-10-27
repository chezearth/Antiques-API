import {UsersService} from '../services/user.services';

import express from 'express'

export class UsersController {

	constructor() {
	}

	listUsers(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		const users = usersService.list(100, 0);
		res.status(200).send(users);
	}

	getUser(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		const user = usersService.readById(req.params.userId);
		res.status(200).send(user);
	}

	
	createUser(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		const userId = usersService.create(req.body);
		res.status(200).send({ id: userId });
	}

	patchUser(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		usersService.patchById(req.body);
		res.status(200).send(``);
	}

	updateUser(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		usersService.updateById(req.body);
		res.status(200).send(``);
	}

	removeUser(req: express.Request, res: express.Response) {
		const usersService = UsersService.getInstance();
		usersService.deleteById(req.params.userId);
		res.status(200).send(``);
	}

}
