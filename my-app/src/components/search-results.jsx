import { Star, TrendingUp, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SearchResults() {
  const results = [
    {
      id: 1,
      title: "Wireless Bluetooth Earbuds",
      price: 49.99,
      rating: 4.5,
      sales: 1500,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Smart Home Security Camera",
      price: 79.99,
      rating: 4.2,
      sales: 980,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "Portable Power Bank 20000mAh",
      price: 39.99,
      rating: 4.7,
      sales: 2200,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <div key={result.id} className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
          <img src={result.image} alt={result.title} className="w-full h-48 object-cover" />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">{result.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">${result.price}</span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">{result.rating}</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>{result.sales} sales</span>
            </div>
            <Button className="w-full mt-2">
              <DollarSign className="w-4 h-4 mr-2" />
              View Opportunity
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

