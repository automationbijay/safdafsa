import { ArrowLeft, Clock, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: "How to Grow Your Instagram Following Organically in Nepal",
    excerpt: "Learn the proven strategies to build a genuine and engaged following on Instagram without resorting to bots or buying followers.",
    author: "Anika Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    category: "Social Media"
  },
  {
    id: 2,
    title: "Monetization Strategies for Nepali Content Creators",
    excerpt: "Discover various ways to turn your passion into profit through content creation, from brand collaborations to digital products.",
    author: "Raj Thapa",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80",
    category: "Business"
  },
  {
    id: 3,
    title: "Building Your Personal Brand in Nepal's Digital Space",
    excerpt: "A comprehensive guide to establishing and maintaining a strong personal brand in Nepal's growing digital landscape.",
    author: "Priya Gurung",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    category: "Personal Branding"
  }
]

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center text-white hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Influencer Marketing Blog</h1>
          <p className="text-xl text-gray-100">
            Latest insights, tips, and trends in influencer marketing
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
