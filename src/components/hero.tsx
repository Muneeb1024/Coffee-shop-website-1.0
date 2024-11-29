import Image from "next/image";

function Hero() {
  return (
 
      <div className="hero">
        <div className="left">
          <h1>
            FRESH <span>COFFEE</span> IN
            <br />
            THE MORNING
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            <br /> laboriosam,tempore quia sapiente totam molestiae.
          </p>
          <button type="button">Order Now</button>
        </div>
        <div className="right">
          <Image src={"/hero.png"} alt="hero" width={450} height={450} />
        </div>
      </div>
  
  );
}

export default Hero;
