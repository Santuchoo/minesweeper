import { Square } from "./components/Square"

function App() {
  function getGrid(gridSizeX, gridSizeY) {
    const grid = []
    for (let row = 0; row < gridSizeY; row++) {
      const rowArr = []
      for (let i=0; i < gridSizeX; i++) {
        rowArr.push(<Square
          key={[row, i]} //row, col
        ></Square>)
      }
      grid.push(rowArr)
    }
    
    return grid
  }

  return (
    <>
      <header>
        <h1 className="text-white text-4xl font-bold">Minesweeper</h1>
      </header>
      <main className="flex flex-col gap-1">
        {getGrid(8, 8).map((row)=> {
          return (
            <div className="flex gap-1">
              {row.map((el)=> {
                return el
              })}
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App