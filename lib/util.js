export function randomID(len) {
  let result = "9801"
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export function getRandomName() {
  const names = [
    "Welcome To Our Group VideoCall",
  ];
  let index = Math.round(Math.random() * names.length);
  index = index == names.length ? index - 1 : index;
  return names[index];
}
