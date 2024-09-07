import React from 'react'
import NavBar from '../components/navBar/NavBar'
import TopImage from '../components/topImage/TopImage'
import CompanyOverview from '../components/companyOverviewComponents/CompanyOverview'
import Services from '../components/servicesComponents/Services'
import ITSupport from '../components/itSupport/ITSupport'
import FeedBack from '../components/feedback/FeedBack'
import CompanyVideo from '../components/companyVideo/CompanyVideo'
import TechnologicalObstacles from '../components/technologicalObstacles/technologicalObstacles'

const page = () => {
  return (
    <div>
      <NavBar/>
      <TopImage/>
      <CompanyOverview/>
      <Services/>
      <ITSupport/>
      {/* <FeedBack/> */}
      <CompanyVideo/>
      <TechnologicalObstacles/>
    </div>
  )
}

export default page
