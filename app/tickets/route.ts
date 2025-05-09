import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * GET /api/tickets
 * Devuelve la lista completa de tickets con su concierto y usuario asociado.
 */
export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        concert: true, // incluye datos del concierto
        user: true, // incluye datos del usuario que compró
      },
    })
    return NextResponse.json(tickets, { status: 200 })
  } catch (error: any) {
    console.error("Error al obtener tickets:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

/**
 * POST /api/tickets
 * Crea un nuevo ticket (compra) para un concierto.
 */
export async function POST(req: NextRequest) {
  try {
    const { concertId, purchaser, userId } = await req.json()
    if (!concertId || !purchaser || !userId) {
      return NextResponse.json({ error: "concertId, purchaser y userId son obligatorios" }, { status: 400 })
    }

    const ticket = await prisma.ticket.create({
      data: { concertId, purchaser, userId },
    })

    return NextResponse.json(ticket, { status: 201 })
  } catch (error: any) {
    console.error("Error al crear ticket:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
