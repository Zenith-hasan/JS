fetch("https://randomuser.me/api/")
  .then((rawdata) => {
    return rawdata.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });
