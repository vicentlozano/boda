export function resolvePublicAsset(path) {
  if (!path) return ''

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalized = path.replace(/^public\//, '').replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
