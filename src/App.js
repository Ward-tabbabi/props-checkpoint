import "./App.css";
import Profile from "./profile/Profile";
const profiles = [
  {
    fullname: "Elon Musk",
    profession: "ingénieur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SpaceX_CEO_Elon_Musk_visits_N%26NC_and_AFSPC_%28190416-F-ZZ999-006%29_%28cropped%29.jpg/220px-SpaceX_CEO_Elon_Musk_visits_N%26NC_and_AFSPC_%28190416-F-ZZ999-006%29_%28cropped%29.jpg",

    bio: " Elon Musk (prononcé en anglais /ˈiː.lɒn ˈmʌsk/), né le 28 juin 1971 à Pretoria (Afrique du Sud), est un ingénieur, entrepreneur, chef d'entreprise et milliardaire sud-africain, naturalisé canadien en 1988 puis américain en 2002Il est le président-directeur général (PDG) de la société SpaceX et directeur général de la société Tesla, après avoir été président du conseil d'administration de SolarCity et de Tesla",
  },
  {
    fullname: "Mark Zuckerberg",
    profession: "informaticien",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/260px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg",

    bio: "Mark Elliot Zuckerberg [mɑɹk ˈeliət ˈzʌkərbɜːrɡ]1, né le 14 mai 1984 à White Plains dans l'État de New York, est un informaticien, chef d'entreprise et milliardaire américain. Il est le cofondateur du site et réseau social Facebook en 2004, dont il est l'actionnaire majoritaire et également le président-directeur général.",
  },
  {
    fullname: "Jeff Bezos",
    profession: " computer engineer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/220px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
    bio: "Jeffrey Preston Bezos (/ˈbeɪzoʊs/ BAY-zohss;[1] né Jorgensen; born January 12, 1964) is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut.[2][3] He is the founder and executive chairman of Amazon, where he previously served as the president and CEO. With a net worth of around US$176 billion as of February 2022, Bezos is the second-wealthiest person in the world according to Bloomberg's Billionaires Index and third-wealthiest person according to Forbes.",
  },
];
function App() {
  const aff = (name) => alert(name);
  return (
    <div className="App">
      {profiles.map((el) => (
        <Profile profile={el} aff={aff} />
      ))}
    </div>
  );
}

export default App;
