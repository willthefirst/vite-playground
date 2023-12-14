import { useState } from 'react'
import './App.css'

type CellProps = {
  computedValue: string
  rawValue: string
  onChange: (value: string) => void
}

const charIndexMap = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
}

function computeValue(rawValue: string, cells: CellState[]): string {
  const isNumber = !isNaN(Number(rawValue))

  if (isNumber) {
    return rawValue
  }

  let sum = 0
  for (let i = 0; i < rawValue.length; i++) {
    const char = rawValue[i]
    const cellIndex = charIndexMap[char]
    sum += Number(cells[cellIndex])
  }
  return sum.toString()
}

function Cell({ computedValue, rawValue, onChange }: CellProps) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <input
        onChange={handleChange}
        value={rawValue}
        type='string'
      />
      <span>{computedValue}</span>
    </div>
  )
}

type CellState = {
  rawValue: string
  computedValue: string
}

const initialState = [
  { rawValue: '0', computedValue: '0' },
  { rawValue: '0', computedValue: '0' },
  { rawValue: '0', computedValue: '0' },
  { rawValue: '0', computedValue: '0' },
]

function App() {
  const [cells, setCells] = useState<CellState[]>([...initialState])

  const handleCellChange = (rawValue: string, cellIndex: number) => {
    const newCells = [...cells]
    const computedValue = computeValue(rawValue, cells)
    newCells[cellIndex] = { rawValue, computedValue }
    setCells(newCells)
  }

  return (
    <>
      {cells.map(({ rawValue, computedValue }, cellIndex) => {
        return (
          <Cell
            onChange={(rawValue) => handleCellChange(rawValue, cellIndex)}
            key={cellIndex}
            rawValue={rawValue}
            computedValue={computedValue}
          />
        )
      })}
    </>
  )
}

export default App
