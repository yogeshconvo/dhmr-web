import React from "react";
import StepsPageImg from "../../assets/StepsPage.png";
import Step1 from "../../assets/AdmissionGrid/Step1.png";
import Steps from "../../assets/AdmissionGrid/Steps.png";
import completeIcon from "../../assets/AdmissionGrid/Complete.png";

const steps = [
  {
    step: "Step 1",
    title: "Explore Programs & Eligibility",
    checkIcon: Step1,
    description: `270+ programs across Medicine, Dentistry, Nursing, and more`,
    linkText: "Check eligibility criteria",
    note: "(12th pass with PCB/PCM or Diploma for your respective programs).",
    href: "#",
  },
  {
    step: "Step 2",
    title: "Register Online",
    checkIcon: Steps,
    description: `with your details Select your desired course. You’ll receive a confirmation email with login credentials.`,
    linkText: "Register ",
    href: "#",
  },
  {
    step: "Step 3",
    title: "Fill the Application Form",
    checkIcon: Steps,
    description: `Upload all required documents (e.g., mark sheets, ID proof, etc).`,
    linkText: "Application form",
    href: "#",
  },
  {
    step: "Step 4",
    title: "Pay the Application Fee",
    checkIcon: Steps,
    description:
      "Pay the fee securely via Net Banking, Debit/Credit Card, or UPI. (Fees vary by program - Rs.500 for UG & Rs.750 for PG)",
  },
  {
    step: "Step 5",
    title: "Appear for Entrance Exam/ Counselling",
    checkIcon: Steps,
  },
  {
    step: "",
    title: "Confirm Admission",
    checkIcon: completeIcon,
    description:
      "Receive your provisional admission letter via email. Log in to your application portal to pay the enrolment fee, and secure your seat. Welcome to our community!",
  },
];

export default function StepsPage() {
  return (
    <div
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${StepsPageImg})` }}
    >
      <div className="max-w-full px-4 py-16 mx-auto sm:max-w-full lg:max-w-[calc(100vw-5rem*2)] lg:px-10">
        <h2
          className="text-3xl font-bold mb-20"
          style={{ fontFamily: '"Helvetica LT Std", "Condensed", sans-serif' }}
        >
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          5 STEPS TO BEGIN <br className="hidden sm:block" /> YOUR JOURNEY
        </h2>

        {/* Wrapper container to center steps with fixed width per item */}
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-y-16 gap-x-10 px-4 sm:px-6">
            {steps.map((step, index) => {
              const lineAfter = index < steps.length - 1;

              return (
                <div
                  key={index}
                  className="relative w-full lg:w-[200px] items-start flex-shrink-0 transition-all duration-300"
                >
                  <div className="inline-block relative w-full">
                    {/* Step number */}
                    {step.step && (
                      <p className="text-sm  text-white/80 font-medium mb-2">
                        {step.step}
                      </p>
                    )}

                    {/* Icon */}
                    <img
                      src={step.checkIcon}
                      alt={`${step.step || "Final"} icon`}
                      className={`mb-6 object-contain relative z-10
    ${
      index === steps.length - 1
        ? "w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
        : "w-15 h-15"
    }
  `}
                    />

                    {lineAfter && (
                      <div
                        className="hidden lg:block absolute top-1/2 left-full h-[0.5px] bg-yellow-400"
                        style={{
                          width: "70%",
                          marginLeft: "-120px",
                          transform: "translateY(-50%)",
                          zIndex: 5,
                        }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold ${
                      step.step === "" ? "text-red-400" : "text-[#E1CD67]"
                    } font-oswald-medium`}
                  >
                    {step.title}
                  </h3>

                  {/* Description + Link */}
                  <p className="text-base mt-3 font-oswald-light">
                    {step.linkText && step.href ? (
                      <>
                        <a
                          href={step.href}
                          className="text-blue-300 underline hover:text-blue-400"
                        >
                          {step.linkText}
                        </a>
                        <span className="text-white"> {step.description}</span>
                      </>
                    ) : (
                      step.description
                    )}
                  </p>

                  {/* Note */}
                  {step.note && (
                    <p className="text-base mt-3 font-oswald-light">
                      {step.note}
                    </p>
                  )}

                  {/* Mobile horizontal line below content */}
                  {lineAfter && (
                    <div className="lg:hidden mt-6 h-[1px] w-full bg-yellow-400" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-white/70 mt-16 ml-1 font-oswald-light text-center lg:text-left">
          *Note - This step is exclusively for DMIHER CET and does not apply to{" "}
          <br className="hidden lg:block" />
          NEET-based programs (MBBS, BAMS, BDS, BHMS, and MDS ..etc)
        </p>
      </div>
    </div>
  );
}
