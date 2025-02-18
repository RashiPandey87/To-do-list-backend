const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    console.log("Received Token Header:", token); // Debugging log

    if (!token) {
        console.log("❌ No token provided!");
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Ensure we remove "Bearer " from the token
        const tokenValue = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        console.log("Extracted Token:", tokenValue); // Debugging log

        // Verify token with the secret key
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Debugging log

        req.user = decoded;
        next();
    } catch (err) {
        console.error("❌ Token Verification Error:", err.message);
        return res.status(401).json({ message: "Invalid token" });
    }
};
