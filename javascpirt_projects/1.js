async function getUsers(names) {
  let jobs = [];
  for (const name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (succesResponse) => {
        if (succesResponse.status !== 200) {
          return null;
        } else {
          return succesResponse.json();
        }
      }
    );
    jobs.push(job);
  }
  let result = Promise.all(jobs);
  return result;
}
getUsers();
fetch("fdf")
  .then((response) => response.json())
  .then((comits) => console.log(comits));
