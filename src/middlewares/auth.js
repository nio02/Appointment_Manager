import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1]

    if (!token){
        res.status(401).json({ error: 'Access Denied, no token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({error: 'Invalid token'})
        req.user = user
        next()
    })
}
