// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';

 
import imgs from './Image/Screenshot 2025-05-02 154224.png'
import img from './Image/0bdff2952090eeec909a5daef39d19b87d1b2d0a.png'
import ims from './Image/31c299397617263170c0c4306f8052e61383f5a6.png'
import igs from './Image/3f171c095b0f6e59ebbbe9de164f556fdadeae24.png'
import mgs from './Image/713bb8641c296efbc96d80b86522e299af90d68b.jpg'
import p from './Image/72784c696827b5474c599e440dffd32debea9cfe.png'
import r from './Image/7b596293b219c19618fed2c663310c6b5a77388e.png'
import t from './Image/7dcbe05e7809eddeebd470ea09957205d403f726.png'
import pl from './Image/b1df63a92caffb93458f9e991a59b6c1f7ca45d2.jpg'
import tm from './Image/d8c62e406e735609e50d64afceaa0fe9450813ba.jpg'
import mk from './Image/e78a7b5794522c5ea9ca0ff4be5665d7ee8cc85b.jpg'
import l from './Image/Screenshot 2025-05-03 101526.png'
import ps from './Image/Screenshot 2025-05-03 101537.png'
import imag from './Image/images (3).jpg'
import mj from './Image/Screenshot 2025-05-03 111531.png'
import po from './Image/6243d52b290541f8dd56282a2604194a65686402.jpg' 
import foot from './Image/Screenshot 2025-05-03 140410.png'

