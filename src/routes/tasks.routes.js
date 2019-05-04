import { Router } from 'express';
//importamos la base de datos 

import { connect } from '../database/database';
//importamos ObjectId para convertir string en obj. cuando buscamos un id. 
import { ObjectID } from 'mongodb'

const router = Router();

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);

});

router.post('/', async (req, res) => {

    const db = await connect();
    const task = {
        status: req.body.status,
        title: req.body.title,
        description: req.body.description

    };
    const result = await db.collection('tasks').insert(task);
    console.log(result)
    res.send('agregado');


});
router.get('/:id', async (req, res) => {
    const db = await connect();
    let { id } = req.params;
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });
    res.json(result);

});
router.delete('/:id', async (req, res) => {
    const db = await connect();
    let { id } = req.params;
    await db.collection('tasks').findOneAndDelete({ _id: ObjectID(id) });
    res.redirect('/');

});
router.put('/:id', async (req, res) => {
    const db = await connect();
    let { id } = req.params;
    let updateTasks = req.body;
    const result = await db.collection('tasks').findOneAndUpdate({ _id: ObjectID(id) }, { $set: updateTasks });
    res.json(result);

});

export default router;