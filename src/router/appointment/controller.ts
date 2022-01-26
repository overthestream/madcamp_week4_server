import { Request, Response } from 'express';
import databaseConnector from '../../middleware/databaseConnector';

export const makeAppointment = async (req: Request, res: Response) => {
  try {
    console.log(`server receive write appointment request`);
    const { title, when, location } = req.body;
    const query = {
      str: `INSERT INTO appointment(title, when2meet, location) VALUES($1,$2,$3) `,
      val: [title, when, location],
    };
    await databaseConnector(query);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const attendAppointment = async (req: Request, res: Response) => {
  try {
    console.log(`server receive write appointment attend request`);
    const { id, user_name } = req.body;
    const query = {
      str: `INSERT INTO attend(id, user_name) VALUES($1,$2,) `,
      val: [id, user_name],
    };
    await databaseConnector(query);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
