'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, ThumbsUp, MessageSquare, Filter, TrendingUp, Award, Users, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Android Developer',
      avatar: 'JD',
      rating: 5,
      date: '2 days ago',
      helpful: 245,
      verified: true,
      comment: 'Best AAB to APK converter I\'ve ever used! Lightning fast and super reliable. Saved me hours of work. The optimization feature is incredible and the API documentation is top-notch.'
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'Mobile App Developer',
      avatar: 'SM',
      rating: 5,
      date: '5 days ago',
      helpful: 189,
      verified: true,
      comment: 'Professional tool with amazing features. The API integration is seamless. Highly recommended for any Android dev! Customer support is also very responsive.'
    },
    {
      id: 3,
      name: 'Alex Kumar',
      role: 'Indie Developer',
      avatar: 'AK',
      rating: 5,
      date: '1 week ago',
      helpful: 156,
      verified: true,
      comment: 'Game changer! No more complex command-line tools. Simple, fast, and it just works. Love the dark mode too! Perfect for my workflow.'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Tech Lead',
      avatar: 'MC',
      rating: 5,
      date: '1 week ago',
      helpful: 203,
      verified: true,
      comment: 'Incredible tool! Converted 50+ apps without a single issue. The optimization feature is a lifesaver. Highly recommend for production use.'
    },
    {
      id: 5,
      name: 'Emma Rodriguez',
      role: 'DevOps Engineer',
      avatar: 'ER',
      rating: 5,
      date: '2 weeks ago',
      helpful: 178,
      verified: true,
      comment: 'Perfect for our CI/CD pipeline. The API is well-documented and super easy to integrate. 10/10! Saves us so much time in our deployment process.'
    },
    {
      id: 6,
      name: 'David Park',
      role: 'Freelance Developer',
      avatar: 'DP',
      rating: 5,
      date: '2 weeks ago',
      helpful: 134,
      verified: false,
      comment: 'Amazing service! Free tier is generous and the pro features are worth every penny. The conversion speed is unmatched.'
    },
    {
      id: 7,
      name: 'Lisa Wang',
      role: 'Android Engineer',
      avatar: 'LW',
      rating: 4,
      date: '3 weeks ago',
      helpful: 98,
      verified: true,
      comment: 'Great tool overall. Very reliable and fast. Would love to see more customization options in the future. Still highly recommended!'
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'App Developer',
      avatar: 'JW',
      rating: 5,
      date: '3 weeks ago',
      helpful: 167,
      verified: true,
      comment: 'This tool is a must-have for any Android developer. The UI is beautiful and intuitive. Support team is fantastic!'
    }
  ]

  const stats = {
    totalReviews: 1247,
    averageRating: 4.9,
    fiveStars: 1156,
    fourStars: 78,
    threeStars: 9,
    twoStars: 3,
    oneStars: 1
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">User Reviews</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">See what developers around the world are saying</p>
        </div>

        {/* Stats Overview */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-12 border border-violet-200/50 dark:border-violet-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">{stats.averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Based on {stats.totalReviews.toLocaleString()} reviews</p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats[`${['one', 'two', 'three', 'four', 'five'][stars - 1]}Stars` as keyof typeof stats] as number
                const percentage = (count / stats.totalReviews) * 100
                return (
                  <div key={stars} className="flex items-center space-x-2">
                    <span className="text-sm font-medium dark:text-white w-12">{stars} star</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-12">{count}</span>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200/50 dark:border-violet-700/50">
                <Users className="h-8 w-8 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
                <div className="text-2xl font-bold dark:text-white">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200/50 dark:border-indigo-700/50">
                <TrendingUp className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <div className="text-2xl font-bold dark:text-white">93%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Recommend</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="font-medium dark:text-white">Filter:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-violet-300 dark:border-violet-600 rounded-lg bg-white/80 dark:bg-gray-800/80 dark:text-white backdrop-blur-sm focus:ring-2 focus:ring-violet-500"
            >
              <option value="all">All Reviews</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="verified">Verified Only</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium dark:text-white">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-violet-300 dark:border-violet-600 rounded-lg bg-white/80 dark:bg-gray-800/80 dark:text-white backdrop-blur-sm focus:ring-2 focus:ring-violet-500"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-violet-200/50 dark:border-violet-700/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold dark:text-white">{review.name}</h3>
                      {review.verified && (
                        <span title="Verified User">
                          <CheckCircle className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{review.date}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{review.comment}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">Helpful ({review.helpful})</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">Reply</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="mt-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <Award className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg mb-6 opacity-90">Help other developers by sharing your review</p>
          <Link href="/converter" className="inline-block px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
            Write a Review
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
