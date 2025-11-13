'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-xl text-white/70 mb-8">An error occurred while loading this page.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

