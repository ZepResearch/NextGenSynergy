import React from 'react'
import JournalsPage from './Content'
import { journalsMetadata } from '@/components/metadata'

export const metadata = journalsMetadata

function page() {
  return (
    <div>
      <JournalsPage/>
    </div>
  )
}

export default page
