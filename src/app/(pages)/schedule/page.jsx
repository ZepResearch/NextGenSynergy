import React from 'react'
import Schedule from './Content'

import { scheduleMetadata } from '@/components/metadata'
export const metadata = scheduleMetadata
function page() {
  return (
    <div>
      <Schedule/>
    </div>
  )
}

export default page
