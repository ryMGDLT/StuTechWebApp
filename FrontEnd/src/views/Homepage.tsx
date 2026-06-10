import React from "react";
import { useNavigate } from "react-router-dom";
import { brandAssets, BRAND_SHORT } from "@/lib/brand";
import { PillButton } from "@/components/marketing/pill-button";
import { LearnMoreButton } from "@/components/marketing/learn-more-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaCog,
  FaPalette,
  FaGlobe,
  FaMobile,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheckCircle, BsLightning, BsPersonCircle } from "react-icons/bs";
import { RiRocketLine, RiUserLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const teamMembers = [
  { name: "John Smith", role: "Company CEO", image: "/path-to-john-smith-image.jpg" },
  { name: "David Johnson", role: "Co-Founder", image: "/path-to-david-johnson-image.jpg" },
  { name: "Sarah Williams", role: "Lead Designer", image: "/path-to-sarah-williams-image.jpg" },
  { name: "Michael Brown", role: "Developer", image: "/path-to-michael-brown-image.jpg" },
  { name: "Emily Davis", role: "Marketing", image: "/path-to-emily-davis-image.jpg" },
  { name: "James Wilson", role: "Support", image: "/path-to-james-wilson-image.jpg" },
  { name: "Anna Taylor", role: "Product Manager", image: "/path-to-anna-taylor-image.jpg" },
  { name: "Chris Lee", role: "QA Engineer", image: "/path-to-chris-lee-image.jpg" },
];
const slidesPerGroupLarge = 5;
const remainder = teamMembers.length % slidesPerGroupLarge;
let paddedTeamMembers = [...teamMembers];

if (remainder !== 0) {
  
  const slidesToAdd = slidesPerGroupLarge - remainder;
 
  const additionalSlides = teamMembers.slice(0, slidesToAdd);
  paddedTeamMembers = [...teamMembers, ...additionalSlides];
}

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative min-h-[95vh] w-full bg-xone-hero-gradient px-4 py-16 sm:px-6 lg:px-8">
        <img
          src="/assets/images/shape1.png"
          alt="Upper right decoration"
          style={{
            position: "absolute",
            top: "-40px",
            right: "-380px",
            width: "34%",
            height: "auto",
            objectFit: "cover",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.4))",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.4))",
            clipPath: "inset(0% 50% 0% 0%)",
          }}
        />
        <img
          src="/assets/images/shape2.png"
          alt="Lower left decoration"
          style={{
            position: "absolute",
            top: "480px",
            right: "100px",
            left: "-200px",
            width: "23%",
            height: "auto",
            objectFit: "cover",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.4))",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.4))",
          }}
        />
        <div className="mx-auto mt-20 max-w-7xl text-center">
          <h1
            className="mb-6 text-4xl font-extrabold text-white sm:text-6xl lg:text-8xl"
          >
            We design and build
          </h1>
          <h2
            className="mb-6 text-4xl font-bold text-xone-cyan sm:text-6xl lg:text-8xl"
          >
            digital solutions
          </h2>
          <h2
            className="mb-13 text-4xl font-bold text-white sm:text-6xl lg:text-8xl"
          >
            that power growth
          </h2>
          <h3
            className="text-xl font-medium text-xone-light sm:text-2xl"
          >
            From UI/UX to full-scale systems, we deliver modern applications
          </h3>
          <h3
            className="mt-2 text-xl font-medium text-xone-light/90 sm:text-2xl"
          >
            tailored to your business needs. Transform your ideas into
          </h3>
          <h3
            className="mt-2 text-xl font-medium text-xone-light/90 sm:text-2xl"
          >
            powerful digital experiences.
          </h3>
          <div className="mt-13 flex items-center justify-center">
            <PillButton
              size="lg"
              variant="secondary"
              className="gap-2 bg-white px-8 py-4 text-xone-navy hover:bg-xone-light"
              onClick={() => navigate("/contact")}
            >
              Talk to our Team
              <FaArrowRight className="ml-2" aria-hidden />
            </PillButton>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="relative min-h-[110vh] min-w-[100vw] bg-xone-section-gradient px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mt-3">
          <h3
            className="mt-3 text-3xl font-semibold text-foreground sm:text-5xl"
          >
            Who We Are
          </h3>
          <p
            className="mt-8 flex items-center justify-center text-lg font-medium leading-relaxed text-muted-foreground sm:text-2xl"
          >
            We are a forward-thinking startup dedicated to system generation,
            UI/UX design, and web & mobile <br />
            application development. At{" "}
            <span className="font-extrabold text-xone-violet">
              {BRAND_SHORT}
            </span>
            , we believe technology should not only be powerful but also <br />
            simple, accessible, and designed with users in mind. Our goal is to
            empower businesses and <br />
            individuals with digital solutions that truly make life easier.
          </p>
          <div className="p-4 rounded-lg bg-xone-card shadow-[5px_5px_10px_rgba(0,0,0,0.2)] h-150 mt-10 flex gap-4 relative overflow-hidden">
            <img
              src="/assets/images/upleft.png"
              className="absolute top-[-40px] left-[-85px] w-45 h-45 object-cover rounded-md"
              alt="Top Left Corner"
            />
            <img
              src="/assets/images/upright.png"
              className="absolute top-[-40px] right-[-85px] w-45 h-45 object-cover rounded-md"
              alt="Top Right Corner"
            />
            <img
              src="/assets/images/bottomleft.png"
              className="absolute bottom-[-95px] left-[-85px] w-45 h-45 object-cover rounded-md"
              alt="Bottom Left Corner"
            />
            <img
              src="/assets/images/bottomright.png"
              className="absolute bottom-[-95px] right-[-85px] w-45 h-45 object-cover rounded-md"
              alt="Bottom Right Corner"
            />
            <div className="flex-1 p-4 rounded-md text-left">
              <h3
                className="m-15 mt-2 text-3xl font-medium"
              >
                Our Mission
              </h3>
              <p
                className="m-15 mt-[-20px] text-justify text-xl leading-relaxed tracking-wider"
              >
                To bridge the gap between innovative technology and exceptional
                user experiences by creating seamless, reliable, and scalable
                solutions tailored to real-world needs.
              </p>
              <ul
                className="m-20 mt-[-20px] list-disc text-justify text-xl text-xone-violet"
              >
                <li className="text-foreground marker:text-xone-violet">
                  Innovative & user-focused approach
                </li>
                <li className="text-foreground marker:text-xone-violet">
                  Scalable solutions for growth
                </li>
                <li className="text-foreground marker:text-xone-violet">
                  End-to-end development expertise
                </li>
              </ul>
            </div>
            <div className="flex-1 p-5 mb-5 mr-4 rounded-3xl flex justify-center h-full m-[15px] items-center overflow-hidden">
              <img
                src="/assets/images/team.png"
                className="w-full h-full object-cover mb-8 mr-10 rounded-3xl"
                alt="Team"
              />
            </div>
          </div>
        </div>
