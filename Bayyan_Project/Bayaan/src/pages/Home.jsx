import HeroSlider from '../components/HeroSlider'
import Destination from '../components/Destination'
import Trip from '../components/Trip'

function Home() {
  return (
    <div className="space-y-10">
      <HeroSlider />
      <Destination />
      <Trip />
    </div>
  )
}

export default Home
