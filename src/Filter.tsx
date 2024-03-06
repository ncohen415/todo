import React, { SetStateAction } from "react"

interface FilterProps {
  setFilterOption: React.Dispatch<
    SetStateAction<"All" | "Complete" | "Incomplete">
  >
}

const Filter: React.FC<FilterProps> = ({ setFilterOption }) => {
  return (
    <>
      <button onClick={() => setFilterOption("All")}>All</button>
      <button onClick={() => setFilterOption("Complete")}>Complete</button>
      <button onClick={() => setFilterOption("Incomplete")}>Incomplete</button>
    </>
  )
}

export default Filter
