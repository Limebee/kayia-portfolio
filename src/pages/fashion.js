import Navigation from '../componets/navigation.js'
import Image from 'next/image'

function Gallery () {
    return(
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-col">
            <section className="w-full h-full object-cover p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f1.jpg' alt="woman in a suit standing on rocks"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f8.jpg' alt="woman on her hand gazing up"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f22.jpg' alt="woman sitting in a wooden crate posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f9.jpg' alt="man with black top glaring"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f3.jpg' alt="man with black pants with leg in the air"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f4.jpg' alt="two women sitting with large purses"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f15.jpg' alt="man leaning on wood house posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f18.jpg' alt="two women posing in the city"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f21.jpg' alt="woman with sequin dress laying down"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f24.jpg' alt="two women posing in a contrete room"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-col">
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f2.jpg' alt="man in a hat and long jacket posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f29.jpg' alt="man in dress shirt and pants posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f5.jpg' alt="woman in a suit sitting and posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f7.jpg' alt="woman in bra and leggings sitting and posing "  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f12.jpg' alt="man with a cropped jacket and short with leg up"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f16.jpg' alt="women in over sized suit standing and posing in front of pillows"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f19.jpg' alt="woman with suit and sunglasses"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f25.jpg' alt="woman posing on fallen tree"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-col">
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f28.jpg' alt="lowshot of woman with sun glasses"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f23.jpg' alt="woman in a dress shirt posing "  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f13.jpg' alt="woman siting in a tree posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f26.jpg' alt="woman in swimsuit by a pool posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f6.jpg' alt="woman in suit with hat and sunglasse posing over stairs"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f14.jpg' alt="woman in dress and gloves posing on chair"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f17.jpg' alt="man with long hair posing"  width={500}
              height={500} />
            </section>
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f20.jpg' alt="man with flower crown posing"  width={500}
              height={500} />
            </section>
          </div>
         </div>          
          </div>
    )
  }



export default function Fashion () {
    return(
        <section data-theme="light">
            <Navigation />
            <Gallery />
        </section>

    );
}


