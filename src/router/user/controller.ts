import { Request, Response } from 'express';
import databaseConnector from '../../middleware/databaseConnector';

export const login = async (req: Request, res: Response) => {
  try {
    console.log(`server receive login request`);
    const { id } = req.query;
    const query = {
      str: `SELECT user_name, user_text, user_location, image_url FROM users WHERE id = $1`,
      val: [id],
    };
    const result: Array<JSON> = await databaseConnector(query);
    if (Object.keys(result).includes('0')) {
      console.log(result[0]);
      res.json(result[0]);
      res.status(200);
    } else {
      console.log('no user exists');
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

interface image extends Express.Multer.File {
  location?: string;
}

export const putProfileImageCallback = async (req: Request, res: Response) => {
  try {
    console.log('put image file');
    console.log(req.file);
    const imageFile: image | undefined = req.file;
    if (imageFile) {
      console.log(imageFile.location);
      if (req.query.type === '1') {
        const query = {
          str: `UPDATE users SET image_url = $1 WHERE user_name = $2`,
          val: [imageFile.location, req.query.userName],
        };
        await databaseConnector(query);
        res.json({
          loc: imageFile.location,
        });
        res.status(200);
      } else {
        const query = {
          str: `UPDATE GHT SET image_url = $1 WHERE user_name = $2`,
          val: [imageFile.location, req.query.userName],
        };
        await databaseConnector(query);
        res.json({
          loc: imageFile.location,
        });
        res.status(200);
      }
    } else res.sendStatus(500);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const putUserText = async (req: Request, res: Response) => {
  try {
    console.log('server received put user text request');
    const { newText, userName } = req.query;
    const query = {
      str: `UPDATE users SET user_text = $1 WHERE user_name = $2`,
      val: [newText, userName],
    };
    await databaseConnector(query);
    console.log(`${userName} now has new text: ${newText}`);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const putUserLoc = async (req: Request, res: Response) => {
  try {
    console.log('server received put user location request');
    const { newLocation, userName } = req.query;
    const query = {
      str: `UPDATE users SET user_location = $1 WHERE user_name = $2`,
      val: [newLocation, userName],
    };
    await databaseConnector(query);
    console.log(`${userName} now has new text: ${newLocation}`);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getUserList = async (req: Request, res: Response) => {
  try {
    console.log(`server receive user list request`);
    const query = {
      str: `SELECT user_name, user_text, user_location, image_url FROM users`,
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