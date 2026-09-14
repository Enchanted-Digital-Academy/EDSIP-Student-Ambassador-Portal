import marcusMonday from "../assets/team-assets/Pictures/Business Admin/Marcus Monday.jpg";

import imhanobeElvisMitana from "../assets/team-assets/Pictures/Compliance/Imhanobe elvis mitana.jpg";

import adekanmbiEsther from "../assets/team-assets/Pictures/Data Science & Analytics/Adekanmbi Esther.jpg";
import ajayiIbrahim from "../assets/team-assets/Pictures/Data Science & Analytics/Ajayi Ibrahim.jpg";
import dadaEmmanuel from "../assets/team-assets/Pictures/Data Science & Analytics/Dada Emmanuel.jpg";

import awahOkoroLisaFavour from "../assets/team-assets/Pictures/Digital Marketing/Awah-Okoro Lisa Favour.jpg";
import pelumiDamilolaFaith from "../assets/team-assets/Pictures/Digital Marketing/Pelumi Damilola Faith.jpg";

import amosTracy from "../assets/team-assets/Pictures/Human Resources/Amos Tracy.jpg";

import ladeleSimiloluwaBolu from "../assets/team-assets/Pictures/Product Design/Ladele Similoluwa Bolu.jpg";

import adamsFriday from "../assets/team-assets/Pictures/Software Development/Adams Friday.jpg";
import folarinObajenihi from "../assets/team-assets/Pictures/Software Development/Folarin Obajenihi.png";
import ifeanyiWilliamsAlexander from "../assets/team-assets/Pictures/Software Development/Ifeanyi Williams Alexander.jpg";

export type TeamMember = {
  name: string;
  department: string;
  image: string;
};

export type Team = {
  name: string;
  members: TeamMember[];
};

export const teams: Team[] = [
  {
    name: "Business Administration",
    members: [
      {
        name: "Marcus Monday",
        department: "Business Administration",
        image: marcusMonday,
      },
    ],
  },

  {
    name: "Compliance",
    members: [
      {
        name: "Imhanobe Elvis Mitana",
        department: "Compliance",
        image: imhanobeElvisMitana,
      },
    ],
  },

  {
    name: "Data Science & Analytics",
    members: [
      {
        name: "Ajayi Ibrahim",
        department: "Data Science & Analytics",
        image: ajayiIbrahim,
      },
      {
        name: "Dada Emmanuel",
        department: "Data Science & Analytics",
        image: dadaEmmanuel,
      },
      {
        name: "Esther Adekanmbi",
        department: "Data Science & Analytics",
        image: adekanmbiEsther,
      },
    ],
  },

  {
    name: "Digital Marketing",
    members: [
      {
        name: "Awah-Okoro Lisa Favour",
        department: "Digital Marketing",
        image: awahOkoroLisaFavour,
      },
      {
        name: "Pelumi Damilola Faith",
        department: "Digital Marketing",
        image: pelumiDamilolaFaith,
      },
    ],
  },

  {
    name: "Human Resources",
    members: [
      {
        name: "Amos Tracy",
        department: "Human Resources",
        image: amosTracy,
      },
    ],
  },

  {
    name: "Product Design",
    members: [
      {
        name: "Ladele Similoluwa Bolu",
        department: "Product Design",
        image: ladeleSimiloluwaBolu,
      },
    ],
  },

  {
    name: "Software Development",
    members: [
      {
        name: "Adams Friday",
        department: "Software Development",
        image: adamsFriday,
      },
      {
        name: "Folarin Obajenihi",
        department: "Software Development",
        image: folarinObajenihi,
      },
      {
        name: "Ifeanyi Williams Alexander",
        department: "Software Development",
        image: ifeanyiWilliamsAlexander,
      },
    ],
  },
];