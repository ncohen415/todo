import React, { SetStateAction } from "react"
import { ToDoItem as Item } from "./App"
import ToDoItem from "./ToDoItem.tsx"

interface ToDoListProps {
  toDoList: Array<Item>
  setToDoList: React.Dispatch<SetStateAction<Item[]>>
  filterOption: string
}

const ToDoList: React.FC<ToDoListProps> = ({
  toDoList,
  setToDoList,
  filterOption,
}) => {
  return (
    <ul>
      {filterOption === "All" &&
        toDoList?.map((item: Item) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              setToDoList={setToDoList}
              toDoList={toDoList}
            />
          )
        })}
      {filterOption === "Complete" &&
        toDoList
          ?.filter((item: Item) => item.completed === true)
          ?.map((item: Item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                setToDoList={setToDoList}
                toDoList={toDoList}
              />
            )
          })}
      {filterOption === "Incomplete" &&
        toDoList
          ?.filter((item: Item) => item.completed === false)
          ?.map((item: Item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                setToDoList={setToDoList}
                toDoList={toDoList}
              />
            )
          })}
    </ul>
  )
}

export default ToDoList
