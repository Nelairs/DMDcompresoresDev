import { UserModel } from "../models/authDb.model.js";



export async function checkPermissions(idFront) {
    //console.log(idFront);

    
    const user = await UserModel.findOne({_id: idFront});
    
    if (!user) {
      
        return  (req, res, next)    =>  {

            req.userPermissions = user.permissions[0]    
            //console.log(user.permissions[0]);

            next();
        }
    } else {
      //console.log('not logged');
      return    (req, res)    =>{

        res.status(403)
      }
    }
  }