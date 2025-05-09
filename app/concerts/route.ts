// app/api/concerts/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Obtener todos los conciertos
export async function GET() {
  try {
    const concerts = await prisma.concert.findMany({
      include: { tickets: true },
    });
    return NextResponse.json(concerts);
  } catch (error) {
    console.error('Error al obtener conciertos:', error);
    return NextResponse.json(
      { error: 'Error al obtener conciertos' },
      { status: 500 }
    );
  }
}

// POST: Crear un nuevo concierto
export async function POST(req: NextRequest) {
  try {
    const { name, description, date } = await req.json();

    if (!name || !date) {
      return NextResponse.json(
        { error: 'name y date son obligatorios' },
        { status: 400 }
      );
    }

    const concert = await prisma.concert.create({
      data: {
        name,
        description,
        date: new Date(date),
      },
    });

    return NextResponse.json(concert, { status: 201 });
  } catch (error) {
    console.error('Error al crear concierto:', error);
    return NextResponse.json(
      { error: 'Error al crear concierto' },
      { status: 500 }
    );
  }
}
