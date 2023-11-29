import { useState } from 'react'

function EventBlock({ hour }: { hour: number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <div>{hour}:00</div>
      <div
        style={{
          border: '1px solid black',
          width: 100,
        }}></div>
    </div>
  )
}

type EventsParams = {
  blockCount: number
  events: Event[]
}

function EventBlocks({ blockCount, events }: EventsParams) {
  console.log(events)
  const blocks = []

  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <EventBlock
        key={i}
        hour={i}
      />
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${blockCount}, 30px)`,
      }}>
      {blocks}
      {events.map(({ start, end, name }, index) => {
        return (
          <div
            style={{
              gridRowStart: start,
              gridRowEnd: end,
              backgroundColor: 'green',
            }}
            key={index}>
            {name}
          </div>
        )
      })}
    </div>
  )
}

function EventEditor({ onCreate }: { onCreate: (event: Event) => void }) {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onCreate({ start, end, name: 'myEvent' })
  }

  const handleStartChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setStart(Number(e.target.value))
  }

  const handleEndChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEnd(Number(e.target.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        name='start'
        id='start'
        placeholder='from'
        value={start}
        onChange={handleStartChange}
      />
      <input
        type='number'
        name='end'
        id='end'
        placeholder='to'
        value={end}
        onChange={handleEndChange}
      />
      <button
        type='submit'
        name='save'
        id='save'>
        Save
      </button>
    </form>
  )
}

type Event = {
  start: number
  end: number
  name: string
}

// Accept a date on the day view
function DayView() {
  const [events, setEvents] = useState<Event[]>([])

  function handleCreate(event: Event) {
    setEvents((events) => [...events, event])
  }

  return (
    <div>
      <h2>1/1/2024</h2>
      <EventEditor onCreate={handleCreate} />
      <EventBlocks
        blockCount={24}
        events={events}
      />
    </div>
  )
}

function RampInterview() {
  return <DayView />
}

export default RampInterview
