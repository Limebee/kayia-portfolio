import Navigation from '../componets/navigation.js'
import Link from 'next/link'



export default function Contact () {
    return(
        <section>
            <Navigation />
            <div className="flex justify-center pt-20">
                <div className=''>
                    <div className=''>
                        <section className='pb-10 flex justify-center'>
                            <h1>
                                Contact
                            </h1>
                        </section>
                    </div>
                </div>
            </div>
            <div className="grid-cols-1 flex justify-center gap-8">
                <section className="gap-4">
                    
                    <div className="p-10">
                    <h2 className="pb-10">General Inquires</h2>
                    <Link href="#"><p>info@kayiaburch.com</p></Link>
                    </div>
                    <div className="p-10">
                        <h2 className="pb-10">Instagram</h2>
                        <Link href="#"><p>kayiaburch.O</p></Link>
                    </div>
                
                </section>
            </div>
        </section>

    );
}