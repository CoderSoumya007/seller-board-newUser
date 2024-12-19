import { Navbar } from "@/components/navbar"
import { SearchForm } from "@/components/search-form"
import { SearchResults } from "@/components/search-results"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Amazon Opportunities</h1>
        <div className="max-w-6xl mx-auto mb-12">
          <SearchForm />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Top Opportunities</h2>
        <SearchResults />
      </main>
    </div>
  )
}

