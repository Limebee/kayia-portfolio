import Navigation from '../componets/navigation.js'
import Image from 'next/image'

function Gallery () {
    return(
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image className=''
              src='/fashion-photo/f1.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2 object-fill">
              <Image 
              src='/fashion-photo/f2.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f3.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f4.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f5.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f6.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f7.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f8.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f9.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f10.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f11.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f12.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <section className="w-full p-1 md:p-2">
              <Image 
              src='/fashion-photo/f13.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
              height={500} />
            </section>
          </div>
         </div>          
          </div>
    )
  }



export default function Fashion () {
    return(
        <section>
            <Navigation />
            <Gallery />
        </section>

    );
}


