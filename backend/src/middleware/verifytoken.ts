import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function verifyToken(req: any, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded: any = jwt.verify(token, "tima1021");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
export default verifyToken;
