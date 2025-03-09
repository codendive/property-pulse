import Hero from '@/components/Hero'
import HomeProperties from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default HomePage
