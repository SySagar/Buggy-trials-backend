import express from "express";

interface userType {
  req: express.Request;
  res: express.Response;
  user: object;
}

export default userType;
