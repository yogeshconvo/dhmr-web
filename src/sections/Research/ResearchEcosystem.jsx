import {
  Globe,
  Handshake,
  Award,
  Rocket,
  Lightbulb,
  FileText,
  Star,
  Microscope,
  Search,
} from "lucide-react";
import ResearchEco from "../../assets/RECO.png";

export default function ResearchEcosystem() {
  return (
    <div className="bg-gray-100 flex py-10   px-4 md:px-12 mx-auto">
      <div className="grid md:grid-cols-10 p-20 gap-8 items-start w-full">
        <div className="md:col-span-7">
          <img
            src={ResearchEco}
            alt="Research Ecosystem"
            className="w-400 pl-10 h-auto"
          />
        </div>

        <div className="md:col-span-3 mt-15">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            <hr className="w-16 sm:w-20 border-red-600 mb-2 border-t-4" />
            RESEARCH <br /> ECOSYSTEM
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            A Research Ecosystem <br />
            That Delivers Impact
          </h3>
          <p className="text-gray-700 mb-3">
            <strong>Empowering Research at Every Level</strong>
            <br />
            From undergraduate students to PhD scholars and faculty, DMIHER
            nurtures a thriving research culture through:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dedicated seed funding</li>
            <li>114+ advanced research labs</li>
            <li>49 specialized departments</li>
            <li>
              Facilities spanning AI, molecular epidemiology, tissue
              engineering, herbal medicine, gait & motion analysis, and more
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
