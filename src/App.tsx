import { Provider } from 'react-redux'
import './App.css'
import { DiscordInterview } from './DiscordInterview'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <DiscordInterview />
      </Provider>
    </>
  )
}

export default App
