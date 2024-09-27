function checkSpam(str) {
  if (str.includes("xxx") || str.includes("XXX") || str.includes("1XbeT ") || str.includes("1xbet")) {
    return true;
  } else {
    return false;
  }
}
