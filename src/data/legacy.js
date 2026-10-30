import imgArshia from "../assets/images/members/arshia.jpg";
import imgFaizaan from "../assets/images/members/faizaan.jpg";
import imgMoksha from "../assets/images/members/moksha.jpg";
import imgNishchay from "../assets/images/legacy/nishchay.jpg";
import imgRitesh from "../assets/images/members/ritesh.jpg";
import imgSoumya from "../assets/images/legacy/soumya.jpg";

function person(name, image = "") {
  return { name, image };
}

/**
 * Confirmed record only. First names stand where a last name was not given.
 * Small portraits of presidents and vice presidents go in
 * src/assets/images/members/ when they are provided.
 */
export const founding = {
  year: "May 2022",
  founder: person("Keshav Goyal"),
  coFounder: person("Mayank Hora"),
  generalSecretaries: [person("Aastha Jha Suri"), person("Shivangi Raghav")],
};

export const legacy = [
  {
    year: "2026-27",
    presidents: [person("Faizaan Alam", imgFaizaan)],
    vicePresidents: [
      person("Ritesh", imgRitesh),
      person("Arshia", imgArshia),
      person("Moksha", imgMoksha),
    ],
    generalSecretaries: [person("Harshtej"), person("Rachit")],
    culturalSecretaries: [person("Rahul"), person("Bhumika")],
  },
  {
    year: "2025-26",
    presidents: [person("Yash Bansal")],
    coPresidents: [person("Anand Misra")],
    vicePresidents: [person("Mansha"), person("Hasdeep")],
    generalSecretaries: [person("Saloni Gupta"), person("Bhavya Singla")],
    jointSecretaries: [person("Shaurya"), person("Chitragda")],
    culturalSecretaries: [person("Ananya")],
    treasurers: [person("Jai")],
  },
  {
    year: "2025",
    presidents: [person("Soumyaaa Miglani", imgSoumya)],
    vicePresidents: [person("Nishchay", imgNishchay), person("Harshita")],
    generalSecretaries: [person("Dishant")],
    culturalSecretaries: [person("Utsav Singh Rao")],
    treasurers: [person("Dhruv")],
  },
  {
    year: "2024",
    presidents: [person("Ansh Aggarwal")],
    vicePresidents: [person("Ravdeep Singh"), person("Shweta")],
    generalSecretaries: [person("Archie Vijay"), person("Ananya Sharma")],
    treasurers: [person("Tiya Ghaloth")],
  },
  {
    year: "2023",
    presidents: [person("Mayank Hora")],
    vicePresidents: [person("Himanshu Gupta"), person("Ekargh Grover")],
    generalSecretaries: [person("Richa Kaushik"), person("Ankita")],
    culturalSecretaries: [person("Ujjwal"), person("Divye Gupta")],
    treasurers: [person("Vishnu Tomar")],
    note: "The first president of Qaafila.",
  },
];
