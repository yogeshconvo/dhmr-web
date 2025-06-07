import React from "react";

const contacts = [
  {
    title: "Jawaharlal Nehru Medical College, Wardha",
    contact: "Dr. Abhay Gaidhane, Dean",
    email: "deanjnmc_wardha@dmimsu.edu.in",
  },
  {
    title: "Sharad Pawar Dental College, Wardha",
    contact: "Dr. Manoj Chandak, Dean SPDC ,Admission Office",
    email: "deanspdc@dmimsu.edu.in",
  },
  {
    title: "Mahatma Gandhi Ayurvedic College & Research Center, Wardha",
    contact: "Dr. Bharat Rathi, Dean, MGACH & RC",
    email: "bharat.rathi@dmimsu.edu.in",
  },
  {
    title: "Srimati Radhikabai Meghe Memorial College of Nursing, Wardha",
    contact: "Dr. Vaishali Taksande (Chahanade), Principal",
    email: "principal.srmmcon@dmimsu.edu.in",
  },
  {
    title: "Ravi Nair Physiotherapy College, Wardha",
    contact: "Dr. Moh’d Irshad Qureshi, Principal RNPC",
    email: "principalrnpc@dmimsu.edu.in",
  },
  {
    title: "Datta Meghe College of Pharmacy, Wardha",
    contact: "Dr. Anil Meghrajji Pethe, Professor & Principal",
    email: "anil.pethe@dmimsu.edu.in",
  },
  {
    title: "Faculty of Engineering and Technology, Wardha",
    contact: "Prof (Dr) K T V Reddy, Dean, FEAT",
    email: "dean.feat@dmimsu.edu.in",
  },
  {
    title: "School of Allied Sciences, Wardha",
    contact: "Dr. Pankajkumar A. Anawade, Principal",
    email: "pankaj.anawade@dmimsu.edu.in",
  },
  {
    title: "Centre for Distance and Online Learning, Wardha",
    contact: "Dr. Chhitij Raj (Director)",
    email: "director.code@dmimsu.edu.in",
  },
  {
    title: "School of Allied Health Sciences, Wardha",
    contact: "Dr. Sunil Thitame, Dean, SAHES",
    email: "sunil.thitame@dmimsu.edu.in",
  },
  {
    title: "Shalinitai Meghe College Of Nursing, Wardha",
    contact: "Dr. Ranjana Sharma, Principal",
    email: "ranjana.msn@dmimsu.edu.in",
  },
  {
    title: "SRMMCON (Formerly Florence Nightingale College of Nursing, Wardha)",
    contact: "Dr. Vaishali Taksande (Chahanade), Principal",
    email: "principal.srmmcon@dmimsu.edu.in",
  },
  {
    title: "Datta Meghe Medical College, Nagpur",
    contact: "Dr. Ujwal Gajbe, Dean, DMMC",
    email: "deandmmc@dmimsu.edu.in",
  },
  {
    title: "School of Allied Health Sciences, Nagpur",
    contact: "Dr. Sunil Thitame, Dean, SAHES",
    email: "sunil.thitame@dmimsu.edu.in",
  },
  {
    title:
      "Shalinitai Meghe Homeopathy Hospital College and Research Centre Nagpur",
    contact: "Dr. Prashant N. Bharbat (Principal)",
    email: "homeopathycollege@dmimsu.edu.in",
  },
  {
    title: "Shalinitai Meghe College Of Nursing, Nagpur",
    contact: "Dr. Nilima Rakshale, Principal",
    email: "principal.smconnagpur@dmimsu.edu.in",
  },
];
const ImportantContacts = () => {
  return (
    <section className="w-full px-5 mx-auto lg:px-25 md:px-15 py-8 bg-gray-100">
      <div>
        <h2 className="text-4xl font-semibold text-[#707070] pl-3 mb-4 uppercase">
          <hr className="w-16 sm:w-20 h-2 border-[#F04E30]  mb-4 border-t-4" />
          Important <br className="hidden sm:block" /> Contacts
        </h2>

        <div className="bg-[#F04E30] text-white py-5 px-5  mb-8 flex items-center justify-center font-semibold text-sm">
          <span className="mr-2">📞 HELPLINE</span> +918888040999
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-4 md:gap-6">
          {contacts.map((item, idx) => (
            <div key={idx} className="border border-gray-300 w-full md:w-auto">
              {/* Title */}
              <div className="bg-gray-100 px-5 py-3 border-b border-gray-300">
                <h3 className="text-[#F04E30] font-semibold text-sm leading-snug">
                  <h3 className="text-[#F04E30] font-semibold text-xm leading-snug">
                    {item.title}
                  </h3>
                </h3>
              </div>
              {/* Content */}
              <div className="bg-gray-100 px-4 py-3">
                <p className="text-sm text-[#707070] mb-1">
                  <span className="font-bold text-[#707070]">Contact:</span>{" "}
                  {item.contact}
                </p>
                <p className="text-sm text-[#707070] break-words">
                  <span className="font-bold text-[#707070]">Email:</span>{" "}
                  {item.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantContacts;
