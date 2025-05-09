// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const concerts = [
    {
      name: "Rock al Parque",
      description: "Festival de rock en el parque central",
      date: new Date("2025-07-20T19:00:00Z"),
    },
    {
      name: "Jazz Night",
      description: "Una noche de jazz en vivo",
      date: new Date("2025-08-15T21:00:00Z"),
    },
    {
      name: "Electronic Beats",
      description: "Festival de música electrónica con DJs internacionales",
      date: new Date("2025-09-10T22:00:00Z"),
    },
    {
      name: "Clásicos del Pop",
      description: "Concierto con las mejores bandas de pop de los 80s",
      date: new Date("2025-10-05T20:00:00Z"),
    },
    {
      name: "Noche de Salsa",
      description: "Baile y música en vivo con las mejores orquestas de salsa",
      date: new Date("2025-11-12T21:00:00Z"),
    },
  ];

  for (const concert of concerts) {
    await prisma.concert.create({ data: concert });
  }

  console.log("Conciertos añadidos a la base de datos.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
