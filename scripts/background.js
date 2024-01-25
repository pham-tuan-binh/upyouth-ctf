const challenge = document.getElementById("numeric-background");

const random = () => Math.floor(Math.random() * 1_000_000_000);

challenge.innerHTML = [...Array(1000)].map(random).join(` `);
