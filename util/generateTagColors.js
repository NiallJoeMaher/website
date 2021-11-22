export default function generateTagColors(category) {
  const types = {
    "WEB DEV": "pink",
    BUSINESS: "blue",
    UNDEFINED: "yellow",
    GADGETS: "red",
    NONSENSE: "indigo",
    NEW: "green",
  };
  return types[category?.toUpperCase()] || types["UNDEFINED"];
}
