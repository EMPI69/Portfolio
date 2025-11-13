'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Something went wrong!</h2>
            <p className="text-xl text-white/70 mb-8">A global error occurred.</p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

