import React from 'react'
import PapersFormat from './Content'

import { papersFormatMetadata } from '@/components/metadata'
export const metadata = papersFormatMetadata
function page() {
  return (
    <div>
      <PapersFormat/>
    </div>
  )
}

export default page
