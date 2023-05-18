import { Request, Response } from "express"
import { createUser } from "../services/user.service";
// import { UserOutput } from "../models/User";

export let createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    let { name, lastName } = req.body;

    if (!name || !lastName) {
      res.status(400).send({ msg: "Send all data plese." });
      return;
    }

    let user = await createUser(req.body);

    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send(error);
  }
};

