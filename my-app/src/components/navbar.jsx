import { Bell, Search, User } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="bg-primary clip-path-slant">
      <div className="container flex h-24 items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">Amazon Oppertunity Tracker</span>
        </Link>
        <nav className="ml-8 hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-secondary transition-colors">Dashboard</Link>
          <Link href="#" className="text-white hover:text-secondary transition-colors">Analytics</Link>
          <Link href="#" className="text-white hover:text-secondary transition-colors">Products</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

