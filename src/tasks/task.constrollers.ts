import type { Request, Response } from 'express';
import { getAllTasks,createTask,updateTask,deleteTask,getOneTask } from './task.services';
import express from 'express';
import { TaskDTO } from './dto/task.dto';

const router = express.Router();

router.get('/',async(req:Request,res:Response)=>{
    try{
        res.status(200).send(await getAllTasks())
    } catch(err:any){
        res.status(500).send(err.message)
    }
})

router.get('/:id',async(req:Request , res:Response)=>{
    try{
        const id : string = req.params.id
        res.status(200).send(await getOneTask(id))
    }catch(err:any){
        res.status(500).send(err.message)
    }
})

router.post('/',async(req:Request , res:Response)=>{
    try{
        const data : TaskDTO = req.body
        res.status(201).send(await createTask(data))
    }catch(err:any){
        res.status(500).send(err.message)
    }
})

router.put('/:id',async(req:Request , res:Response)=>{
    try{
        const id : string = req.params.id
        const data : TaskDTO = req.body
        res.status(200).send(await updateTask(id,data))
    }catch(err:any){
        res.status(500).send(err.message)
    }
})

router.delete('/:id',async(req:Request,res:Response)=>{
    try{
        const id : string = req.params.id
        res.status(200).send(await deleteTask(id))
    }catch(err:any){
        res.status(500).send(err.message)
    }
})


export default router;
