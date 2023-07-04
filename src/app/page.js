import photo from './one.jpg'


function Navigation () {
  return(
    <nav class="flex justify-center">
      <aside class="flex-col">
      <section class="flex justify-center pt-10 pb-10">
      <h1>Kayia Burch</h1>
      </section>
        <ul class="flex flex-row gap-16">
          <li>Overview</li>
          <li>Fashion</li>
          <li>Beauty</li>
          <li>Glamour</li>
          <li>Contact</li>
        </ul>
        <img src={photo} alt='woman'/>
      </aside>
    </nav>
  );
}

export default function Home() {
  return(
    <section>
    <Navigation />
    
    </section>
  );
  
}
