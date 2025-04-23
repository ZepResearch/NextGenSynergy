



import React from 'react'

import { paymentMetadataFailed } from '@/components/metadata'
import PaymentFailedPage from './Content'

export const metadata = paymentMetadataFailed
function Content() {
  return (
    <div>
      <PaymentFailedPage/>
    </div>
  )
}

export default Content
