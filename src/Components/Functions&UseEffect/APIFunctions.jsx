export function searchResultsQuotes(activtyType, activityNuPeople) {
  return fetch(
    `http://www.boredapi.com/api/activity?type=${activtyType}&participants=${activityNuPeople}`
  ).then((response) => response.json());
}

export function randomiseQuotes() {
  return fetch("http://www.boredapi.com/api/activity/").then((response) =>
    response.json()
  );
}
