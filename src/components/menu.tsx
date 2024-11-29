import Image from "next/image";
function Menu() {
  return (
    <section className="menu-sec">
      <h1>
        OUR <span>MENU</span>
      </h1>
      <div className="menu-items-container">
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item1.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item2.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item3.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item4.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item5.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item6.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item4.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item2.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
        <div className="menu-card">
          <div className="menu-card-img">
            <Image
              src={"/menu-item3.png"}
              alt="menu-item"
              width={"200"}
              height={"200"}
            />
          </div>
          <h4>Taste & Healthy</h4>
          <span>
            $10.99 <del>$16.99</del>
          </span>
          <button>Add To Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
