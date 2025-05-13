fetch("https://run.mocky.io/v3/e1f36a2d-71c4-423b-8412-dfc7bfb16d5d")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
