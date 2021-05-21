import models from '../database/models'

const createTodo=async (req,res)=>{
    try {
        const newTodo=await models.todo_list_table.create(req,body);
    return res.status(201).json({
        newToDO
    });
    } catch(err){
    return res.status(500).json({err:err.message})
}
}
const getTodo=async (req,res)=>{
    try{
        const toDo=await models.todo_list_table.findAll();
        return res.status(200).json({todolist});
    }
    catch(err){
        return res.status(500).json({err:err.message})
    }
}

const updateList = async(req,res)=>{
    try{
        const { id }=req.params;
        const updated=await models.todo_list_table.update(req.body, {where:{id}});
        if(updated){
            const updatedList=await models.todo_list_table.findOne({where:{id}});
            return res.status(200).json({list:updatedList})
        }
    }
        catch(err){
            return res.status(500).json({err:err.message})
        }
    
}

const deleteToDo=(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await models.todo_list_table.delete({where:{id}});
    }
}