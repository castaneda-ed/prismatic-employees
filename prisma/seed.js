const prisma = require("../prisma");
const seed = async () => {
  const employees = [
    { name: "Juan" },
    { name: "Peter" },
    { name: "Oneida" },
    { name: "Edwin" },
    { name: "Gabriel" },
    { name: "Sofia" },
    { name: "Carlos" },
    { name: "Pedro" },
    { name: "Jhon" },
    { name: "Jesus" },
  ];

  /*const employees = [];

  for (let i = 0; i < 10; i++) {
     employees.push({ name: `Name${i}` });
    } */

  await prisma.employee.createMany({ data: employees });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
