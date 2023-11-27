export function getBrowserLocale() {
  const langList = navigator.languages;
  return langList.filter((elem) => !elem.includes('-'));
}
