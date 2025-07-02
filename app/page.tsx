import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle, TrendingUp, Zap, Shield, Users, Star, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Reezo
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Success Stories
              </a>
              <a href="#demo" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Demo
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white shadow-lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-blue-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Shopify Assistant
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Shopify Store
              </span>
              <br />
              with AI Conversations
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Boost sales by 40% with intelligent AI that engages customers, answers questions instantly, and converts
              visitors into buyers 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">40%</div>
              <div className="text-slate-600">Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">85%</div>
              <div className="text-slate-600">Query Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">10K+</div>
              <div className="text-slate-600">Happy Merchants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Shopify Merchants Choose Reezo</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI doesn't just chat—it sells, supports, and scales your business automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Intelligent Conversations</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI that understands your products, inventory, and customer needs to provide personalized
                  recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sales Optimization</h3>
                <p className="text-slate-600 leading-relaxed">
                  Automatically upsell, cross-sell, and recover abandoned carts with smart AI-driven strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bank-grade security with GDPR compliance and data encryption to protect your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Multi-Language Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Serve customers globally with AI that speaks 50+ languages fluently and culturally aware.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Setup</h3>
                <p className="text-slate-600 leading-relaxed">
                  One-click Shopify integration. Your AI assistant is ready to serve customers in under 5 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Deep insights into customer behavior, conversation analytics, and ROI tracking dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Shopify Store?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful merchants who've increased their sales with Reezo's AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Reezo</span>
              </div>
              <p className="text-slate-400 mb-6">
                Empowering Shopify merchants with intelligent AI conversations that drive sales and delight customers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@reezo.ai</li>
                <li>1-800-REEZO-AI</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2024 Reezo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
