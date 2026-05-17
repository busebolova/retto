"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>

            <h1 className="text-2xl font-light text-center mb-2">Bir şeyler yanlış gitti</h1>

            <p className="text-white/70 text-center mb-6 text-sm">
              Endişelenmeyin, bu geçici bir sorun olabilir. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm"
              >
                <RefreshCw size={16} />
                <span>Sayfayı Yenile</span>
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 font-medium text-sm"
              >
                <Home size={16} />
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
