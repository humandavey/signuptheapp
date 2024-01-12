import * as database from "./database";

import { Request, Response } from 'express';

export const getPing = async (req: Request, res: Response) => {
    res.json(4);
  };
  