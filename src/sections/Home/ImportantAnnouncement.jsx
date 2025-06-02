import { ArrowLeft, ArrowRight } from "lucide-react";

const announcements = [
  "Admission Notification for M.Sc JNMC (2025-2026)",
  "Hostel Fees Notice - PG MS, MD 1st Year 2024-25",
  "Admission Notification For B.Pharm And Pharm D. Entrance Test Dmiher-Cet-2025-26",
  "Fee structure 2025-26 (Engineering)",
  "Admission Notification For M.Pharm Entrance Test Dmiher-Cet-2025-26",
];

const ImportantAnnouncements = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap');
      `}</style>

      <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white text-gray-500">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium ml-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
          <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
          <br />
          IMPORTANT ANNOUNCEMENTS
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm font-light text-gray-600 gap-4">
          <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto">
            <a href="#" className="underline text-base sm:text-lg hover:text-gray-500 transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Admissions 2025-26
            </a>
            <span className="text-base sm:text-lg mx-2" style={{ fontFamily: 'Oswald, sans-serif' }}> | </span>
            <span className="text-base sm:text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>University</span>
          </div>

          <div className="flex items-center space-x-3 order-1 sm:order-2">
            <button className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors">
              <ArrowLeft size={16} className="text-gray-400" />
            </button>
            <button className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors">
              <ArrowRight size={16} className="text-gray-500" />
            </button>
            <span className="text-red-600 font-medium ml-2 text-sm sm:text-base" style={{ fontFamily: 'Oswald, sans-serif' }}>
              VIEW ALL
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {announcements.map((text, i) => (
            <div
              key={i}
              className="text-gray-700 border-r border-gray-300 last:border-r-0 pr-4 pb-4 sm:pb-0"
            >
              <p className="text-base sm:text-lg font-light leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportantAnnouncements;