import './App.css'
import Title from "./components/Title"
import Counter from './components/Counter'
import NovoAno from './assets/ffff.jpg'
import useCountdown from './hooks/useCountdown'
function App() {
  const [days, hours, minutes, second] = useCountdown("dec 5, 2024 00:00")

  return (
   <div className="App" style={{backgroundImage: `url(${NovoAno})`}}>
    <div className="container">
      <Title title="Contagem regressiva para 1 ano de namoro" />
      <div className="countdown-container">
        <Counter title={'Dias'} number={days}/>
        <Counter title={'horas'} number={hours}/>
        <Counter title={'minutos'} number={minutes}/>
        <Counter title={'segundos'} number={second}/>
      </div>
    </div>
   </div>
  )
}

export default App
