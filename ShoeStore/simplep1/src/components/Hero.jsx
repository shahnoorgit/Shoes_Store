function Hero() {
  return (
    <main className="Hero container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p id="des">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>shop now</button>
          <button id="gray">category</button>
        </div>
        <div className="shoping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/Images/flipkart.png" alt="" />
            <img src="/Images/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div id="img">
        <img src="/Images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}
export default Hero;
