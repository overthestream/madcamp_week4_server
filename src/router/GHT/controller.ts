import { Request, Response } from 'express';
import databaseConnector from '../../middleware/databaseConnector';

export const getGHTList = async (req: Request, res: Response) => {
  try {
    console.log(`server receive GHT list request`);
    const query = {
      str: `SELECT * FROM GHT ORDER BY writen_when DESC`,
      val: [],
    };
    const result: Array<JSON> = await databaseConnector(query);
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getUserGHTList = async (req: Request, res: Response) => {
  try {
    console.log(`server receive user GHT list request`);
    const { userName } = req.query;
    const query = {
      str: `SELECT * FROM GHT WHERE writer = $1 ORDER BY writen_when DESC`,
      val: [userName],
    };
    const result: Array<JSON> = await databaseConnector(query);
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
interface image extends Express.Multer.File {
  location?: string;
}
export const writeGHT = async (req: Request, res: Response) => {
  try {
    console.log(`server receive write GHT request`);
    const { userName, text, writen_when } = req.body;
    const imageFile: image | undefined = req.file;
    if (imageFile) {
      const image_url = imageFile.location;
      const query = {
        str: `INSERT INTO GHT(writer, text, writen_when, image_url) VALUES($1,$2,$3,$4) `,
        val: [userName, text, writen_when, image_url],
      };
      await databaseConnector(query);
      res.sendStatus(200);
    } else res.sendStatus(400);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const writeReply = async (req: Request, res: Response) => {
  try {
    console.log(`server receive write GHT_reply request`);
    const { GHT_id, writer, text, written_When } = req.body;
    const query = {
      str: `INSERT INTO GHT_reply(GHT_id, writer, text, written_when) VALUES($1,$2,$3,$4) `,
      val: [GHT_id, writer, text, written_When],
    };
    await databaseConnector(query);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getReplyList = async (req: Request, res: Response) => {
  try {
    console.log(`server receive GHT_reply list request`);
    const { GHT_id } = req.query;
    const query = {
      str: `SELECT * FROM GHT_reply WHERE GHT_id=$1 ORDER BY writen_when DESC`,
      val: [GHT_id],
    };
    const result: Array<JSON> = await databaseConnector(query);
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};