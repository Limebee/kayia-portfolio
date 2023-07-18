import Navigation from '../componets/navigation.js'
import Image from 'next/image'



export default function About (){
    return(
        <div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
        </div>
      </div>
      </div>
      </div>

    )
}