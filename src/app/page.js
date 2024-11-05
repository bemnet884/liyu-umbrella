import Head from 'next/head';
import { Button } from '@shadcn/ui';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovative Umbrella</title>
        <meta name="description" content="Experience the most advanced umbrella with cutting-edge technology, durability, and style." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Revolutionize Your Rainy Days</h1>
            <p className="text-lg mb-6">Discover the world's most innovative umbrella designed for ultimate protection, smart features, and style.</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-200 px-8 py-3">Order Now</Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white text-gray-700">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">About Our Innovative Umbrella</h2>
            <p className="text-center mb-8">Our umbrella combines cutting-edge technology with modern design to provide unparalleled protection from the elements. Built with high-grade materials, it ensures durability and convenience, making it the perfect companion for any weather condition.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/durability.svg" alt="Durability" className="mx-auto w-16 mb-4" />
                <h3 className="text-xl font-semibold">Superior Durability</h3>
                <p>Engineered to withstand the toughest conditions.</p>
              </div>
              <div className="text-center">
                <img src="/images/technology.svg" alt="Technology" className="mx-auto w-16 mb-4" />
                <h3 className="text-xl font-semibold">Smart Technology</h3>
                <p>Integrated sensors for weather updates and more.</p>
              </div>
              <div className="text-center">
                <img src="/images/style.svg" alt="Style" className="mx-auto w-16 mb-4" />
                <h3 className="text-xl font-semibold">Stylish Design</h3>
                <p>Modern aesthetics for the fashion-forward user.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <img src="/images/windproof.svg" alt="Windproof" className="w-12" />
                <div>
                  <h3 className="text-xl font-semibold">Windproof Design</h3>
                  <p>Withstands powerful winds without flipping inside out.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/images/lightweight.svg" alt="Lightweight" className="w-12" />
                <div>
                  <h3 className="text-xl font-semibold">Lightweight and Compact</h3>
                  <p>Easy to carry and store, perfect for on-the-go users.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/images/water-resistant.svg" alt="Water Resistant" className="w-12" />
                <div>
                  <h3 className="text-xl font-semibold">Advanced Water Resistance</h3>
                  <p>Superior protection to keep you dry at all times.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/images/auto-open-close.svg" alt="Auto Open/Close" className="w-12" />
                <div>
                  <h3 className="text-xl font-semibold">Automatic Open/Close</h3>
                  <p>Convenience at the push of a button.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                <p className="italic mb-4">"This umbrella has been a lifesaver! It’s incredibly durable and the smart features are so handy."</p>
                <h4 className="font-bold">- Jessica T.</h4>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                <p className="italic mb-4">"I’ve never seen an umbrella like this. Stylish, tech-savvy, and it works perfectly in rough weather!"</p>
                <h4 className="font-bold">- Michael B.</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Yours Today!</h2>
            <p className="text-lg mb-8">Don’t miss out on the umbrella that’s transforming the way we face the rain.</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-200 px-8 py-3">Shop Now</Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-8">Have any questions or need assistance? We’re here to help.</p>
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
              <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg" rows="5"></textarea>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-blue-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Innovative Umbrella. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
