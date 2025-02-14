const User = require("../models/User");

exports.searchUser = async (req, res) => {
    try {
        const { query } = req.params;
        const user = await User.findOne({ 
            $or: [
                { username: new RegExp(`^${query}$`, "i") }, 
                { email: new RegExp(`^${query}$`, "i") }
            ] 
        }).select("-password");                
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
