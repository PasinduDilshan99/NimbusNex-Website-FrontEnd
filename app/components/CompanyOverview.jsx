import React from 'react'
import CompanyOverviewContent from './companyOverviewComponents/CompanyOverviewContent'
import CompanyOverviewImages from './companyOverviewComponents/CompanyOverviewImages'

const CompanyOverview = () => {
  return (
    <div className='flex mt-16'>
      <div>
        <CompanyOverviewImages/>
      </div>
      <div>
        <CompanyOverviewContent/>
      </div>
    </div>
  )
}

export default CompanyOverview
