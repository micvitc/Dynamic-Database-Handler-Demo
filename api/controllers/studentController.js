const Student = require("../models/Student");


const addStudent = async (req, res, next) => {
	try {
		 
			const newStudent = await Student.create({
				Student: req.body,
				
			});
			if (newUser) {
				res.status(201);
				return res.json(
					errorFunction(false, "Student Created", newUser)
				);
			} else {
				res.status(403);
				return res.json(errorFunction(true, "Error Creating Student"));
			}
		
	} catch (error) {
		res.status(400);
		console.log(error);
		return res.json(errorFunction(true, "Error Adding Student"));
	}
};

const getStudent = async (req, res, next) => {
	try {
		const allStudents = await Student.find();
		if (allStudents) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all Students", allStudents)
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting Students"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting Student"));
	}
};

module.exports = { addStudent, getStudent };