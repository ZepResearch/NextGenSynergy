import React from 'react'
import PaymentSuccessPage from './Content'
import { paymentMetadataSuccess } from '@/components/metadata'

export const metadata = paymentMetadataSuccess
function page() {
  return (
    <div>
      <PaymentSuccessPage/>
    </div>
  )
}

export default page
