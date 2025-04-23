import React from 'react'
import AboutOrganizers from './content'
import { aboutOrganizersMetadata } from '@/components/metadata'

export const metadata = aboutOrganizersMetadata
function page() {
  return (
    <div>
      <AboutOrganizers/>
    </div>
  )
}

export default page
