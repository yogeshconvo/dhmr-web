import React from "react";

export default function InfrastructurePageFEAT() {
  return (
    <div className="p-6 font-[Oswald]">
      {/* Holistic Learning and Infrastructure Section */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-medium text-gray-900 border-l-4 border-red-500 pl-4 mb-6">
          HOLISTIC LEARNING AND INFRASTRUCTURE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Text Column */}
          <div className="space-y-6 text-gray-800">
            <div>
              <h2 className="text-xl font-semibold text-blue-900">
                Teaching–Learning Facilities:
              </h2>
              <p className="text-base font-light">
                Tiered classrooms with smartboards, high-end projectors, Wi-Fi
                enabled campus. Digital learning tools: LMS, ERP, Academic Book,
                Notebook, LRM, Coursera
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-900">
                Laboratory & Computing Facilities:
              </h2>
              <p className="text-base font-light">
                24×7 access to computer labs with HP 285 Ryzen MT desktops
                (Ryzen-5 5600G, 8GB RAM, 512GB SSD, Wi-Fi & Bluetooth, Windows
                11, HP 19.5” Monitor)
                <br />
                <br />
                High-end servers: Up to 2× Intel® Xeon® Scalable (20 cores max),
                16× DDR4 DIMM slots, up to 1TB RAM, up to 14× 3.5” SAS/SATA HDDs
                (224TB max)
                <br />
                <br />
                Intel Server: Intel® Xeon® Silver 4310 (12 cores, 2.1GHz, 18MB
                cache), 128GB RAM, Software stack includes Ubuntu 18.04, Intel®
                oneAPI, AI Analytics Toolkit, Horovod, Intel® MPI, JupyterHub,
                Keras, Seaborn
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-900">
                Skill & Innovation Labs:
              </h2>
              <p className="text-base font-light">
                IBM School of Emerging Technologies, Intel Unnati School of
                Emerging Technologies, AICTE IDEA-Lab, e-Yantra Lab (IIT
                Bombay), Language Lab, R&D Lab,Bio 3D Printing Lab, Tissue
                Engineering Lab, School of Experiential Learning (SEL),
                Incubation Centre
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-900">
                Research & Project Lab:
              </h2>
              <p className="text-base font-light">
                Dedicated space for student-led innovation and research
                initiatives
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <img
              src="/mnt/data/e8db5ed6-5970-4bc3-8d98-3eac1abed878.png"
              alt="Tiered classrooms with smartboards"
              className="rounded-xl shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
