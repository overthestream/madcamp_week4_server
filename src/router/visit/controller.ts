import { Request, Response } from 'express';
import databaseConnector from '../../middleware/databaseConnector';

export const getVisitList = async (req: Request, res: Response) => {
  try {
    console.log(`server receive visit list request`);
    const { name } = req.query;
    const query = {
      str: `SELECT from_who, to_whom, message_text, send_when FROM visit WHERE to_whom=$1`,
      val: [name],
    };
    const result: Array<JSON> = await databaseConnector(query);
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const addVisitItem = async (req: Request, res: Response) => {
  try {
    console.log(`server receive visit add request`);
    const { from_who, to_whom, message_text, send_when } = req.query;
    const query = {
      str: `INSERT INTO visit(from_who, to_whom, message_text, send_when) VALUES ($1,$2,$3,$4)`,
      val: [from_who, to_whom, message_text, send_when],
    };
    console.log(await databaseConnector(query));
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
