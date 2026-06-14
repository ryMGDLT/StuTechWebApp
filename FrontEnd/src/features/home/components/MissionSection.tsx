import { TeamMemberAvatar } from "@/components/TeamMemberAvatar";
import { paddedTeamMembers } from "@/features/home/lib/team-carousel";
import { BRAND_SHORT } from "@/lib/brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function MissionSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative w-full overflow-x-hidden bg-xone-section-gradient px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto mt-3 max-w-7xl text-center">
        <h2
          id="mission-heading"
          className="mt-3 text-2xl font-semibold text-foreground sm:text-4xl lg:text-5xl"
        >
          Who We Are
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base font-medium leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-2xl">
          We are a forward-thinking startup dedicated to system generation,
          UI/UX design, and web & mobile application development. At{" "}
          <span className="font-extrabold text-xone-violet">{BRAND_SHORT}</span>
          , we believe technology should not only be powerful but also simple,
          accessible, and designed with users in mind. Our goal is to empower
          businesses and individuals with digital solutions that truly make life
          easier.
        </p>
        <div className="relative mt-8 flex flex-col gap-4 overflow-hidden rounded-lg bg-xone-card p-4 shadow-[5px_5px_10px_rgba(0,0,0,0.2)] sm:mt-10 lg:flex-row">
          <img
            src="/assets/images/upleft.png"
            className="absolute -left-12 -top-10 hidden h-36 w-36 rounded-md object-cover sm:block"
            alt=""
            aria-hidden
          />
          <img
            src="/assets/images/upright.png"
            className="absolute -right-12 -top-10 hidden h-36 w-36 rounded-md object-cover sm:block"
            alt=""
            aria-hidden
          />
          <img
            src="/assets/images/bottomleft.png"
            className="absolute -bottom-16 -left-12 hidden h-36 w-36 rounded-md object-cover sm:block"
            alt=""
            aria-hidden
          />
          <img
            src="/assets/images/bottomright.png"
            className="absolute -bottom-16 -right-12 hidden h-36 w-36 rounded-md object-cover sm:block"
            alt=""
            aria-hidden
          />
          <div className="flex-1 rounded-md p-4 text-left sm:p-6">
            <h3 className="text-2xl font-medium sm:text-3xl">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed tracking-wide sm:text-lg lg:text-xl">
              To bridge the gap between innovative technology and exceptional
              user experiences by creating seamless, reliable, and scalable
              solutions tailored to real-world needs.
            </p>
            <ul className="mt-4 list-disc pl-5 text-base text-xone-violet sm:text-lg lg:text-xl">
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
          <div className="flex flex-1 items-center justify-center overflow-hidden rounded-3xl p-4">
            <img
              src="/assets/images/team.png"
              className="h-auto w-full max-w-md rounded-3xl object-cover"
              alt="Xone team collaborating"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-7xl rounded-lg border-2 border-white bg-xone-card px-4 py-8 shadow-[5px_5px_10px_rgba(0,0,0,0.2)] sm:mt-16 sm:px-8 sm:py-10">
          <h3 className="text-2xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Meet Our Team
          </h3>
          <p className="mx-auto mb-8 mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg lg:text-2xl">
            Comprehensive digital solutions designed to transform your business
            and accelerate growth
          </p>
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={false}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={10}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
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
              className="home-team-swiper px-2 sm:px-4"
            >
              {paddedTeamMembers.map((member, index) => (
                <SwiperSlide key={`${member.name}-${index}`}>
                  <div className="mx-auto flex h-[420px] w-full max-w-[330px] flex-col items-center rounded-lg bg-white p-6 shadow-md sm:h-[500px]">
                    <TeamMemberAvatar
                      initials={member.initials}
                      name={member.name}
                      size="lg"
                    />
                    <h4 className="mb-2 mt-6 text-xl font-semibold text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-center text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination mt-8" />
              <div className="swiper-button-prev text-xone-violet after:text-2xl" />
              <div className="swiper-button-next text-xone-violet after:text-2xl" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
