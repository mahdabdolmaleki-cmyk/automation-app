import usermodule from '../schemas/user.module';
import taskmodule from '../schemas/task.module';
import { UserDto } from './Dto/user.dto';


const register = async (data: UserDto) => {
    try {
        const nuser = usermodule.create({ ...data })
        return nuser
    } catch (err: any) {
        return err.message
    }
};

const login = async (email: string, password: string) => {
    // return new Promise(async (res,rej)=>{
    //     const find = await usermodule.findOne({email,password})
    //     if(find){
    //         return new Promise (async ( res,rej)=>{
    //             const allTask = await taskmodule.find({naem:find.name})
    //             res({find,allTask})
    //             rej("no task found")
    //         })
    //     }
    //     res(find)
    //     rej("cant find ")
    // })
    const find = await usermodule.findOne({ email, password });
    if (!find) {
        throw new Error("Can't find user");
    }
    const allTask = await taskmodule.find({ name: find.name });
    return { find, allTask };

}

// const getOneUser = async (id: string) => {
//     return new Promise((res, rej) => {
//         usermodule.findById(id)
//             .then((user) => { res(user) })
//             .catch((err) => { rej(err) })
//     })
// };

const getAllUsers = async () => {
       try {
         const allUser = usermodule.find()
         return allUser
       } catch (err:any) {
        return err.message
       }
    
};

const updateUser = async (id: string, data: Partial<UserDto>) => {
    return usermodule.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id: string) => {
        try {
            const deleteUser = await usermodule.findByIdAndDelete(id)
            return deleteUser
        } catch (err:any) {
            return err.message
        }
};

export { register, getAllUsers, updateUser, deleteUser, login };