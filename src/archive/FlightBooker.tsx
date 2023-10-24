import { useState } from 'react'

enum TripType {
  ONE_WAY,
  TWO_WAY,
}

function formatDate(date: Date) {
  const year = date.getFullYear()
  let month: string | number = date.getMonth()
  let day: string | number = date.getDay()

  if (month < 10) {
    month = `0${month}`
  }

  if (day < 10) {
    day = `0${day}`
  }

  const result = `${year}-${month}-${day}`
  console.log(result)
  return result
}

function FlightBooker() {
  const [tripType, setTripType] = useState(TripType.ONE_WAY)
  const [depatureDate, setDepartureDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState<Date | null>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  const handleTripTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setTripType(Number(e.target.value))
  }

  const handleDepatureDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const date = new Date(e.target.value)
    setDepartureDate(date)
  }

  const handleReturnDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const date = new Date(e.target.value)
    console.log(e.target.value)
    setReturnDate(date)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='trip-type'>One-way/returning</label>:{' '}
        <select
          name='trip-type'
          id='trip-type'
          value={tripType}
          onChange={handleTripTypeChange}>
          <option value={TripType.ONE_WAY}>One-way</option>
          <option value={TripType.TWO_WAY}>Returning</option>
        </select>
      </div>
      <div>
        <label htmlFor='departure-date'>Departure: </label>
        <input
          type='date'
          name='departure-date'
          id='departure-date'
          value={formatDate(depatureDate)}
          onChange={handleDepatureDateChange}
        />
      </div>
      {tripType === TripType.TWO_WAY && (
        <div>
          <label htmlFor='return-date'>Return: </label>
          <input
            type='date'
            name='return-date'
            id='return-date'
            value={returnDate ? formatDate(returnDate) : ''}
            onChange={handleReturnDateChange}
          />
        </div>
      )}
      <input
        type='submit'
        value='Submit'
      />
    </form>
  )
}

export default FlightBooker
