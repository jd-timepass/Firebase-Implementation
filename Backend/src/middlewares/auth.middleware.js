import admin from "../config/firebaseAdmin.js";


export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ msg: "No token" });

        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
}