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
