import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import "./App.css";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleOnHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Animated Component for scroll-triggered animations
const AnimatedSection = ({ children, variants = fadeInUp, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      transition={{ ...variants.transition, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Animated Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <nav>
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fulcrum Web.
            </motion.div>

            <motion.div
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <AnimatePresence>
              <motion.ul
                className={`nav-menu ${isMenuOpen ? "active" : ""}`}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {
                    opacity: 1,
                    x: 0,
                  },
                }}
              >
                {[
                  { href: "#hero", text: "Home" },
                  { href: "#bio", text: "About" },
                  { href: "#capabilities", text: "Services" },
                  { href: "#connect", text: "Connect" },
                ].map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.a
                      href={item.href}
                      whileHover={{ color: "var(--accent-color)" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </nav>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section id="hero" className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Web Design for Small Business &amp; Artists
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Creating digital experiences that drive growth, innovation, and
              creativity. From branding and marketing to web development and
              solutions architecture, we're looking to assist small businesses
              in establishing their presence online and begin recieving web
              traffic.
            </motion.p>
            <motion.a
              href="#connect"
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(153, 255, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="illustration">
              <motion.div
                className="code-window"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="code-header"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.span
                    className="dot red"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.span
                    className="dot yellow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.span
                    className="dot green"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>
                <motion.div
                  className="code-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.img
                    src="https://imagedelivery.net/JKoeBV1zDfcIsivGn5FH3A/d3809819-b9eb-4d90-6f00-a82de0be2200/public"
                    className="code-img"
                    alt=""
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section id="bio" className="bio-section">
        <div className="container">
          <motion.div
            className="bio-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="bio-image" variants={fadeInLeft}>
              <motion.img
                src="./hand.jpeg"
                className="headshot code-window"
                alt="Headshot"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>

            <motion.div className="bio-text" variants={fadeInRight}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About
              </motion.h2>

              {[
                "We are a small interdisciplinary team of University of Southern California masters students helping resource-constrained small businesses thrive through attractive, functional websites. Our solutions not only grow customer bases but also increase operational efficiency.",
                "Our approach combines cutting-edge technology with user-centered design principles to deliver digital products that work seamlessly while providing exceptional user experiences. We believe good design and solid engineering are equally important in creating successful digital solutions.",
                "Different businesses have different needs, and we're here to understand those needs and help you find the right solution. Working with our interdisciplinary team means we all collaborate toward the same goal: creating products that are functional, beautiful, and easy to use for your specific business. Check out some of our offerings below.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="capabilities-section">
        <div className="container">
          <AnimatedSection>
            <h2>Services</h2>
          </AnimatedSection>

          <motion.div
            className="capabilities-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
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
                ),
                title: "Branding and Marketing",
                items: [
                  "Brand Identity",
                  "Logo Design",
                  "Omni Channel Campaigns",
                ],
              },
              {
                icon: (
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
                ),
                title: "Web Design",
                items: [
                  "Expert UX Design",
                  "Responsive Web Design",
                  "Iterative Prototyping",
                  "Accessibility Compliance",
                ],
              },
              {
                icon: (
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
                ),
                title: "Full Stack Development",
                items: [
                  "Frontend Development & Frameworks",
                  "Backend & API Development",
                  "Database Management & SQL",
                  "PERN Stack - PostgreSQL, Express, React, Node.js",
                ],
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card"
                variants={fadeInUp}
                whileHover={cardHover.hover}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="card-icon"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {capability.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {capability.title}
                </motion.h3>

                <motion.ul
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={{
                    animate: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {capability.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section id="connect" className="connect-section">
        <div className="container">
          <AnimatedSection>
            <h2>Let's Connect</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              Ready to take the next step in your business's growth? Contact us
              today!
              <br />
              <br />
              With a short consultation, we can help understand the needs of
              your business and provide a web solution that works for you.
              Depending on the complexity of your needs, we can provide a range
              of solutions from a single page front-end application to a
              full-stack web application capable of storing and accessing user
              data easily.
            </p>
          </AnimatedSection>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:info@payares-dev.com"
              className="btn btn-primary"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 15px 35px rgba(153, 255, 0, 0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="footer-content">
            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:info@payares-dev.com"
                whileHover={{
                  color: "var(--accent-color)",
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                info@payares-dev.com
              </motion.a>
            </motion.div>

            <motion.div
              className="footer-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2025 Fulcrum Web. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default App;
