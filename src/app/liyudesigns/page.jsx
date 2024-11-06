import HeadingText from "@/components/HeadingText";
import Image from "next/image";

export default function Designs() {
  return (
    <>
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-6">  
            <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <HeadingText className="text-5xl font-extrabold text-center text-gray-900 mb-12">
              Variety of <span className='text-blue-600'>Designs</span> <br/> for  <span className='text-blue-600'>Every Need.</span>
            </HeadingText>
            <p className="text-center text-gray-600 mb-12">
              Discover our collection tailored for different users, including kids, women, men, and hotels.<br/> Each design blends style with functionality, ensuring everyone stays covered in comfort and elegance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Kids */}
              <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden">
                <Image src="/kid.jpg" alt="Kids Umbrella" width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-600">Kids' Collection</h3>
                  <p className="text-gray-600 mt-2">Bright, playful designs that kids will love, with added durability for everyday adventures.</p>
                </div>
              </div>

              {/* Women */}
              <div className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden">
                <Image src="/woman.jpg" alt="Women's Umbrella" width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-600">Women's Collection</h3>
                  <p className="text-gray-600 mt-2">Elegant and stylish umbrellas that complement any outfit, perfect for fashion-conscious women.</p>
                </div>
              </div>

              {/* Men */}
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image src="/men.jpg" alt="Men's Umbrella" width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-600">Men's Collection</h3>
                  <p className="text-gray-600 mt-2">Sleek and robust designs tailored for the modern man, combining functionality with timeless style.</p>
                </div>
              </div>

              {/* Hotels */}
              <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
                <Image src="/hotel.jpg" alt="Hotel Umbrella" width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-600">Hotel Collection</h3>
                  <p className="text-gray-800 mt-2">Premium designs for luxury hotels, providing guests with comfort and sophistication during their stay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>
      </main>
    </>
  );
}
