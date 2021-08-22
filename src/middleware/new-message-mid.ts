import express from "express";
import { GroupMeNewTextSchema } from "../schemas/schemas";

export const newMessageMid = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    // tslint:disable-next-line:no-console
    console.log(req.body);
    await GroupMeNewTextSchema.validateAsync(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};
