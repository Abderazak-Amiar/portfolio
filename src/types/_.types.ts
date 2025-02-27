import { ReactNode } from 'react';

export type imagePropType = {
  imageLink: string;
  alt?: string;
  width?: string;
  height?: string;
  style?: string;
};

export type statPropsType = {
  title: string;
  content: string;
  style?: string;
};

export type badgePropType = {
  skill: string;
  icon?: string;
  style?: string;
};

export type skillPropType = {
  skill: string;
  style?: string;
};

export type linkCompPropType = {
  link: string;
  linkStyle?: string;
  text: string;
};

export type logoPropType = {
  logoStyle: string;
};

export type articlePropType = {
  headingStyle?: string;
  contentStyle?: string;
  children: ReactNode;
  heading: string;
};
export type experienceCardType = {
  companyLogo: string;
  role: string;
};
