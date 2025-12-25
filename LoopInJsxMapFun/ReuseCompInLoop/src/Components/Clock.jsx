import { useEffect, useState } from "react"

function Clock({ color }) {

  const [time, setTime] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "170px",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {time}
      </h1>
    </div>
  )
}

export default Clock
