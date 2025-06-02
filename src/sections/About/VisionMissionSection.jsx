import React from "react";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        {/* Vision Block */}
        <div className="bg-[#0b2d62] p-6 sm:p-8 md:p-10  shadow-md">
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="w-12 h-1 bg-orange-500 mb-4"></div>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-6 font-oswald-medium">
                Vision
              </h2>
              <p className="text-lg leading-relaxed font-oswald-light">
                “To emerge as the global centre of excellence in the best
                evidence based higher education encompassing a quality centric,
                innovative and interdisciplinary approach, generating refutative
                research and offering effective and affordable health care for
                the benefit of the mankind”
              </p>
            </div>
            <Eye
              size={80}
              className="opacity-70 mt-1 text-gray-100 shrink-0 hidden sm:block"
            />
          </div>
        </div>

        {/* Mission Block */}
        <div className="bg-[#e5cf60] p-6 sm:p-8 md:p-10 text-gray-800 shadow-md">
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-3xl font-bold uppercase tracking-wide mb-6 text-gray-700 font-oswald-medium">
                Mission
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 font-oswald-light">
                “DMIHER shall develop competent, confident, concerned,
                compassionate and globally relevant professionals by quality,
                learner, community and evidence centric ‘competency-based model’
                of higher education with a value orientation, through all its
                constituent units.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 font-oswald-light">
                It shall foster a conducive milieu for interdisciplinary
                research practices generating consequential and meaningful
                outcomes for the nation in general and the region in particular.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 font-oswald-light">
                It shall deliver comprehensive quality health care services to
                the rural, needy, marginalized and underprivileged populace.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed font-oswald-light">
                This shall be achieved through appropriate collaborative
                linkages and a proactive, transparent and accountable
                decentralized governance system.”
              </p>
            </div>
            <Target
              size={80}
              className="opacity-70 mt-1 text-gray-500 shrink-0 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
