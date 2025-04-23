import React from 'react'
import IACommitte from './components/IACommitte'
import ScientificCommittee from './components/ScientificCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'
import { committeeMetadata } from '@/components/metadata'
export const metadata = committeeMetadata
function page() {
  return (
    <div><h1></h1>
         <OrganizingCommittee/>
        {/*
        <ScientificCommittee/>   
        <IACommitte/>
        */}
    </div>
  )
}

export default page