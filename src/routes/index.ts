import express from 'express';
import PersonController from '../controllers/PersonController'
const router=express.Router();

router.get('/person',PersonController.getAllPersons);
router.get('/person/:id',PersonController.getPersons)
router.post('/person',PersonController.createPersons);
router.put('/person/:id',PersonController.updatePersons);
router.delete('/person/:id',PersonController.deletePerson);

export default router;
