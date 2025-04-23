import React from 'react'
import Venue from './Content'
import { venueMetadata } from '@/components/metadata';


export const metadata = venueMetadata;
function page() {
  return (
    <div>
      <Venue/>
    </div>
  )
}

export default page
