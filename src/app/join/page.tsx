'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function JoinPage() {
  const router = useRouter()

  useEffect(() => {
    window.location.href = 'https://www.reformuk.com/join'
  }, [])

  return null
}
