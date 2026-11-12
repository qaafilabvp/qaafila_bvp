import imgAarush from "../assets/images/members/aarush.jpg";
import imgAbdul from "../assets/images/members/abdul.jpg";
import imgAnika from "../assets/images/members/anika.jpg";
import imgArshia from "../assets/images/members/arshia.jpg";
import imgFarhan from "../assets/images/members/farhan.jpg";
import imgFaizaan from "../assets/images/members/faizaan.jpg";
import imgHarshtej from "../assets/images/members/harshtej-2.jpg";
import imgMoksha from "../assets/images/members/moksha.jpg";
import imgPaarth from "../assets/images/members/paarth.jpg";
import imgPavitra from "../assets/images/members/pavitra.jpg";
import imgRachit from "../assets/images/members/rachit.jpg";
import imgRahul from "../assets/images/members/rahul.jpg";
import imgRitesh from "../assets/images/members/ritesh.jpg";
import imgRitvik from "../assets/images/members/ritvik.jpg";
import imgSuhavi from "../assets/images/members/suhavi.jpg";
import imgVanshikaGoel from "../assets/images/members/vanshika-goel.jpg";
import imgVasvi from "../assets/images/members/vasvi.jpg";

function seat(id, name, position, department = "", image = "") {
  return {
    id,
    name,
    position,
    department,
    image,
    bio: "",
  };
}
/**
 * Known members only. Empty strings are intentional placeholders.
 * Do not invent last names, bios, or social handles.
 *
 * Portraits live in src/assets/images/members/.
 * Source drops: core/, heads/, hall of fame/ at the repo root.
 */
export const principal = seat(
  "principal",
  "Dharmendra Saini",
  "Principal",
);
export const hod = seat("hod", "Prakhar", "HOD");
export const teacherIncharge = seat(
  "teacher-incharge",
  "Neetu",
  "Teacher Incharge",
);
export const president = seat(
  "president",
  "Faizaan Alam",
  "President",
  "",
  imgFaizaan,
);
export const vicePresidents = [
  seat("vp-ritesh", "Ritesh", "Vice President", "", imgRitesh),
  seat("vp-arshia", "Arshia", "Vice President", "", imgArshia),
  seat("vp-moksha", "Moksha", "Vice President", "", imgMoksha),
];
export const culturalSecretaries = [
  seat("cs-rahul", "Rahul", "Cultural Secretary", "", imgRahul),
  seat("cs-bhumika", "Bhumika", "Cultural Secretary"),
];
export const generalSecretaries = [
  seat("gs-harshtej", "Harshtej", "General Secretary", "", imgHarshtej),
  seat("gs-rachit", "Rachit", "General Secretary", "", imgRachit),
];
export const jointSecretaries = [];
export const abdul = seat(
  "head-abdul",
  "Abdul",
  "Head",
  "PR and Performance",
  imgAbdul,
);
export const anika = seat(
  "head-anika",
  "Anika",
  "Head",
  "PR and Performance",
  imgAnika,
);
export const headTeams = [
  {
    title: "PR and Performance",
    members: [abdul, anika],
  },
  {
    title: "SM and Publicity",
    members: [
      seat("head-sm-ritvik", "Ritvik", "Head", "SM and Publicity", imgRitvik),
      seat("head-sm-kavya", "Kavya Soni", "Head", "SM and Publicity"),
    ],
  },
  {
    title: "Content and Documentation",
    members: [
      seat(
        "head-content-placeholder",
        "",
        "Head",
        "Content and Documentation",
      ),
      seat(
        "head-content-vanshika-dhand",
        "Vanshika Dhand",
        "Head",
        "Content and Documentation",
      ),
    ],
  },
  {
    title: "Event Management",
    members: [
      seat(
        "head-events-vanshika-goel",
        "Vanshika Goel",
        "Head",
        "Event Management",
        imgVanshikaGoel,
      ),
      seat(
        "head-events-farhan",
        "Farhan Ali Khan",
        "Head",
        "Event Management",
        imgFarhan,
      ),
    ],
  },
  {
    title: "Video Editing",
    members: [
      seat("head-video-bharat", "Bharat", "Head", "Video Editing"),
      seat("head-video-pavitra", "Pavitra", "Head", "Video Editing", imgPavitra),
    ],
  },
  {
    title: "Design",
    members: [
      seat("head-design-aarush", "Aarush", "Head", "Design", imgAarush),
      seat("head-design-vasvi", "Vasvi", "Head", "Design", imgVasvi),
    ],
  },
  {
    title: "Book Club",
    members: [
      seat("head-book-suhavi", "Suhavi", "Head", "Book Club", imgSuhavi),
      seat("head-book-paarth", "Paarth", "Head", "Book Club", imgPaarth),
    ],
  },
  {
    title: "Podcast",
    members: [president, abdul, anika],
  },
];
export const heads = headTeams.flatMap((team) => team.members);
export const executiveCommittee = [
  president,
  ...vicePresidents,
  ...culturalSecretaries,
  ...generalSecretaries,
  ...jointSecretaries,
];
export const executives = [];
export const featuredMemberIds = ["president"];
export const namedCoreCommittee = [
  ...vicePresidents,
  ...culturalSecretaries,
  ...generalSecretaries,
];
