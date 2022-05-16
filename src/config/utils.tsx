export const addSpots = (nStr: any) => {
  var inputValue = nStr.toString();
  var x = inputValue.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  x2 = x2 === ".0" ? " " : x2;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "." + "$2");
  }
  return x1 + x2;
};
