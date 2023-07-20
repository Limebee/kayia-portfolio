import Navigation from '../componets/navigation.js'
import Image from 'next/image'


function Gallery () {
    return(
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g1.jpg' alt="close up of woman with red eyeshadow holding her face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g4.jpg' alt="woman with fur hat holding her face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g5.jpg' alt="close up of woman holding plants close to face  "  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g8.jpg' alt="close up of woman with strong makeupo"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g12.jpg' alt="woman with stripped gloves holding face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g16.jpg' alt="woman with sheer glitter fabric over face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g20.jpg' alt="close up of woman with wet hair posing"  width={500}
                    height={500} />
                </section>
                </div>
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g2.jpg' alt="close up of woman with a shadow of a plant on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g6.jpg' alt="woman looking up with flower close to face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g9.jpg' alt="close up of woman wearing pearls and dark makeup"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g13.jpg' alt="woman with gradient lipstick closed eyes"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g15.jpg' alt="close up of women with strong makeup"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g18.jpg' alt="woman wearing large hat posing"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g21.jpg' alt="woman with bright eyeshadow and long hair glaring"  width={500}
                    height={500} />
                </section>
                </div>
                <div className="flex w-1/3 flex-col">
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g3.jpg' alt="close up of woman with eyeliner and closed eyes"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g7.jpg' alt="woman with face paint with a shadow over her face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g11.jpg' alt="closed eyed woman with long nails posing"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g14.jpg' alt="close up of woman with dark eye shadow and light lip stick posing"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g17.jpg' alt="woman with strong make up and yellow light on face"  width={500}
                    height={500} />
                </section>
                <section className="w-full p-1 md:p-2">
                    <Image className=''
                    src='/glamour-photo/g19.jpg' alt="woman with black stocking piece over head"  width={500}
                    height={500} />
                </section>
                </div>
            </div>
        </div>
          
          
    );
}



export default function Glamour () {
    return(
        <section data-theme="light">
            <Navigation />
            <Gallery />
        </section>

    );
}