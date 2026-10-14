export type Memory = { id: string; text: string; imageUrl?: string };
export function createStripFromMemory(memory: Memory) {
  // TODO: replace with real generateFrames + db logic
  const frames = [{ text: memory.text, image: memory.imageUrl || "" }];
  return frames;
}
export async function saveStrip(memory: Memory) {
  // TODO: add db.save(memory) when DB ready
  console.log("saveStrip", memory.id);
  return true;
}
