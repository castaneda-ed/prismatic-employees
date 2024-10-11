const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employee.findUnique({ where: { id: +id } });
    if (employee) {
      res.json(employee);
    } else {
      next({ status: 404, message: `Employee with ${id} not found` });
    }
  } catch (e) {
    next(e);
  }
});
