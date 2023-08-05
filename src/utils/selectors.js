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