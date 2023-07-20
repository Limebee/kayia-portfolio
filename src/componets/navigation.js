import Link from 'next/link'
import '../app/globals.css'


export default function Navigation () {
    return(
      <div data-theme="light" className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">Overview</Link></li>
        <li><Link href="/fashion">Fashion</Link></li>
        <li><Link href="/beauty">Beauty</Link></li>
        <li><Link href="/glamour">Glamour</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-serif">Kayia Burch</a>
  </div>
  <div className="hidden w-full lg:flex">
    <ul className="menu menu-horizontal px-5 font-serif">
      <li><Link href="/">Overview</Link></li>
      <li><Link href="/fashion">Fashion</Link></li>
      <li><Link href="/beauty">Beauty</Link></li>
      <li><Link href="/glamour">Glamour</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </div>
</div>
    );
  }