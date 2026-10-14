// memory -> movie strip auto-generation
async function createStripFromMemory(memory) {
  const strip = {
    id: `strip_${Date.now()}`,
    memoryId: memory.id,
    frames: await generateFrames(memory.text, 4), // 4-frame strip
    locked: true, // Stripe unlock required
    createdAt: new Date().toISOString()
  };
  await db.strips.save(strip);
  return strip;
}
// hook: call on memory create
db.memories.onCreate(async (memory) => {
  const strip = await createStripFromMemory(memory);
  console.log("Strip auto-generated:", strip.id);
});
