"use client";
import React, { useRef } from 'react';
import { testimonialData } from "./testimonialData";
import SingleTestimonial from "./SingleTestimonial";
import './testimonial.css';

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-[40px] ml-[74px] md:pt-1">
      <div>
        <h2 className="font-poppins text-[40px] lg:text-[38px] lg:text-left lg:mt-[30px]">
          <span className="tstm leading-[92px]">TESTIMONIALS</span>
        </h2>
      </div>
      <div>
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
          {testimonialData.map((review) => (
            <div key={review.id} className="testimonial-item">
              <SingleTestimonial review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
