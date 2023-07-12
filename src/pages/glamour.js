import Navigation from '../componets/navigation.js'
import Image from 'next/image'


function Gallery () {
    return(
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g1.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g4.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g5.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g8.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g12.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g16.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g20.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                </div>
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g2.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g6.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g9.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g13.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g15.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g18.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g21.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                </div>
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g3.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g7.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g11.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g14.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g17.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g19.jpg' alt="woman holding foundation tube with dots of makeup on face"  width={500}
                    height={500} />
                </section>
                </div>
            </div>
        </div>
          
          
    );
}



export default function Glamour () {
    return(
        <section>
            <Navigation />
            <Gallery />
        </section>

    );
}