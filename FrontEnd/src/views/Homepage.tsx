import React from "react";
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

interface HomepageProps {}

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
const slidesPerGroupSmall = 1; 
const remainder = teamMembers.length % slidesPerGroupLarge;
let paddedTeamMembers = [...teamMembers];

if (remainder !== 0) {
  
  const slidesToAdd = slidesPerGroupLarge - remainder;
 
  const additionalSlides = teamMembers.slice(0, slidesToAdd);
  paddedTeamMembers = [...teamMembers, ...additionalSlides];
}

const Homepage: React.FC<HomepageProps> = () => {
  const handleButtonClick = (): void => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="min-h-[95vh] w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F3F4F6] via-[#2563EB88] to-[#1E3A8A] relative">
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
        <div className="max-w-7xl mx-auto text-center mt-20">
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-8xl font-extrabold text-gray-900 mb-6"
          >
            We design and build
          </h1>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-8xl font-bold text-[#1e3a8a] mb-6"
          >
            digital solutions
          </h2>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-8xl font-bold text-gray-900 mb-13"
          >
            that power growth
          </h2>
          <h3
            style={{ fontFamily: "Inter, sans-serif" }}
            className="font-medium text-2xl text-gray-900"
          >
            From UI/UX to full-scale systems, we deliver modern applications
          </h3>
          <h3
            style={{ fontFamily: "Inter, sans-serif" }}
            className="font-medium text-2xl text-gray-900 mt-2"
          >
            tailored to your business needs. Transform your ideas into
          </h3>
          <h3
            style={{ fontFamily: "Inter, sans-serif" }}
            className="font-medium text-2xl text-gray-900 mt-2"
          >
            powerful digital experiences.
          </h3>
          <div className="mt-13 flex justify-center items-center">
            <button
              className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 rounded-full text-base font-medium cursor-pointer flex items-center"
              onClick={handleButtonClick}
            >
              Talk to our Team <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="min-h-[110vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFFFFF88] to-[#BDCBFD] relative">
        <div className="max-w-7xl mx-auto text-center mt-3">
          <h3
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-semibold text-5xl text-gray-900 mt-3"
          >
            Who We Are
          </h3>
          <p
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.5" }}
            className="font-medium text-2xl justify-center items-center mt-8 text-gray-900"
          >
            We are a forward-thinking startup dedicated to system generation,
            UI/UX design, and web & mobile <br />
            application development. At{" "}
            <span style={{ color: "#1E3A8A" }} className="font-extrabold">
              StuTech
            </span>
            , we believe technology should not only be powerful but also <br />
            simple, accessible, and designed with users in mind. Our goal is to
            empower businesses and <br />
            individuals with digital solutions that truly make life easier.
          </p>
          <div className="p-4 rounded-lg bg-[#D9E5FF76] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] h-150 mt-10 flex gap-4 relative overflow-hidden">
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
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="font-medium text-3xl mt-2 m-15"
              >
                Our Mission
              </h3>
              <p
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.5" }}
                className="m-15 mt-[-20px] text-justify text-xl tracking-wider"
              >
                To bridge the gap between innovative technology and exceptional
                user experiences by creating seamless, reliable, and scalable
                solutions tailored to real-world needs.
              </p>
              <ul
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "2.5" }}
                className="m-20 mt-[-20px] text-justify text-xl text-[#1E3A8A] list-disc"
              >
                <li className="text-gray-900 marker:text-[#1E3A8A]">
                  Innovative & user-focused approach
                </li>
                <li className="text-gray-900 marker:text-[#1E3A8A]">
                  Scalable solutions for growth
                </li>
                <li className="text-gray-900 marker:text-[#1E3A8A]">
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
  className="w-full mx-auto min-h-[850px] pt-10 px-10 mt-25 rounded-lg border-2 drop-shadow-2xl border-white bg-[#D9E5FF76] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] flex justify-center items-center"
  style={{ boxShadow: "inset 0 -5px 12px -6px rgba(255, 255, 255, 0.9)" }}
