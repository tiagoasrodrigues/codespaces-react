import { Button } from '../Components/Button'
import './style.css'

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <Button />
      </header>
    </div>
  )
};