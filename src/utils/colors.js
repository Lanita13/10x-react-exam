export const getColorClass = (colorName) => {
  switch (colorName.toLowerCase()) {
    case "black": return "bg-black";
    case "red": return "bg-red-500";
    case "blue": return "bg-blue-500";
    case "green": return "bg-green-500";
    case "yellow": return "bg-yellow-500";
    case "pink": return "bg-pink-500";
    case "purple": return "bg-purple-500";
    case "gray": return "bg-gray-500";
    default: return "bg-gray-400";
  }
};