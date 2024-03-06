import React, { SetStateAction } from "react"
import { ToDoItem as ToDoItemType } from "./App"

interface ToDoItemProps {
  item: ToDoItemType
  toDoList: ToDoItemType[]
  setToDoList: React.Dispatch<SetStateAction<ToDoItemType[]>>
}

const ToDoItem: React.FC<ToDoItemProps> = ({ item, setToDoList, toDoList }) => {
  const markCompleted = (e: React.MouseEvent<HTMLButtonElement>) => {
    let oldToDoList = [...toDoList]
    let updateItem = oldToDoList.find((newItem) => newItem.id === item.id)
    if (updateItem !== undefined) {
      updateItem.completed = !updateItem.completed
    }
    setToDoList(oldToDoList)
  }

  const markDeleted = () => {
    let oldToDoList = [...toDoList]
    setToDoList(oldToDoList.filter((newItem) => newItem.id !== item.id))
  }

  return (
    <li>
      {item.title}
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => markCompleted(e)}
      >
        Complete
      </button>
      <button onClick={() => markDeleted()}>Delete</button>
    </li>
  )
}

export default ToDoItem
