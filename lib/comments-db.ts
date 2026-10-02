import "server-only";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

export type PublicComment = { id: number; name: string; message: string; createdAt: string };
const databasePath = process.env.COMMENTS_DATABASE_PATH || join(process.cwd(), "storage", "ache-aqui.sqlite");
mkdirSync(dirname(databasePath), { recursive: true });
const globalForDb = globalThis as unknown as { commentsDb?: DatabaseSync };
const db = globalForDb.commentsDb ?? new DatabaseSync(databasePath);
globalForDb.commentsDb = db;
db.exec("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)");

export function listComments(): PublicComment[] { return db.prepare("SELECT id, name, message, created_at AS createdAt FROM comments ORDER BY id DESC LIMIT 30").all() as PublicComment[]; }
export function createComment(name: string, message: string): PublicComment { const createdAt = new Date().toISOString(); const result = db.prepare("INSERT INTO comments (name, message, created_at) VALUES (?, ?, ?)").run(name, message, createdAt); return { id: Number(result.lastInsertRowid), name, message, createdAt }; }
