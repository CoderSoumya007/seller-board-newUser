"use client"

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function SearchForm() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [ratingRange, setRatingRange] = useState([0, 5])
  const [discountRange, setDiscountRange] = useState([0, 100])

  return (
    <div className="space-y-6">
      <div className="relative">
        <Input
          className="pl-12 pr-4 py-6 text-lg rounded-full shadow-lg"
          placeholder="Enter product keywords"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
        <Button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6"
          variant="default"
        >
          Search
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="text-primary font-semibold"
        >
          {isAdvancedOpen ? (
            <>Less options <ChevronUp className="ml-2 h-4 w-4" /></>
          ) : (
            <>More options <ChevronDown className="ml-2 h-4 w-4" /></>
          )}
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Marketplace:</span>
          <Select defaultValue="ae">
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ae">amazon.ae</SelectItem>
              <SelectItem value="us">amazon.com</SelectItem>
              <SelectItem value="uk">amazon.co.uk</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAdvancedOpen && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="home">Home & Kitchen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range</label>
            <div className="pt-2">
              <Slider 
                value={priceRange} 
                onValueChange={setPriceRange}
                max={1000} 
                step={1} 
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Rating</label>
            <div className="pt-2">
              <Slider 
                value={ratingRange} 
                onValueChange={setRatingRange}
                max={5} 
                step={0.1} 
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{ratingRange[0]} stars</span>
              <span>{ratingRange[1]} stars</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">ASIN</label>
            <Input placeholder="Enter ASIN" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Discount Range</label>
            <div className="pt-2">
              <Slider 
                value={discountRange} 
                onValueChange={setDiscountRange}
                max={100} 
                step={1} 
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{discountRange[0]}%</span>
              <span>{discountRange[1]}%</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Best Seller Rank</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Rank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Top 100</SelectItem>
                <SelectItem value="2">Top 1000</SelectItem>
                <SelectItem value="3">Top 10000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Sales (Volume)</label>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Min Sales" />
              <Input placeholder="Max Sales" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Competitor</label>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Min" />
              <Input placeholder="Max" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

