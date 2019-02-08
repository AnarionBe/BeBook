export const isCoach = (req, res, next) => {
    if (req.user.role === "coach") {
        return next();
    }

    return res.status(400).json({message: "Access denied!"});
};

export const isStudent = (req, res, next) => {
    if (req.user.role === "student") {
        return next();
    }

    return res.status(400).json({message: "Access denied!"});
};
