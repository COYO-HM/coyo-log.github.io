import { categoryType } from "@src/models";

const TagInfo: {
  [key: string]: {
    category: categoryType;
    label: string;
    bg?: string;
    bg_hover?: string;
    text?: string;
    text_hover?: string;
    border?: string;
  };
} = {
  algorithm: { category: "COMPUTER SCIENCE", label: "Algorithm" },
  network: { category: "COMPUTER SCIENCE", label: "Network" },
  css: {
    category: "CSS",
    label: "CSS",
    bg: "#1572b6",
    bg_hover: "#1572b6",
    text: "#1572b6",
    text_hover: "#1572b6",
    border: "#1572b6",
  },
  scss: {
    category: "CSS",
    label: "SCSS",
    bg: "#bf4080",
    bg_hover: "#bf4080",
    text: "#bf4080",
    text_hover: "#bf4080",
    border: "#bf4080",
  },
  emotion: {
    category: "CSS",
    label: "Emotion",
    bg: "#d26ac2",
    bg_hover: "#d26ac2",
    text: "#d26ac2",
    text_hover: "#d26ac2",
    border: "#d26ac2",
  },
  style_components: {
    category: "CSS",
    label: "Styled-Components",
    bg: "#ffa4e8",
    bg_hover: "#ffa4e8",
    text: "#ffa4e8",
    text_hover: "#ffa4e8",
    border: "#ffa4e8",
  },
  gatsby: {
    category: "FRAMEWORK",
    label: "Gatsby",
    bg: "#663399",
    bg_hover: "#663399",
    text: "#663399",
    text_hover: "#663399",
    border: "#663399",
  },
  nextjs: { category: "FRAMEWORK", label: "Next.js" },
  intellij: { category: "IDE", label: "IntelliJ" },
  javascript: {
    category: "LANGUAGE",
    label: "JavaScript",
    bg: "#fac905",
    bg_hover: "#fac905",
    text: "#fac905",
    text_hover: "#fac905",
    border: "#fac905",
  },
  typescript: {
    category: "LANGUAGE",
    label: "TypeScript",
    bg: "#3178c6",
    bg_hover: "#3178c6",
    text: "#3178c6",
    text_hover: "#3178c6",
    border: "#3178c6",
  },
  python3: { category: "LANGUAGE", label: "Python3" },
  html: {
    category: "LANGUAGE",
    label: "HTML",
    bg: "#e44f26",
    bg_hover: "#e44f26",
    text: "#e44f26",
    text_hover: "#e44f26",
    border: "#e44f26",
  },
  react: {
    category: "LIBRARY",
    label: "React",
    bg: "#61dbfb",
    bg_hover: "#61dbfb",
    text: "#61dbfb",
    text_hover: "#61dbfb",
    border: "#61dbfb",
  },
  redux_persist: { category: "LIBRARY", label: "Redux-Persist" },
  redux: {
    category: "LIBRARY",
    label: "Redux",
    bg: "#764abc",
    bg_hover: "#764abc",
    text: "#764abc",
    text_hover: "#764abc",
    border: "#764abc",
  },
  recoil: { category: "LIBRARY", label: "Recoil" },
  axios: { category: "LIBRARY", label: "Axios" },
  lodash: { category: "LIBRARY", label: "Lodash" },
  git: {
    category: "MANAGEMENT",
    label: "Git",
    bg: "#000000",
    bg_hover: "#000000",
    text: "#000000",
    text_hover: "#000000",
    border: "#000000",
  },
  git_hub: {
    category: "MANAGEMENT",
    label: "GitHub",
    bg: "#000000",
    bg_hover: "#000000",
    text: "#000000",
    text_hover: "#000000",
    border: "#000000",
  },
  npm: { category: "PACKAGE MANAGER", label: "npm" },
  yarn: { category: "PACKAGE MANAGER", label: "yarn" },
  yarn_berry: { category: "PACKAGE MANAGER", label: "yarn berry" },
  jest: {
    category: "TEST",
    label: "Jest",
    bg: "#99425b",
    bg_hover: "#99425b",
    text: "#99425b",
    text_hover: "#99425b",
    border: "#99425b",
  },
};
export default TagInfo;
