import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const concertId = Number(id)

    if (isNaN(concertId)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const concert = await prisma.concert.findUnique({
      where: { id: concertId },
      include: { tickets: true },
    })

    if (!concert) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 })
    }

    return NextResponse.json(concert)
  } catch (error) {
    console.error("Error al obtener concierto:", error)
    return NextResponse.json({ error: "Error al obtener concierto" }, { status: 500 })
  }
}