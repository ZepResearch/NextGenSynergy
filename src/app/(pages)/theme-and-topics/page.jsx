import React from 'react'
import ThemeAndTopics from './Content'
import { themesTopicsMetadata } from '@/components/metadata';


export const metadata = themesTopicsMetadata;
function page() {
  return (
    <div>
      <ThemeAndTopics/>
    </div>
  )
}

export default page
