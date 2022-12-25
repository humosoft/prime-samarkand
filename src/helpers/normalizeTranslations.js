export default function normalizeTranslation(data) {
  if(!data) return;
  if(!Array.isArray(data)) return;

  const map = {}

  data.forEach(d => {
    map[d.key] = d.value
  })

  return map;
}