// Simple in-memory + placeholder for Mongo
type MemoryRecord = { id: string; text: string; isPaid: boolean };
const store = new Map<string, MemoryRecord>();
export async function markPaid(memoryId: string) {
  const rec = store.get(memoryId) || { id: memoryId, text: "", isPaid: false };
  rec.isPaid = true;
  store.set(memoryId, rec);
  console.log("marked paid", memoryId);
  return rec;
}
export async function isPaid(memoryId: string) {
  return store.get(memoryId)?.isPaid || false;
}