<div
  className="w-full mx-auto min-h-[850px] pt-10 px-10 mt-25 rounded-lg border-2 drop-shadow-2xl border-white bg-xone-card shadow-[5px_5px_10px_rgba(0,0,0,0.2)] flex justify-center items-center"
  style={{ boxShadow: "inset 0 -5px 12px -6px rgba(255, 255, 255, 0.9)" }}
>
  <div className="text-center mt-[-70px] w-full">
    <h3
      className="mt-5 text-3xl font-semibold text-foreground sm:text-5xl"
    >
      Meet Our Team
    </h3>
    <p
      className="mb-15 mt-5 px-4 text-center text-lg font-medium leading-relaxed text-muted-foreground sm:text-2xl"
    >
      Comprehensive digital solutions designed to transform your business and accelerate growth
    </p>
    <div className="w-full mt-18">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={false} 
        slidesPerView={5} 
        slidesPerGroup={5} 
        spaceBetween={10}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5, 
            slidesPerGroup: 5, 
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
        className="swiper-container px-4"
      >
        {paddedTeamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-[330px] h-[500px] mx-auto">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-md mb-6"
              />
              <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
              <p className="text-center text-muted-foreground">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-30"></div>
        <div className="swiper-button-prev text-xone-violet after:text-2xl"></div>
        <div className="swiper-button-next text-xone-violet after:text-2xl"></div>
      </Swiper>
      <style>{`
        .swiper-button-prev, .swiper-button-next {
          color: #533bda;
          --swiper-navigation-size: 24px;
          padding: 10px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #94a3b8;
          opacity: 0.5;
          transition: width 0.3s ease, background-color 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 16px;
          height: 8px;
          border-radius: 8px;
          background-color: #533bda;
          opacity: 1;
        }
        .swiper-container {
          padding-bottom: 40px;
          width: 100%;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  </div>
</div>
      </div>

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-xone-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and accelerate growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-xone-light rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-accent-muted h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaCog className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  System Generation & Automation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Streamline your workflows with intelligent automation
                  solutions that boost efficiency and reduce manual tasks.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Workflow Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>System Integration</span>
                  </li>
                </ul>
                <div className="flex items-center justify-center text-center">
                  <LearnMoreButton className="relative bottom-0 bg-xone-cyan text-xone-navy hover:opacity-90" />
                </div>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-accent-muted h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaPalette className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-10">
                  UI/UX Design
                </h3>
                <p className="text-muted-foreground mb-6">
                  Create user-centered, seamless experiences that engage your
                  audience and drive conversions.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>User Research</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Interface Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Prototyping</span>
                  </li>
                </ul>
                <div className="relative -bottom-6 mt-auto flex items-center justify-center text-center">
                  <LearnMoreButton className="bg-xone-navy text-white hover:bg-xone-gray-dark" />
                </div>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-accent-muted h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaGlobe className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Web Application Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Build scalable, secure, and modern web applications that grow
                  with your business needs.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Full-Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
                <div className="relative -bottom-6 mt-auto flex items-center justify-center text-center">
                  <LearnMoreButton className="bg-xone-navy text-white hover:bg-xone-gray-dark" />
                </div>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-accent-muted h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaMobile className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Mobile Application Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Develop cross-platform, engaging mobile apps that provide
                  exceptional user experiences.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>iOS & Android</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>Cross-Platform</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-xone-violet rounded-full mr-2"></div>
                    <span>App Store Optimization</span>
                  </li>
                </ul>
                <div className="relative -bottom-6 mt-auto flex items-center justify-center text-center">
                  <LearnMoreButton className="bg-xone-violet text-white hover:bg-xone-gray-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-white" />

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-xone-section mx-auto">
        <div className="max-w-[100vw] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose US</h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
            Here's why businesses trust us to bring their ideas to life and
            drive digital transformation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-8 justify-items-center items-center">
            <div className="bg-xone-light rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-section h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-xone-accent-muted">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsCheckCircle className="text-2xl text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Custom-built <br /> Solutions
                </h3>
                <p className="text-muted-foreground">
                  Tailored applications designed specifically for your business
                  requirements and goals.
                </p>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-section h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-xone-accent-muted">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsLightning className="text-2xl text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Agile & Scalable Development
                </h3>
                <p className="text-muted-foreground">
                  Fast, iterative development process that adapts to your needs
                  and scales with growth.
                </p>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-section h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-xone-accent-muted">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsPersonCircle className="text-2xl text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">End-to-end Support</h3>
                <p className="text-muted-foreground">
                  From initial concept to post-launch maintenance, we support you
                  every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center items-center">
            <div className="bg-xone-light rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-section h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-xone-accent-muted">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <RiRocketLine className="text-2xl text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Future-ready Technology
                </h3>
                <p className="text-muted-foreground">
                  Built with modern technologies that ensure your solutions remain
                  relevant and effective.
                </p>
              </div>
            </div>
            <div className="bg-xone-light rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-xone-navy/10">
              <div className="bg-xone-section h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-xone-accent-muted">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <RiUserLine className="text-2xl text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  User-first Design Approach
                </h3>
                <p className="text-muted-foreground">
                  Every decision is made with your users in mind, ensuring
                  intuitive and engaging experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white" />

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-xone-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How We Work</h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
            Our proven 5-step process ensures successful project delivery from
            concept to completion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="flex flex-col items-center">
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-xone-gray-light">
                <div className="rounded-full bg-xone-accent-muted px-3 py-1 text-xl font-bold text-xone-violet">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Determine</h3>
              <p className="text-center text-muted-foreground text-sm">
                Understanding your needs, goals, and target audience through
                comprehensive research and analysis.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-xone-gray-light flex items-center justify-center mb-6 relative z-10">
                <span className="text-muted-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-center text-muted-foreground text-sm">
                Creating wireframes, prototypes, and visual designs that align
                with your brand and user expectations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-xone-gray-light flex items-center justify-center mb-6 relative z-10">
                <span className="text-muted-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-center text-muted-foreground text-sm">
                Building robust, scalable applications using modern technologies
                and best development practices.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-xone-gray-light flex items-center justify-center mb-6 relative z-10">
                <span className="text-muted-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-center text-muted-foreground text-sm">
                Launching your application with proper testing, optimization,
                and seamless go-live processes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-xone-gray-light flex items-center justify-center mb-6 relative z-10">
                <span className="text-muted-foreground font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-center text-muted-foreground text-sm">
                Providing ongoing maintenance, updates, and support to ensure
                continued success and growth.
              </p>
            </div>
            <div
              className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-white"
              style={{ width: "80%", margin: "0 auto" }}
            ></div>
          </div>
          <div className="mt-16 relative h-48 w-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={`row1-${index}`}
                  className={`bg-white/80 rounded-full shadow-lg animate-float ${
                    index % 3 === 0 ? "w-6 h-6" : index % 3 === 1 ? "w-8 h-8" : "w-4 h-4"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                ></div>
              ))}
            </div>
            <div className="absolute top-12 left-0 right-0 flex justify-between items-center px-8">
              {[...Array(10)].map((_, index) => (
                <div
                  key={`row2-${index}`}
                  className={`bg-xone-cyan/30 rounded-full shadow-md animate-float ${
                    index % 2 === 0 ? "w-5 h-5" : "w-7 h-7"
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>
              ))}
            </div>
            <div className="absolute top-24 left-0 right-0 flex justify-between items-center px-2">
              {[...Array(14)].map((_, index) => (
                <div
                  key={`row3-${index}`}
                  className={`bg-white/60 rounded-full shadow-sm animate-float ${
                    index % 4 === 0
                      ? "w-3 h-3"
                      : index % 4 === 1
                      ? "w-6 h-6"
                      : index % 4 === 2
                      ? "w-4 h-4"
                      : "w-5 h-5"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                ></div>
              ))}
            </div>
            <div className="absolute top-36 left-0 right-0 flex justify-between items-center px-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={`row4-${index}`}
                  className={`bg-xone-light/80 rounded-full shadow-md animate-float ${
                    index % 3 === 0 ? "w-7 h-7" : index % 3 === 1 ? "w-4 h-4" : "w-6 h-6"
                  }`}
                  style={{ animationDelay: `${index * 0.25}s` }}
                ></div>
              ))}
            </div>
            <style>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </div>

      <hr className="border-white" />

      <div className="min-h-[60vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-xone-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Let's Build Something Great Together!
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into powerful digital solutions? Get
            in touch with us today.
          </p>
          <div className="mx-auto mb-8 flex max-w-md flex-col gap-2 rounded-lg bg-white p-2 shadow-lg sm:flex-row sm:items-center">
            <Input
              type="email"
              placeholder="What's your work email?"
              className="h-11 flex-1 border-0 bg-white px-4 shadow-none focus-visible:ring-0"
              aria-label="Work email"
            />
            <Button
              size="lg"
              className="h-11 px-6 font-semibold"
              onClick={() => navigate("/get-started")}
            >
              Get started
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            <em>Your email is safe with us — we only send what matters.</em>
          </p>
        </div>
      </div>

      <div className="min-w-[100vw] bg-xone-navy text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="mb-55 flex items-center">
                <img
                  src={brandAssets.logoInverse}
                  alt="Xone Software Development"
                  className="h-10 w-auto max-w-[180px] sm:h-12 sm:max-w-[220px]"
                  width={220}
                  height={48}
                />
              </div>
              <div className="flex space-x-4 mb-6">
                <FaEnvelope className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
                <FaLinkedin className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
                <FaTwitter className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
                <FaInstagram className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
                <FaPhone className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
                <FaGithub className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-xone-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Linear Method</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-xone-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-xone-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">Startup Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DPA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report a vulnerability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Developers</h3>
              <ul className="space-y-3 text-xone-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">README</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;