import { decrement, increment } from './counterSlice'
import { useAppDispatch, useAppSelector } from './hooks'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className='border-blue-600 border-2 p-6'>
      <button
        className='bg-blue-100'
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        className='bg-red-400'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}