>
  <div className="text-center mt-[-70px] w-full">
    <h3
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="font-semibold text-5xl text-gray-900 mt-5"
    >
      Meet Our Team
    </h3>
    <p
      style={{ fontFamily: "Poppins, sans-serif", lineHeight: "2" }}
      className="mt-5 text-center text-2xl text-gray-900 font-medium mb-15 px-4"
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
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-30"></div>
        <div className="swiper-button-prev text-[#1E3A8A] after:text-2xl"></div>
        <div className="swiper-button-next text-[#1E3A8A] after:text-2xl"></div>
      </Swiper>
      <style>{`
        .swiper-button-prev, .swiper-button-next {
          color: #1E3A8A;
          --swiper-navigation-size: 24px;
          padding: 10px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #999;
          opacity: 0.5;
          transition: width 0.3s ease, background-color 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 16px;
          height: 8px;
          border-radius: 8px;
          background-color: #1E3A8A;
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

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-[#E2EBFF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and accelerate growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-gray-600">
              <div className="bg-[#BDCBFD] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaCog className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  System Generation & Automation
                </h3>
                <p className="text-gray-700 mb-6">
                  Streamline your workflows with intelligent automation
                  solutions that boost efficiency and reduce manual tasks.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Workflow Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>System Integration</span>
                  </li>
                </ul>
                <div className="items-center text-center flex justify-center">
                  <button className="relative bottom-0 text-black py-3 px-6 rounded-full flex items-center bg-amber-500">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-gray-600">
              <div className="bg-[#BDCBFD] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaPalette className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-10">
                  UI/UX Design
                </h3>
                <p className="text-gray-700 mb-6">
                  Create user-centered, seamless experiences that engage your
                  audience and drive conversions.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>User Research</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Interface Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Prototyping</span>
                  </li>
                </ul>
                <div className="mt-auto items-center text-center flex justify-center relative -bottom-6">
                  <button className="bg-blue-800 text-black py-3 px-6 rounded-full flex items-center hover:bg-blue-900 transition-colors">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-gray-600">
              <div className="bg-[#BDCBFD] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaGlobe className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Web Application Development
                </h3>
                <p className="text-gray-700 mb-6">
                  Build scalable, secure, and modern web applications that grow
                  with your business needs.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Full-Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
                <div className="mt-auto items-center text-center flex justify-center relative -bottom-6">
                  <button className="bg-blue-800 text-black py-3 px-6 rounded-full flex items-center hover:bg-blue-900 transition-colors">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[85vh] shadow-lg shadow-gray-600">
              <div className="bg-[#BDCBFD] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 h-[98vh]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaMobile className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Mobile Application Development
                </h3>
                <p className="text-gray-700 mb-6">
                  Develop cross-platform, engaging mobile apps that provide
                  exceptional user experiences.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>iOS & Android</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>Cross-Platform</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>App Store Optimization</span>
                  </li>
                </ul>
                <div className="mt-auto items-center text-center flex justify-center relative -bottom-6">
                  <button className="bg-red-500 text-black py-3 px-6 rounded-full flex items-center hover:bg-blue-900 transition-colors">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-white" />

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-[#E2EBFF] mx-auto">
        <div className="max-w-[100vw] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose US</h2>
          <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Here's why businesses trust us to bring their ideas to life and
            drive digital transformation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-8 justify-items-center items-center">
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-gray-600">
              <div className="bg-[#E2EBFF] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-[#BDCBFD]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsCheckCircle className="text-2xl text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Custom-built <br /> Solutions
                </h3>
                <p className="text-gray-700">
                  Tailored applications designed specifically for your business
                  requirements and goals.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-gray-600">
              <div className="bg-[#E2EBFF] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-[#BDCBFD]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsLightning className="text-2xl text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Agile & Scalable Development
                </h3>
                <p className="text-gray-700">
                  Fast, iterative development process that adapts to your needs
                  and scales with growth.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-gray-600">
              <div className="bg-[#E2EBFF] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-[#BDCBFD]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BsPersonCircle className="text-2xl text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4">End-to-end Support</h3>
                <p className="text-gray-700">
                  From initial concept to post-launch maintenance, we support you
                  every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center items-center">
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-gray-600">
              <div className="bg-[#E2EBFF] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-[#BDCBFD]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <RiRocketLine className="text-2xl text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Future-ready Technology
                </h3>
                <p className="text-gray-700">
                  Built with modern technologies that ensure your solutions remain
                  relevant and effective.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col h-[50vh] w-[22vw] shadow-lg shadow-gray-600">
              <div className="bg-[#E2EBFF] h-[2vh] rounded-t-2xl"></div>
              <div className="p-8 flex flex-col items-center text-center h-full bg-[#BDCBFD]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <RiUserLine className="text-2xl text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  User-first Design Approach
                </h3>
                <p className="text-gray-700">
                  Every decision is made with your users in mind, ensuring
                  intuitive and engaging experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white" />

      <div className="min-h-[100vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-[#E2EBFF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How We Work</h2>
          <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Our proven 5-step process ensures successful project delivery from
            concept to completion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10">
                <div className="text-blue-700 font-bold text-xl px-3 py-1 rounded-full bg-[#BDCBFD]">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Determine</h3>
              <p className="text-center text-gray-700 text-sm">
                Understanding your needs, goals, and target audience through
                comprehensive research and analysis.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 relative z-10">
                <span className="text-gray-700 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-center text-gray-700 text-sm">
                Creating wireframes, prototypes, and visual designs that align
                with your brand and user expectations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 relative z-10">
                <span className="text-gray-700 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-center text-gray-700 text-sm">
                Building robust, scalable applications using modern technologies
                and best development practices.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 relative z-10">
                <span className="text-gray-700 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-center text-gray-700 text-sm">
                Launching your application with proper testing, optimization,
                and seamless go-live processes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 relative z-10">
                <span className="text-gray-700 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-center text-gray-700 text-sm">
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
                  className={`bg-blue-100/70 rounded-full shadow-md animate-float ${
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
                  className={`bg-blue-50/80 rounded-full shadow-md animate-float ${
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

      <div className="min-h-[60vh] min-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 bg-[#E2EBFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Let's Build Something Great Together!
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into powerful digital solutions? Get
            in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 shadow-lg bg-white p-1 rounded-lg">
            <input
              type="email"
              placeholder="What's your work email?"
              className="flex-1 px-4 py-3 focus:outline-none bg-white"
            />
            <button className="bg-[#1E3A8A] hover:bg-blue-800 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
              Get started
            </button>
          </div>
          <p className="text-sm text-gray-500">
            <em>Your email is safe with us — we only send what matters.</em>
          </p>
        </div>
      </div>

      <div className="min-w-[100vw] bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-55">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <img src="/assets/images/Logo.png" alt="StuTech Logo" className="h-15 w-auto" />
                </div>
                <span className="text-3xl font-bold">StuTech</span>
              </div>
              <div className="flex space-x-4 mb-6">
                <FaEnvelope className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <FaLinkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <FaTwitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <FaInstagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <FaPhone className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <FaGithub className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-300">
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
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-300">
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
              <ul className="space-y-3 text-gray-300">
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