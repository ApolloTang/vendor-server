
/* global Babel */

const doStuff = () => {
  const name = "world";

  /*
  // syntax error, this is a babel typescript bug'
  const output = document.getElementById("output") as HTMLElement;
  const version = document.getElementById("version") as HTMLElement;
  */

  const output:HTMLElement = document.getElementById("output")
  const version:HTMLElement = document.getElementById("version")

  output.innerHTML = `Hello ${name}`;
  version.innerHTML = Babel.version;
};
doStuff();
