import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">Fulcrum Digital.</div>
            <div className="menu-toggle" id="mobile-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="nav-menu">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#bio">About</a>
              </li>
              <li>
                <a href="#capabilities">Services</a>
              </li>
              <li>
                <a href="#connect">Connect</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Web Design for Small Business &amp; Artists</h1>
            <p>
              Creating digital experiences that drive growth, innovation, and
              creativity. From branding and marketing to web development and
              solutions architecture, we're looking to assist small businesses
              in establishing their presence online and begin recieving web
              traffic.
            </p>
            <a href="#connect" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
          <div className="hero-image">
            <div className="illustration">
              <div className="code-window">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <img
                    src="https://imagedelivery.net/JKoeBV1zDfcIsivGn5FH3A/d3809819-b9eb-4d90-6f00-a82de0be2200/public"
                    className="code-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section id="bio" className="bio-section">
        <div className="container">
          <div className="bio-content">
            <div className="bio-image">
              <img
                src="./hand.jpeg"
                className="headshot code-window"
                alt="Headshot"
              />
            </div>
            <div className="bio-text">
              <h2>About</h2>
              <p>
                We are a small interdisciplinary team of University of Southern
                California masters students helping resource-constrained small
                businesses thrive through attractive, functional websites. Our
                solutions not only grow customer bases but also increase
                operational efficiency.
              </p>
              <p>
                Our approach combines cutting-edge technology with user-centered
                design principles to deliver digital products that work
                seamlessly while providing exceptional user experiences. We
                believe good design and solid engineering are equally important
                in creating successful digital solutions.
              </p>
              <p>
                Different businesses have different needs, and we're here to
                understand those needs and help you find the right solution.
                Working with our interdisciplinary team means we all collaborate
                toward the same goal: creating products that are functional,
                beautiful, and easy to use for your specific business. Check out
                some of our offerings below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="capabilities-section">
        <div className="container">
          <h2>Services</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <h3>Branding and Marketing</h3>
              <ul>
                <li>Brand Identity</li>
                <li>Logo Design</li>
                <li>Omni Channel Campaigns</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3>Web Design</h3>
              <ul>
                <li>Expert UX Design</li>
                <li>Responsive Web Design</li>
                <li>Iterative Prototyping</li>
                <li>Accessibility Compliance</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Full Stack Development</h3>
              <ul>
                <li>Frontend Development &amp; Frameworks</li>
                <li>Backend &amp; API Development</li>
                <li>Database Management &amp; SQL</li>
                <li>PERN Stack - PostgreSQL, Express, React, Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section id="connect" className="connect-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>
            Ready to take the next step in your business's growth? Contact us
            today!
            <br />
            <br />
            With a short consultation, we can help understand the needs of your
            business and provide a web solution that works for you. Depending on
            the complexity of your needs, we can provide a range of solutions
            from a single page front-end application to a full-stack web
            application capable of storing and accessing user data easily.
          </p>
          <div className="cta-buttons">
            <a href="mailto:info@payares-dev.com" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="mailto:info@payares-dev.com">info@payares-dev.com</a>
            </div>
            <div className="footer-info">
              <p>&copy; 2025 Fulcrum Digital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
