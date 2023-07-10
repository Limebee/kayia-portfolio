import Navigation from '../componets/navigation.js'


function Gallery () {
  return(
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-10">
      <section className="">
        <img className="bg-white transition duration-300 ease-in-out hover:opacity-40" src="../fashion-photo/f8.jpg" alt='woman wearing pink dress and green jacket posing'/>
       <img className="transform hover:scale-105 duration-500 ease-in-out" src="../beauty-photo/b1.jpg" alt='woman holding foundation tube with dots of makeup on face'/>
        <img className="transform hover:scale-105 duration-500 ease-in-out" src="../glamour-photo/g1.jpg" alt='woman with red eyeshadow around the eyes'/>
        <img className="transform hover:scale-105 duration-500 ease-in-out" src="../beauty-photo/b2.jpg" alt='woman applying purple lipstick'/>
        <img className="transform hover:scale-105 duration-500 ease-in-out" src="../fashion-photo/f1.jpg" alt='woman wearing suit standing on rocks'/>
        <img className="transform hover:scale-105 duration-500 ease-in-out" src="../glamour-photo/g2.jpg" alt='woman with shadows of plants on face'/>
        <img className="transform hover:scale-105 duration-500 ease-in-out" src="../fashion-photo/f11.jpg" alt='one woman standing and another woman sitting in the sand'/>
        </section>
      <section className="">
        <img src="../beauty-photo/b3.jpg" alt='women with a towel on head applying lip balm'/>
        <img src="../fashion-photo/f3.jpg" alt='topless man with black pants doing a kicking pose'/>
        <img src="../glamour-photo/g3.jpg" alt='black and white closeup of woman with closed eyes'/>
        <img src="../beauty-photo/b4.jpg" alt='woman in white shirt applying red lipstick'/> 
        <img src="../beauty-photo/b5.jpg" alt='woman applying mascara'/>
        <img src="../glamour-photo/g8.jpg" alt='woman with dramatic makeup looking forward'/>
        <img src="../fashion-photo/f10.jpg" alt='women with sunglasses sitting in front of a shop'/>

        </section>
      <section className="">
        <img src="../fashion-photo/f4.jpg" alt='two women sitting with large purses'/>
        <img src="../glamour-photo/g5.jpg" alt='woman with a flower close to face'/>
        <img src="../beauty-photo/b6.jpg" alt='closeup of man with dots of foundation on face'/> 
        <img src="../fashion-photo/f5.jpg" alt='woman with a suit posing in a chair'/> 
        <img src="../fashion-photo/f6.jpg" alt='woman in pink suit posing on stairs'/>
        <img src="../beauty-photo/b9.jpg" alt='woman holding small makeup products in front of blue background'/>
        <img src="../glamour-photo/g9.jpg" alt='woman with pearl necklace and dark red lipstick'/>
     
      </section> 
      <section className="">
          <img src="../fashion-photo/f7.jpg" alt='woman in black outfit posing'/>
          <img src="../glamour-photo/g6.jpg" alt='woman with a flower looking away'/>
          <img src="../beauty-photo/b7.jpg" alt='woman applying a green face mask'/> 
          <img src="../beauty-photo/b8.jpg" alt='two women with faces close together'/>
          <img src="../glamour-photo/g7.jpg" alt='woman with white face paint and shodows on face'/>
          <img src="../fashion-photo/f9.jpg" alt='man in black top looking foward'/>
          <img src="../glamour-photo/g10.jpg" alt='woman with hands over her face with brown nail polish'/>
       </section>           
        </div>
  )
}

export default function Home() {
  return(
    <section>
    <Navigation />
    <Gallery />
    </section>
  );
  
}
