import React, { SetStateAction, SyntheticEvent, useState } from "react"
import { ToDoItem } from "./App"

interface ToDoFormProps {
  toDoList: Array<ToDoItem>
  setToDoList: React.Dispatch<SetStateAction<ToDoItem[]>>
}

const ToDoForm: React.FC<ToDoFormProps> = ({ toDoList, setToDoList }) => {
  const [title, setTitle] = useState<string>("")

  const updateList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title !== "") {
      let newToDoItem = { title: title, completed: false, id: Date.now() }
      setToDoList([...toDoList, newToDoItem])
      setTitle("")
    } else {
      console.log("To Do Item must have a title")
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target !== null) {
      setTitle(e.target.value)
    }
  }

  return (
    <div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => updateList(e)}>
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ToDoForm
