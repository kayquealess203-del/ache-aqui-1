import { createComment, listComments } from "@/lib/comments-db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const attempts = new Map<string, { count: number; startedAt: number }>();
function isAllowed(request: Request) { const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local"; const now = Date.now(); const current = attempts.get(address); if (!current || now - current.startedAt > 600000) { attempts.set(address, { count: 1, startedAt: now }); return true; } if (current.count >= 5) return false; current.count += 1; return true; }
export async function GET() { return NextResponse.json({ comments: listComments() }, { headers: { "Cache-Control": "no-store" } }); }
export async function POST(request: Request) { if (!isAllowed(request)) return NextResponse.json({ error: "Aguarde alguns minutos para enviar outro comentário." }, { status: 429 }); const body = await request.json().catch(() => null) as { name?: unknown; message?: unknown } | null; const name = typeof body?.name === "string" ? body.name.trim().slice(0, 40) : ""; const message = typeof body?.message === "string" ? body.message.trim().slice(0, 400) : ""; if (!message) return NextResponse.json({ error: "Escreva um comentário antes de enviar." }, { status: 400 }); return NextResponse.json({ comment: createComment(name || "Visitante", message) }, { status: 201 }); }
