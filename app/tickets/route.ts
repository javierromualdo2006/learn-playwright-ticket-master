// app/api/tickets/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Simulación de datos
  const tickets = [{ id: 1, title: 'Concert', date: '2025-06-01' }];
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Lógica de creación…
  return NextResponse.json({ success: true, data: body }, { status: 201 });
}
