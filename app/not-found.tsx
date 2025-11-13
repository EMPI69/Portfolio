export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page Not Found</p>
        <a
          href="/"
          className="text-purple-400 hover:text-purple-300 text-lg transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

