import { type Experience, experiences } from './experience';

export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website?: string;
  description: string;
  jobTitle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    github: string;
    linkedin: string;
  };
  image: {
    profile: string;
  };
  flipSentences: string[];
  experiences?: Experience[];
};

const USER: User = {
  firstName: 'Muhammet Mustafa',
  lastName: 'Bilgin',
  name: 'Muhammet Mustafa Bilgin',
  email: 'Muhammet.bilgin.m@gmail.com',
  domain: 'mbilgin.com.tr',
  jobTitle: 'Frontend Developer',
  username: 'mbilgin',
  tagline: 'Frontend Developer',
  location: 'Adapazarı, Sakarya, Turkey',
  description:
    "Someone who enjoys designing, developing, and solving problems using web technologies. I have improved myself in these areas and I believe I am capable of putting pieces together and designing things. Details are what make the whole beautiful, and in this context, I think that every detail should be close to perfection in terms of beauty. I believe this makes me competent.",
  namePronunciationUrl: 'https://mbilgin.com.tr/assets/muhammetmustafabilgin.mp3',
  social: {
    github: 'https://github.com/muhammetbilgin',
    linkedin: 'https://www.linkedin.com/in/mmbilgin',
  },
  flipSentences: [
    'Small details matter', 
    'Frontend Developer',
    'React.js · Next.js · Node.js',
    'Three.js · Astro · Web Services',
    'Researching and building',
  ],
  image: {
    profile: '/assets/userphoto.jfif',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
