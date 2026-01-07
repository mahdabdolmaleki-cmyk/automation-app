import type { Request, Response } from 'express';
import express from 'express';
import { register, getAllUsers ,updateUser,deleteUser,login } from './user.services';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    }
    catch (err:any) {
        res.status(500).send(err.message);
    }
});

// router.get('/:id', async (req: Request, res: Response) => {
//     const userId = req.params.id;
//     try {
//         const user = await getOneUser(userId);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch user' });
//     }
// });

router.post('/login',async (req:Request,res:Response)=>{
    try{
        const {email,password} = req.body
        res.status(200).send(await login(email,password))
    }catch(err:any){
        res.status(500).send(err.message)
    }
})

router.post('/register', async (req: Request, res: Response) => {
    const userData = req.body;
    try {
        const user = await register(userData);
        res.status(201).send(user);
    } catch (err:any) {
        res.status(500).send(err.message)
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updateData = req.body;
    try {
        const updatedUser = await updateUser(userId, updateData);
        res.status(200).send(updatedUser);
    } catch (err:any) {
        res.status(500).send(err.message)
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const deletedUser = await deleteUser(userId);
        res.status(200).send(deletedUser);
    } catch (err:any) {
        res.status(500).send(err.message)
    }
});



export default router;