export default function Home() {
  const programs = [
    { title: '6 Week Weight Loss Program', image: img },
    { title: 'HCG Program', image: ims },
    { title: 'Women’s Program', image: igs},
    { title: 'Balance Program', image: mgs },
    { title: 'Low-Carb Diet Plan', image: p },
    { title: 'Mediterranean Diet Plan', image: r },
    { title: 'Diabetes Diet Plan', image: t },
    { title: 'Diet Plan', image: mk },
    { title: 'Weight Maintenance Diet Plan', image: pl },
    { title: '6-Week Diet Plan', image: tm },
  ];
   
  return (
    <>   <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 ">
    <Link className="navbar-brand fw-bold text-primary" href="/">Trimify</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" href="#about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" href="#program">Program</Link></li>
        <li className="nav-item"><Link className="nav-link" href="#contact">Contact</Link></li>
      
      </ul>
    </div>
  </nav>
  <div className="container mt-5">
  <div className="row align-items-center">
    
    {/* Right Image */}
    <div className="col-md-6 position-relative text-center mb-4 mb-md-0">
      <Image
        src={imgs}
        alt="Doctor holding apple"
        width={400}
        height={400}
        className="img-fluid rounded w-100"
      />

      {/* Overlapping Text - Only on Large Screens */}
      <div className="bg-transparent p-4  d-none d-md-block position-absolute top-50   translate-middle-y bg-white p-4 rounded shadow-lg" style={{ width: '60%',right:'-40%'}}>
        <h2>Your Journey To Health Begins<br />With The Expert You Can Trust.</h2>
        <p className="text-muted">Guide you with real experience and proven result</p>
        <ul className="list-unstyled text-primary fw-semibold">
          <li>✔ 20+ years of Experience</li>
          <li>✔ Trusted By Thousands</li>
          <li>✔ Personalized Wellness Plans</li>
        </ul>
        <div>
          <Image src={l} alt="App Store" width={130} height={40} className="me-2" />
          <Image src={ps} alt="Google Play" width={130} height={40} />
        </div>
      </div>
    </div>

    {/* Full-width Text - Only on Small Screens */}
    <div className="col-12 d-md-none">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2>Your Journey To Health Begins<br />With The Expert You Can Trust.</h2>
        <p className="text-muted">Guide you with real experience and proven result</p>
        <ul className="list-unstyled text-primary fw-semibold">
          <li>✔ 20+ years of Experience</li>
          <li>✔ Trusted By Thousands</li>
          <li>✔ Personalized Wellness Plans</li>
        </ul>
        <div>
          <Image src={l} alt="App Store" width={130} height={40} className="me-2" />
          <Image src={ps} alt="Google Play" width={130} height={40} />
        </div>
      </div>
    </div>

  </div>
</div>


      <div>
        <title>Health Programs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-MQ6FJVZQnEgbs4prHT9ylM5ZcYNU7BL3k4l+0G3HybGOFlL1Ei2hLDOlvEkyQQN/"
          crossOrigin="anonymous"
        />
      </div>
{/* About Section */}
<section className="container-fluid my-5 ">
  <div className="row">
    {/* Left Column */}
    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center position-relative" style={{ minHeight: '350px' }}>
      {/* Background Box */}
      <div
        style={{
          backgroundColor: 'rgba(210, 240, 255, 0.3)',
          width: '60%',
          height: '80%',
          borderRadius: '10px',
          position: 'absolute',
          left: '0',
          top: '10%',
          zIndex: 1,
        }}
      ></div>

      {/* Image overlapping the background */}
      <Image
        src={imag}
        alt="Doctor"
        width={250}
        height={330}
        className="img-fluid rounded"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      />
    </div>

    {/* Right Column */}
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4" id='about'>
      <h2 className="fw-bold mb-3">About</h2>
      <p className="text-muted">
        Our mission is to provide personalized, science-backed healthcare programs that help individuals lead healthier lives.
        Our team of experienced doctors and wellness experts are here to support you every step of the way.
      </p>
    </div>
  </div>
</section>

      <main className="container py-5">
         <section className="text-center mb-5" id='program'>
          <h2 className="mb-4">Our Programs</h2>
          <div className="row g-3">
            {programs.map((program, idx) => (
              <div className="col-6 col-md-3 " key={idx}>
                <div className="card border-0 shadow-sm position-relative overflow-hidden ">
                  
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={300}
                    height={180}
                    className="card-img-top"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-2"
                    style={{ background: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <h6 className="text-white m-0">{program.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Take Charge Section */}
        <section className="text-center py-5">
          <h3 className="fw-bold">
            Take Charge of Your Health <br /> with Ease and Confidence
          </h3>
          <p className="mt-3 text-muted">
            Take control of your health with family. Track your meals, fitness, and progress all in one easy-to-use app.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Image src={ps} alt="App Store" width={150} height={45} />
            <Image src={l} alt="Google Play" width={150} height={45} />
          </div>
        </section>
      </main>
    
    {/* Trusted by 500k+ Section */}
<section className="container my-5">
  <div className="row align-items-center">
    {/* Left: Mobile mockup image */}
    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
      <Image
        src={mj} // Make sure to place this image in /public/images
        alt="Mobile App Preview"
        width={500}
        height={350}
        className="img-fluid"
      />
    </div>

    {/* Right: Text content */}
    <div className="col-12 col-md-6 text-center text-md-start">
      <div className="mb-2">
        
      </div>
      <p className="text-muted">
        Trusted and downloaded by thousands<br />
        of people around the world.
      </p>
    </div>
  </div>
</section>
<main className="container py-5">
      {/* Header */}
      <h2 className="text-center fw-bold mb-3">Testimonial</h2>
      <div className="text-center mb-4">
        <h4 className="fw-semibold">Our Customer Feedback</h4>
        <p className="text-muted">Our results speak through our clients.</p>
      </div>

      {/* Controls */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-secondary btn-sm me-2">‹ Previous</button>
        <button className="btn btn-outline-primary btn-sm">Next ›</button>
      </div>

      {/* Testimonial Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 p-3 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-2">
              <Image
                src={po}
                alt="Floyd Miles"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="fw-bold mb-0">Floyd Miles</h6>
                <div className="text-warning">★★★★☆</div>
              </div>
            </div>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 p-3 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-2">
              <Image
                src={po}
                alt="Ronald Richards"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="fw-bold mb-0">Ronald Richards</h6>
                <div className="text-warning">★★★★☆</div>
              </div>
            </div>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 p-3 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-2">
              <Image
                src={po}
                alt="Savannah Nguyen"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="fw-bold mb-0">Savannah Nguyen</h6>
                <div className="text-warning">★★★★★</div>
              </div>
            </div>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
    <main className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Form */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold text-primary mb-3">Book An Appointment</h3>
            <p className="fw-semibold">
              Enter Your <span className="text-primary">Email Address.</span>
            </p>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0 mb-4"
              placeholder="Type your first name here"
              style={{ backgroundColor: 'transparent' }}
            />
            <button className="btn btn-dark px-4 py-2 shadow-sm">Send</button>
          </div>

          {/* Right Column: Illustration */}
          <div className="col-md-6 text-center">
            <Image
              src={foot}
              alt="Support Illustration"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </main>
   
    <footer className="mt-5">
        <div className="bg-info text-white py-3">
          <div className="container d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="mb-2 mb-md-0 fw-bold">#Trimify</h5>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaYoutube />
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="bg-dark text-white text-center py-2 small">
          Copyright © 2025. Trimify. All rights reserved
        </div>
      </footer> </>

    
  );
}