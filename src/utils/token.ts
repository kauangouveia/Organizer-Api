import jwt from "jsonwebtoken";
import { TOKEN } from './constants'



export const generateToken = (id, email, name) => {
    return jwt.sign({ id, email, name }, TOKEN.SECRET, {
        expiresIn: "864000000",
    });
};


// export const decriptToken = (id)=>{
//  return jwt.decode({id})
// }
