const hasMetting = true;

const metting = new Promise((resolve, rej) => {
  if (!hasMetting) {
    const mettingDetails = {
      name: "technical Metting",
      location: "Google Metting",
      time: "10:10pm",
    };
    resolve(mettingDetails);
  }
  rej(new Error("Metting already shechduled"));
});

metting
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
