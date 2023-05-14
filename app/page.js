import Photo from './components/main/Photo'
import ContactDetails from './components/main/Contact-details'
import MainText from './components/main/Main-text'
import SpecializationsMenu from './components/main/Specializations-menu'

export default function Home() {

  return (
    <div className='grid grid-flow-col justify-between border gap-20 border-blue-600 '>
      <div>
        <Photo />
        <ContactDetails />
      </div>
      <div>
        <MainText />
      </div>
      <div>
        <SpecializationsMenu />
      </div>
    </div>
  )
}
