import React from "react";
import DeanImage from "../../assets/SPDC/DEANSPDC.png";

const DeansMessage = () => {
  return (
    <div className="bg-[#0C2C5B]   text-white px-10  md:px-40 py-40">
      <h2 className="text-3xl md:text-4xl font-oswaldMedium  border-l-4 border-[#F25022] pl-3 mb-10">
        DEAN’S MESSAGE
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[370px] h-auto object-cover mb-4"
          />
          <div className="text-sm leading-6 font-oswaldLight text-white mt-2">
            <p className="text-[#F7B733] font-bold">Dr. Manoj Chandak</p>
            <p>
              Dean, SPDC MDS, PhD, Fellowship, Dept. <br />
              of Conservative Dentistry and Endodontics
            </p>
            <p>deanspdc@dmimsu.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-sm font-oswaldLight leading-6 text-white">
          <p className="mb-6">
            It is a matter of immense pleasure and pride to be part of this
            esteemed institute. Being a member of the healthcare team engaged in
            alleviating pain and suffering brings great satisfaction. As the
            Head of the Institute, I am proud to share that the college imparts
            quality education, unparalleled clinical exposure, and continually
            adapts to curricular reforms aligned with the evolving needs of
            society. We have been accredited with Grade ‘A++’ by NAAC and have
            earned national and international recognition.
          </p>

          <p className="mb-6">
            This prestigious standing is the result not only of our learned
            faculty’s dedication but also the professionalism and dynamism
            displayed by our graduates and postgraduates. We trust that you too
            will uphold these values and exceed expectations. I assure you that
            every student here is shaped into a dental professional of global
            standards.
          </p>

          <a
            href="#"
            className="text-[#9AD1FF] text-sm font-oswaldLight underline"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeansMessage;
