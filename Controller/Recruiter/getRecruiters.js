import DB from "../../ConnectDB/DB.js";

export const getRecruiters = async (req , res) => {
    try {
        const Query = "SELECT * FROM recruiter";
        const [result] = await DB.promise().query(Query);
        if(result.length === 0){
            return res.status(404).json({message: "No recruiters found"});
        }
        return res.status(200).json(result);
    } catch (error) {
        console.log("Error getting recruiters", error);
        return res.status(500).json({message: "Internal server error"});
    }
}