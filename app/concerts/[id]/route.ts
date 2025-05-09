// app/api/concerts/[id]/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Desempaquetamos la promesa
    const { id } = await params;  

    const concertId = Number(id);
    if (isNaN(concertId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // 2. Lógica de Prisma
    const concert = await prisma.concert.findUnique({
      where: { id: concertId },
      include: { tickets: true },
    });

    if (!concert) {
      return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
    }
    return NextResponse.json(concert);
  } catch (error) {
    console.error('Error al obtener concierto:', error);
    return NextResponse.json(
      { error: 'Error al obtener concierto' },
      { status: 500 }
    );
  }
}
