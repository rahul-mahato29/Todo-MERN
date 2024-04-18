const express = require('express');
const router = express.Router();
const {Todo} = require('../Database/db');

//middleware for post request
router.use(express.json());


//creating todo
router.post('/create',async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;

    await Todo.create({
        title: title,
        description: description,
        completed: completed
    })

    res.json({
        msg: "Todo Created!!"
    })

})

//reading todo
router.get('/read',async (req, res) => {
    
    const allTodo = await Todo.find({});
    if(!allTodo){
        return res.json({
            msg: "No todo exist."
        })
    }   

    res.json({
        Todo : allTodo
    })
})

//updating todo
router.post('/update',async (req, res) => {
    const title = req.body.title;
    const updatedDescription = req.body.description;
    const updatedCompletion = req.body.completed;

    try{
        await Todo.updateMany(
            {title: title},
            {
                $set: {description: updatedDescription, completed: updatedCompletion}
            }
        )
    }
    catch(e){
        return res.json({
            msg: "Something went wrong",
        })
    }

    res.json({
        msg: "Todo Updated!"
    })

})

//deleting todo
router.post('/delete',async (req, res) => {
    const deleteTodo = req.body.title;

    try{
        const a = await Todo.deleteOne({title: deleteTodo});
        console.log("delete" , a);
    }
    catch(e){
        return res.json({
            msg: "Something went wrong"
        })
    }

    res.json({
        msg: "Todo Deleted!"
    })

})


module.exports = router;