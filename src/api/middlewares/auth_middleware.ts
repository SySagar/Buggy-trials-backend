import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function verifyToken(req: any, res: any, next:  () => void) {
  try{
    const token = req.headers.authorization.split(" ")[1]; 
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userData = decoded;
    req.token = token;
    console.log(decoded);
    console.log(req.userData);
    next();
  }catch(error){
    return res.status(401).json({status: false, message: "Your session is not valid.", data: error});
  }
}

function verifyRefreshToken(req: any, res: any, next: () => void) {
  const token = req.body.token;

  if (token === null)
    return res.status(401).json({ status: false, message: "Invalid request." });
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    req.userData = decoded;

    next();

    // verify if token is in store or not
    // redisClient.get(decoded.sub.toString(), (err: unknown, data: string) => {
    //     if(err) throw err;

    //     if(data === null) return res.status(401).json({status: false, message: "Invalid request. Token is not in store."});
    //     if(JSON.parse(data).token != token) return res.status(401).json({status: false, message: "Invalid request. Token is not same in store."});

    //     next();
    // })


    //inaccessible now
    // const refreshTokenStored = redisClient.get("sagar");
    // if (refreshTokenStored === null)
    //   return res
    //     .status(401)
    //     .json({
    //       status: false,
    //       message: "Invalid request. Token is not in store.",
    //     });

    // next();
  } catch (error) {
    return res.status(401).json({
      status: true,
      message: "Your session is not valid.",
      data: error,
    });
  }
}

export { verifyToken, verifyRefreshToken };
