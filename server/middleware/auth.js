import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403);
            req.user = user;
        });
        
        next();
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate.' })
    }
}

export default auth;