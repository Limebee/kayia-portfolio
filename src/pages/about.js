import Navigation from '../componets/navigation.js'
import Image from 'next/image'



export default function About (){
    return(
        <div data-theme="light">
          <nav>
            <Navigation />
          </nav>
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div class="relative z-10 lg:py-16">
                   <div class="relative h-64 sm:h-80 lg:h-full">
                    <Image src="/burch.jpg" alt="woman with camera around neck" width={400}
                    height={400} class="absolute inset-0 h-full w-full object-cover" />
                  </div>
               </div>
         <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            About Kayia Burch
          </h2>

          <p class="mt-4 text-gray-600">
          I'm a Brooklyn-based photographer who specializes in fashion and beauty. 
          You might have seen my work in various editorial spreads for renowned magazines. 
          Over the years, I have also had the opportunity to collaborate with several esteemed beauty and fashion brands. 
          Excited to continue my journey in capturing the symbiotic relationship between style and aesthetics through my lens. 
          Let's create something beautiful together.
          </p>
        </div>
               </div>
            </div>
      </div>

    )
}