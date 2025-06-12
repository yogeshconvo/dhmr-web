import React from "react";

const contacts = [
  {
    title: "Jawaharlal Nehru Medical College",
    contact: "Dr. Abhay Gaidhane, Dean",
    email: "deanjnmc_wardha@dmiher.edu.in",
  },
  {
    title: "Sharad Pawar Dental College and Hospital",
    contact: "Dr. Manoj Chandak, Dean",
    email: "deanspdc@dmiher.edu.in",
  },
  {
    title: "Mahatma Gandhi Ayurvedic College Hospital and Research Centre",
    contact: "Dr. Bharat Rathi, Dean",
    email: "bharat.rathi@dmiher.edu.in",
  },
  {
    title: "Smt Radhikabai Meghe Memorial College of Nursing",
    contact: "Dr. Vaishali Taksande (Chahande), Principal",
    email: "principal.srmmcon@dmiher.edu.in",
  },
  {
    title: "Ravi Nair Physiotherapy College",
    contact: "Dr. Moh'd Irshad Qureshi, Principal",
    email: "principalrnpc@dmiher.edu.in",
  },
  {
    title: "Datta Meghe College of Pharmacy",
    contact: "Dr. Anil Meghrajji Pethe, Principal",
    email: "anil.pethe@dmiher.edu.in",
  },
  {
    title: "Faculty of Engineering and Technology",
    contact: "Prof (Dr) K T V Reddy, Dean",
    email: "dean.feat@dmiher.edu.in",
  },
  {
    title: "Faculty of Commerce and Management",
    contact: "Dr. Pankajkumar A. Anawade, Dean",
    email: "pankaj.anawade@dmiher.edu.in",
  },
  {
    title: "Faculty of Science and Technology",
    contact: "Dr. Supriya Narad, Dean",
    email: "supriya.narad@dmiher.edu.in",
  },
  {
    title: "Centre for Distance and Online Education",
    contact: "Dr. Chhitij Raj, Director",
    email: "director.cdoe@dmiher.edu.in",
  },
  {
    title: "School of Allied Health Sciences, Wardha",
    contact: "Dr. Sunil Thitame, Dean",
    email: "sunil.thitame@dmiher.edu.in",
  },
  {
    title: "Shalinitai Meghe College of Nursing, Wardha",
    contact: "Dr. Ranjana Sharma, Principal",
    email: "ranjana.msn@dmiher.edu.in",
  },
  {
    title: "Datta Meghe Medical College, Nagpur",
    contact: "Dr. Ujwal Gajbe, Dean",
    email: "deandmmc@dmiher.edu.in",
  },
  {
    title: "School of Allied Health Sciences, Nagpur",
    contact: "Dr. Rakhi Chandak, Dean",
    email: "rakhi.chandak@dmiher.edu.in",
  },
  {
    title: "Shalinitai Meghe College of Nursing, Nagpur",
    contact: "Dr. Nilima Rakshale, Principal",
    email: "principal.smconnagpur@dmiher.edu.in",
  },
  {
    title: "Shalinitai Meghe Homeopathy Hospital College and Research Centre",
    contact: "Dr. Prashant N. Bharbat, Principal",
    email: "homeopathycollege@dmiher.edu.in",
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

        {/* <div className="bg-[#F04E30] text-white py-5 px-5 mb-8 flex items-center justify-center font-semibold text-sm">
          <span className="mr-2">📞 HELPLINE</span>
          <a href="tel:+918888040999" className="underline hover:no-underline">
            +91 88880 40999
          </a>
        </div> */}

        <a href="tel:+918888040999" className="block">
          <div className="bg-[#F04E30] text-white py-4 px-5 mb-8 flex items-center justify-center font-semibold text-sm cursor-pointer">
            <span className="mr-2">📞 HELPLINE</span> +91 88880 40999
          </div>
        </a>

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
