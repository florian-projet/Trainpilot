'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">TrainPilot</h1>
        <p className="text-gray-600 mb-6">Bienvenue sur votre plateforme de coaching</p>
        <a 
          href="/login" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Se connecter
        </a>
      </div>
    </div>
  )
}