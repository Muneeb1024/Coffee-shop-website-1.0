import Image from "next/image";
function About() {
  return (
    <section className="about">
      <h1>
        ABOUT <span>US</span>
      </h1>
      <div className="about-container">
        <div className="about-left">
        <Image src={"/about.jpg"} alt="about" width={450} height={450} />
        </div>
        <div className="about-right">

          <h2>What Makes Our Coffee Special?</h2>

          <p>
            Lorem ipsum dolor, sit amet tur adipisicing elit. Q consectetur
            adipisicing elit. Quod architecto accusamus, ipsum dolorem vero
            dignissimos vitae repellat.Lorem ipsum dolor, sit amet tur adipisicing elit. Q consectetur
            adipisicing elit. Quod architecto accusamus, ipsum dolorem vero
            dignissimos vitae repel  Hic delectus nostrum eos quidem vero sed
            cupiditate, enim similique dolorem minima nulla.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perferendis excepturi tempore amet nesciunt quia esse quas unde?
            Numquam, voluptatibus.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        <p></p>
      </div>
    </section>
  );
}

export default About;
