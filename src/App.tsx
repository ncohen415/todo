import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import ToDoForm from "./ToDoForm.tsx"
import ToDoList from "./ToDoList.tsx"
import Filter from "./Filter.tsx"

export interface ToDoItem {
  title: string
  completed: boolean
  id: number
}

function App() {
  const [toDoList, setToDoList] = useState<Array<ToDoItem>>([])
  const [filterOption, setFilterOption] = useState<
    "All" | "Complete" | "Incomplete"
  >("All")

  return (
    <div>
      <h1>Showing {filterOption}</h1>
      <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        filterOption={filterOption}
      />
      <Filter setFilterOption={setFilterOption} />
    </div>
  )
}

export default App
