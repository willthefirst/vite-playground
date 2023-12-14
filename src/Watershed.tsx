import { useState } from 'react'

export function Watershed() {
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = () => {
    setGreeting(`Hello, ${name}!`)
  }

  return (
    <div className='p-4 m-auto flex flex-col items-center'>
      <div className='mb-8'>
        <input
          className='border border-gray-400 rounded-md p-2 mr-2'
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={handleNameChange}
        />
        <button
          onClick={handleSubmit}
          className='border border-gray-400 rounded-md p-2'>
          Submit
        </button>
      </div>
      <p>{greeting}</p>
    </div>
  )
}
