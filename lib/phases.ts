export type Day = { date: string; title: string; memory: string }
export type Phase = { id: string; title: string; color: string; days: Day[] }
export const initialPhases: Phase[] = [
  { id:"p1", title:"Childhood", color:"#60A5FA", days:[
    {date:"2005-06-01", title:"First Day", memory:"School gate memory"},
  ]},
  { id:"p2", title:"Awakening", color:"#A78BFA", days:[
    {date:"2024-01-01", title:"Spark", memory:"Idea born"},
  ]},
  { id:"p3", title:"Empire", color:"#F59E0B", days:[
    {date:"2026-10-12", title:"OMEGA Live", memory:"Prototype deployed"},
  ]},
]
