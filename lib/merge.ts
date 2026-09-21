
// lib/merge.ts - call from API route
export async function addVoiceAndMusic(videoPath: string, audioPath: string){
  // ffmpeg merges video + voice + bg music
  // ffmpeg -i video.mp4 -i voice.mp3 -filter_complex amix output.mp4
  return "public/memories/output.mp4";
}
