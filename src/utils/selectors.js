export function selectMeta(data) {
  return {
    ...data.items[0].fields.meta.fields
  }
}

export function selectAbout(data) {
  return {
    ...data.items[0].fields.about.fields
  }
}

export function selectMedia(media) {
  return {
    ...media.fields.file
  }
}

export function selectExperiences(data) {
  return data.items[0].fields.experiences
}

export function selectExperienceItem(item) {
  return {
    ...item.fields
  }
}

export function selectProjects(data) {
  return data.items[0].fields.projects
}

export function selectProjectItem(item) {
  return {
    ...item.fields
  }
}

export function selectSkills(data) {
  return data.items[0].fields.skills
}