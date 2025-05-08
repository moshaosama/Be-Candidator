import DB from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";
export const createRecruiter = async (req, res) =>{
    try {
        const {FirstName, LastName, Email, Password} = req.body;

        if(!FirstName || !LastName || !Email || !Password){
            return res.status(400).json({message: "All fields are required"});
        }

        const Query = `INSERT INTO recruiter (FirstName, LastName, Email, Password, Role) VALUES (?, ?, ?, ?, ?)`

        const hashPassword = await bcrypt.hash(Password, 12)

        const Value = [FirstName, LastName, Email, hashPassword, "recruiter"];
        const [result] = await DB.promise().query(Query, Value);

        if(result.affectedRows === 0){
            return res.status(400).json({message: "Failed to create recruiter"});
        }


        return res.status(201).json({message: "Recruiter created successfully"});
        
    }
    catch(err){
        console.log("Error creating recruiter", err);
    }
}