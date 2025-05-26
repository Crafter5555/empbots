import { Bot, CircuitBoard, MessageSquare, Users, ChevronRight, Clock, Shield, Sparkles, FileText, NotebookPen, CheckCircle, Gem, Workflow, PenTool, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dvxabjzow/image/upload/v1739909640/EMP-logo_qr16ui.png" alt="EMP Bots Logo" className="h-12 w-auto glow"/>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-[#00f2fe] transition-colors">About</a>
          <a href="#services" className="hover:text-[#00f2fe] transition-colors">Services</a>
          <a href="#pricing" className="hover:text-[#00f2fe] transition-colors">Pricing</a>
          <button className="bg-[#00f2fe] text-black px-6 py-2 rounded-full hover:bg-[#00d2de] transition-colors font-semibold hover-glow">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f2fe] text-glow">
              Take Your Business To The Next Level With AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Transform your business with our advanced AI solutions. We will save you hundreds of hours,
              enhance your customer engagement, and most importantly, maximize your profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00f2fe] to-[#00d2de] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20 glow">
                Get Started Free <ChevronRight size={20} />
              </button>
              <button className="border-2 border-[#00f2fe] text-[#00f2fe] px-8 py-4 rounded-full font-semibold hover:bg-[#00f2fe] hover:text-black transition-all duration-300 hover-glow">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <CircuitBoard className="w-16 h-16 text-[#00f2fe] mx-auto mb-6 animate-pulse glow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f2fe] text-glow">
              Why us?
            </h2>
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              EMP Bots specializes in creating AI agents and systems that help businesses increase customer engagement and revenue, while reducing costs and saving time. Our services are the easiest gateway to staying ahead during this AI revolution. Commitment to customer success drives everything we do.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <Clock className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock assistance for your needs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <Gem className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Service Quality</h3>
              <p className="text-gray-400">Optimal products for your specific needs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <Sparkles className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Best Pricing</h3>
              <p className="text-gray-400">Competitive rates for premium AI solutions</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <Shield className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">14-Day Free Trial</h3>
              <p className="text-gray-400">Test our solutions risk-free for two weeks</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <NotebookPen className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Free AI Marketing Strategy</h3>
              <p className="text-gray-400">All plans include a free marketing strategy</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#00f2fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00f2fe]/20 transition-all duration-300 glow">
                <CheckCircle className="w-8 h-8 text-[#00f2fe]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Satisfaction Guarantee</h3>
              <p className="text-gray-400">If you don't get results, you don't pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f2fe] text-glow">Our Services</h2>
          
          {/* Chatbots Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#00f2fe] text-glow">Chatbots</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <MessageSquare className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">Customer Service Bot</h3>
                <p className="text-gray-400 mb-6">Automated customer support that handles issues and questions 24/7</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€500 one-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Plan</span>
                    <span className="text-[#00f2fe]">€100/month</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <Users className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">Lead Generation + Appointment Setter Bot</h3>
                <p className="text-gray-400 mb-6">Find prospects and automatically book appointments with AI-powered lead generation</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€500 one-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Plan</span>
                    <span className="text-[#00f2fe]">€100/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Creation Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#00f2fe] text-glow">Content Creation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <PenTool className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">AI Content Writer</h3>
                <p className="text-gray-400 mb-6">Generate high-quality, SEO-optimized content for your business</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€300/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro Plan</span>
                    <span className="text-[#00f2fe]">€500/month</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <FileText className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">Social Media Manager</h3>
                <p className="text-gray-400 mb-6">Automsted social media posting and message management</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro Plan</span>
                    <span className="text-[#00f2fe]">€400/month</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <Youtube className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">YouTube Package</h3>
                <p className="text-gray-400 mb-6">Full-service YouTube content creation with AI-powered scripting and optimization</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€800/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro Plan</span>
                    <span className="text-[#00f2fe]">€1500/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Automation Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#00f2fe] text-glow">Workflow Automation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <Workflow className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">Process Automation</h3>
                <p className="text-gray-400 mb-6">Streamline your business processes with intelligent automation</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€1000 one-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Plan</span>
                    <span className="text-[#00f2fe]">€200/month</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow">
                <CircuitBoard className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-glow">Integration Solutions</h3>
                <p className="text-gray-400 mb-6">Connect your tools and automate data flow between systems</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basic Plan</span>
                    <span className="text-[#00f2fe]">€800 one-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Plan</span>
                    <span className="text-[#00f2fe]">€150/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="mt-12">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00f2fe]/30 transition-all duration-300 group hover-glow max-w-2xl mx-auto">
              <Bot className="w-12 h-12 text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-glow">Custom Solutions</h3>
              <p className="text-gray-400 mb-6">Need something specific? We'll create a custom AI solution tailored to your unique business requirements</p>
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-[#00f2fe] to-[#00d2de] text-black px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold glow">
                  Contact for Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Plan Banner */}
      <div className="bg-[#00f2fe]/10 py-4 border-y border-[#00f2fe]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <FileText className="w-10 h-10 text-[#00f2fe]" />
            <p className="text-lg">
              <span className="font-semibold text-[#00f2fe]">Free AI Marketing Plan</span> with every service subscription (including free trials)
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f2fe] text-glow">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Start your 14-day free trial today and experience the power of AI-driven automation. 
              Plus, get a free AI marketing plan to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00f2fe] to-[#00d2de] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20 glow">
                Start Your Free Trial <ChevronRight size={20} />
              </button>
              <button className="border-2 border-[#00f2fe] text-[#00f2fe] px-8 py-4 rounded-full font-semibold hover:bg-[#00f2fe] hover:text-black transition-all duration-300 hover-glow">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="https://res.cloudinary.com/dvxabjzow/image/upload/v1739909640/EMP-logo_qr16ui.png" alt="EMP Bots Logo" className="h-12 w-auto"/>
            </div>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-400 hover:text-[#00f2fe] transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-[#00f2fe] transition-colors">Services</a>
              <a href="#pricing" className="text-gray-400 hover:text-[#00f2fe] transition-colors">Pricing</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 EMP Bots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;