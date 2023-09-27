// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedTypes() {
  try {
    // Define an array of type names
    const typeNames = [
      "Grass",
      "Fire",
      "Water",
      "Electric",
      "Fairy",
      "Fighting",
      "Ghost",
      "Ground",
      "Rock",
      "Normal",
    ];

    // Create Type entries for each type name
    await Promise.all(
      typeNames.map(async (typeName) => {
        await prisma.type.create({
          data: {
            name: typeName,
          },
        });
      })
    );

    console.log("Types seeded successfully");
  } catch (error) {
    console.error("Error seeding types:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedTypes();
