import React from "react"
import Note from "./Note"

const notes = [
  {
    title: "Finish the task on the board",
    description: "Remember to finish task on the board. After finishing give for evaluation Matt.",
    date: "22.01.2023",
    category: "Business",
  },
  {
    title: "Buy a new tea cup",
    description: "Remember to buy a new tea cup.",
    date: "21.01.2023",
    category: "Home",
  },
  {
    title: "Hang out with Marry",
    description: "Hang out with Marry, Friday at 7 pm in Blue Wolf Café.",
    date: "20.01.2023",
    category: "Personal",
  },
  {
    title: "Business meeting",
    description: "Business meeting at 1 pm!",
    date: "19.01.2023",
    category: "Business",
  },
  {
    title: "Bake a birthday cake",
    description: "Remember to bake a chocolate birthday cake for Nany.",
    date: "17.01.2023",
    category: "Home",
  },
  {
    title: "Sign up for a Spanish course",
    description: "Start to learn Spanish.",
    date: "17.01.2023",
    category: "Personal",
  },
]

const NoteList = () => (
  <div>
    {notes.map((note, index) => (
      <Note key={index} {...note} />
    ))}
  </div>
)

export default NoteList
