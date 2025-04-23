import React from 'react'
import Awards from './Content'
import { awardsMetadata } from '@/components/metadata'
export const metadata = awardsMetadata
function page() {
  return (
    <div>
      <Awards/>
    </div>
  )
}

export default page
