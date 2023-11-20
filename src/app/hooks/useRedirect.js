'use client'

import { useRouter } from 'next/navigation'

const useRedirect = () => {
  const router = useRouter()

  const redirectToUrl = (url) => router.push(url)
  return {
    redirectToUrl,
  }
}

export default useRedirect
