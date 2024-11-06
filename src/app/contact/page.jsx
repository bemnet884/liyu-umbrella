export default function Contact() {
  return (
    <>
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Contact Us</h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Have questions or need assistance? Get in touch with us.
          </p>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
