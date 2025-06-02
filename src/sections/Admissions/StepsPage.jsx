import React from "react";
import StepsPageImg from "../../assets/StepsPage.png";

const steps = [
  {
    step: "Step 1",
    title: "Explore Programs & Eligibility",
    iconColor: "bg-red-600",
    checkIcon: "✓",
    description: `270+ programs across Medicine, Dentistry, Nursing, and more`,
    linkText: "Check eligibility criteria",
    note: "(12th pass with PCB/PCM or Diploma for your respective programs).",
    href: "#",
  },
  {
    step: "Step 2",
    title: "Register Online",
    iconColor: "bg-yellow-300",
    checkIcon: "✓",
    description: `Select your desired course. You’ll receive a confirmation email with login credentials.`,
    linkText: "Register",
    href: "#",
  },
  {
    step: "Step 3",
    title: "Fill the Application Form",
    iconColor: "bg-yellow-300",
    checkIcon: "✓",
    description: `Upload all required documents (e.g., mark sheets, ID proof, etc).`,
    linkText: "Application form",
    href: "#",
  },
  {
    step: "Step 4",
    title: "Pay the Application Fee",
    iconColor: "bg-yellow-300",
    checkIcon: "✓",
    description:
      "Pay the fee securely via Net Banking, Debit/Credit Card, or UPI. (Fees vary by program - Rs.500 for UG & Rs.750 for PG)",
  },
  {
    step: "Step 5",
    title: "Appear for Entrance Exam/ Counselling",
    iconColor: "bg-yellow-300",
    checkIcon: "✓",
    description: "Attend the required entrance exam or counselling round.",
  },
  {
    step: "",
    title: "Confirm Admission",
    iconColor: "bg-red-600",
    checkIcon: "👍",
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-left ml-10 mb-10">
          <hr className="w-16 sm:w-20 border-red-600 mb-4 border-t-4 mx-auto md:mx-0" />
          <h1 className="text-3xl font-bold font-oswald-medium">
            5 STEPS TO BEGIN <br className="hidden sm:block" /> YOUR JOURNEY
          </h1>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-32 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              {step.iconColor && (
                <div
                  className={`w-12 h-12 ${step.iconColor} rounded-full flex items-center justify-center text-2xl mb-4`}
                >
                  {step.checkIcon}
                </div>
              )}
              {step.step && (
                <p className="text-sm text-white/70 font-medium mb-2 font-oswald-light">
                  {step.step}
                </p>
              )}
              <h3
                className={`text-lg font-bold ${
                  step.iconColor === "bg-red-600"
                    ? "text-red-400"
                    : "text-yellow-300"
                } font-oswald-medium`}
              >
                {step.title}
              </h3>
              <p className="text-sm mt-2 font-oswald-light">
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
              {step.note && (
                <p className="text-sm mt-2 font-oswald-light">{step.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-white/70 mt-10 font-oswald-light">
          *Note - This step is exclusively for DMIHER CET and does not apply to{" "}
          <br />
          NEET-based programs (MBBS, BAMS, BDS, BHMS, and MDS ..etc)
        </p>
      </div>
    </div>
  );
}
