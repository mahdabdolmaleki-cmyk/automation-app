import taskmodule from '../schemas/task.module';

export const getAllTasks = async () => {
    return new Promise((res, rej) => {
        taskmodule.find()
            .then((tasks) => { res(tasks) })
            .catch((err) => { rej(err) })
    })
};

export const createTask = async (data: any) => {
    return new Promise((res, rej) => {
        const ntask = taskmodule.create({ ...data })
            .then((task) => { res(task) })
            .catch((err) => { rej(err) })
    })
}; 

export const getOneTask = async (id: string) => {
    return new Promise((res, rej) => {
        taskmodule.findById(id)
            .then((task) => { res(task) })
            .catch((err) => { rej(err) })
    })
};

export const updateTask = async (id: string, data: any) => {
    return new Promise((res, rej) => {
        taskmodule.findByIdAndUpdate(id, data, { new: true })
            .then((task) => { res(task) })
            .catch((err) => { rej(err) })
    })
};

export const deleteTask = async (id: string) => {
    return new Promise((res, rej) => {
        taskmodule.findByIdAndDelete(id)
            .then((task) => { res(task) })
            .catch((err) => { rej(err) })
    })
}

export default { getAllTasks, createTask, getOneTask, updateTask, deleteTask };