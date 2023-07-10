import Link from 'next/link'
import '../app/globals.css'
import '../app/page.js'


export default function Navigation () {
    return(
      <nav className="flex justify-center">
      <section className="flex-col">
      <section className="flex justify-center pt-10 pb-10">
      <h1>Kayia Burch</h1>
      </section>
        <ul className="flex flex-row gap-16 pb-10">
          <li>
          <Link href="/">Overview</Link>
            </li>
          <li>
            <Link href="/fashion">Fashion</Link>
          </li>
          <li>
          <Link href="/beauty">Beauty</Link>
          </li>
          <li>
          <Link href="/glamour">Glamour</Link>
            </li>
          <li>
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
    );
  }