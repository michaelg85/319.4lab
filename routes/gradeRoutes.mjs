
// Imports
import express from 'express';
import gradesCTL from '../controllers/gradesController.mjs';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
import { object } from 'webidl-conversions';

const router = express.Router();

// Get grades by ID
router.route('/:id').get(gradesCTL.getSingleGrade);

// Get student grades by studentid
router.get('/student/:id', gradesCTL.getStudentGrades)

// Get Class grades by classID
router.get('/class/:id', gradesCTL.getClassGrades)

// Add new grade too
router.post('/', gradesCTL.createGrade)

// Add get stats
router.get('/stats', gradesCTL.stats)

export default router;

