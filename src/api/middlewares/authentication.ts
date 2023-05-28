import verifyToken from "@utils/verifyToken";

const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  //console.log(token)

  verifyToken({ req, res, next, token });
};

export default authenticateToken;
