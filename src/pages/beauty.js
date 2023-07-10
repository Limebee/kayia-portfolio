import Navigation from '../componets/navigation.js'
import Image from 'next/image'



function Gallery () {
    return(
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/beauty-photo/b1.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2 object-fill">
              <Image 
              src='/beauty-photo/b2.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b3.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b4.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b5.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b6.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b7.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b8.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b9.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b10.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b11.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/beauty-photo/b12.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
         </div>          
          </div>
    )
  }



export default function Beauty () {
    return(
        <section>
            <Navigation />
            <Gallery />
        </section>

    );
}