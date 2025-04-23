import React from 'react'
import ModeOfPresentation from './content'
import { presentationModeMetadata } from '@/components/metadata'


export const metadata = presentationModeMetadata
function page() {
  return (
    <div>
      <ModeOfPresentation/>
    </div>
  )
}

export default page
