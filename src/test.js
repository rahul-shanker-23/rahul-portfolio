const Texteditor = () => {
  let x = 100;
  const obj = {
    display: "submenu",
    add: function (core, targetElement) {
      console.log(x);
    },
  };
  return obj;
};
export default Texteditor;
