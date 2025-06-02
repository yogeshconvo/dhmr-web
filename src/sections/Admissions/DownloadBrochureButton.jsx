import { Download } from "lucide-react";

export default function DownloadBrochureButton() {
  return (
    <div className="flex items-center m-20 justify-center bg-white">
      <button className="flex items-center gap-2 bg-[#F04E30] text-white font-bold px-30 py-3 rounded-md hover:bg-[#e04428] transition">
        DOWNLOAD UNIVERSITY BROCHURE
        <Download size={18} strokeWidth={3} />
      </button>
    </div>
  );
}
