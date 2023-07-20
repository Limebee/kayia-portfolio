import Navigation from '../componets/navigation.js'
import Image from 'next/image'



function Gallery () {
  return(
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/3 flex-col">
          <section className="w-full h-full object-cover p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f2.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b3.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g4.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f5.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b6.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g7.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f8.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b9.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g10.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f11.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
        </div>
        <div className="flex w-1/3 flex-col">
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b12.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g13.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f14.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b15.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g16.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f17.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b18.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/glamour-photo/g19.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
        </div>
        <div className="flex w-1/3 flex-col">
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f20.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b21.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f27.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f23.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b24.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b25.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/fashion-photo/f26.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
          <section className="w-full p-1 md:p-2">
            <Image className=''
            src='/beauty-photo/b27.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
            height={500} />
          </section>
        </div>
       </div>          
        </div>
  )
}


export default function Home() {
  return(
    <section data-theme="light">
    <Navigation />
    <Gallery />
    </section>
  );
  
}
