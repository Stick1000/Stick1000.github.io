import constants from "./constants";
import placeholders from "./placeholders";

import _education from "./education";
import _skills from "./skills";
import _technologies from "./technologies";
import _projects from "./projects";

import about from "./about";

// Preprocessing will happen here
const education = _education.map(e => {
  return {
    layout: constants.card_layouts.horizontal,
    includeModal: true,
    imgPath: e.img_path || placeholders.img.education,
    title: e.name || placeholders.text.title,
    subtitle:
      `${e.degree} \u2022 ${e.year_start} - ${e.year_end || "Present"}` ||
      placeholders.text.subtitle,
    description: e.description || placeholders.text.description
  };
});

const skills = _skills.map(s => {
  return {
    layout: constants.card_layouts.small,
    imgPath: s.img_path,
    title: s.name || placeholders.text.title
  };
});

const technologies = _technologies.map(t => {
  return {
    layout: constants.card_layouts.horizontal,
    imgPath: t.img_path || placeholders.img.education,
    title: t.name || placeholders.text.title,
    subtitle: t.level || placeholders.text.subtitle
  };
});

const projects = _projects.map(p => {
  return {
    layout: constants.card_layouts.vertical,
    includeModal: true,
    imgPath: p.img_path,
    title: p.name || placeholders.text.title,
    subtitle:
      `${p.date_started} - ${p.date_completed || "Present"}` ||
      placeholders.text.description,
    description: p.description || placeholders.text.subtitle,
    showDescription: true,
    url: p.url,
    urlText: p.url_text || "Project link"
  };
});

export default {
  education,
  skills,
  technologies,
  projects,
  about
};
