import { Download } from "lucide-react";
import { saveAs } from "file-saver";
import AdmissionBrochure from "../../assets/AdmissionBrochure/National Brochure.pdf";

export default function DownloadBrochureButton() {
  const handleDownload = () => {
    // Fetch the file as blob and trigger download
    fetch(AdmissionBrochure)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "National_Brochure.pdf");
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 py-10 sm:py-16">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 flex-wrap bg-[#F04E30] text-white font-bold px-6 sm:px-10 md:px-16 py-3 rounded-md hover:bg-[#e04428] transition text-sm sm:text-base md:text-lg"
      >
        DOWNLOAD UNIVERSITY BROCHURE
        <Download size={18} strokeWidth={3} />
      </button>
    </div>
  );
}

// import { useEffect } from "react";

// const ApplyPage = () => {
//   useEffect(() => {
//     // Add the external script to load the widget
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.async = true;
//     script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup the script when the component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Apply Now</h1>
//       <div
//         className="npf_wgts"
//         data-height="400px"
//         data-w="e07589d3e4cb30c4c23ee47924975ec8"
//         style={{ minHeight: "400px" }}
//       ></div>
//     </div>
//   );
// };

// export default ApplyPage;
