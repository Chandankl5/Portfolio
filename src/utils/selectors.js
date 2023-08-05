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