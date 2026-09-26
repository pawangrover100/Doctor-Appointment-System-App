import ("./WhyChoose.css")
import image1 from '../../assets/image/empower.png'
import image2 from '../../assets/image/personalize.png'
import image3 from '../../assets/image/trust.png'
const WhyChoose = () => {
  return (
   <>
   <h1 className="text-center mt-5">Why Choose Us</h1>
   <div className="row why-container">
    <div className="col-md-3">
        <img src={image1} alt="image1" width={"200px"} />
        <h2>Clinical Excellence.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit repellendus? Magni quam et veniam at voluptatem omnis impedit magnam?</p>
    </div>
    <div className="col-md-3">
        <img src={image2} alt="image2" width={"200px"} />
        <h2>Trusted Since 1991..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit repellendus? Magni quam et veniam at voluptatem omnis impedit magnam?</p>
    </div>
    <div className="col-md-3">
        <img src={image3} alt="image1" width={"200px"} />
        <h2>Trusted Healthcare.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit repellendus? Magni quam et veniam at voluptatem omnis impedit magnam?</p>
    </div>
   </div>


   </>
  )
}

export default WhyChoose