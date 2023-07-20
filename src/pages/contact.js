import Navigation from '../componets/navigation.js'
import Link from 'next/link'



 function Info() {
    return(
        <section className='min-h-screen'> 
            <div className="">
                <div className=''>
                    <div className=''>
                        <section className='pb-10 pt-10 flex justify-center'>
                            <h1 className="font-serif text-lg">
                                Contact
                            </h1>
                        </section>
                    </div>
                </div>
            </div>
            <div className="grid-cols-1 flex justify-center gap-8">
                <section className="gap-4">
                    
                    <div className="p-10">
                    <h2 className="pb-10 font-serif">General Inquires</h2>
                    <Link href="#"><p className="font-serif">info@kayiaburch.com</p></Link>
                    </div>
                    <div className="p-10 border-t-2 border-black">
                        <h2 className="pb-10 font-serif">Instagram</h2>
                        <Link href="#"><p className="font-serif">kayiaburch.O</p></Link>
                    </div>
                
                </section>
            </div>
        </section>

    );
}



export default function Contact () {
    return(
       <section data-theme="light" >
       <Navigation />
       <Info />
       </section>
    )
}