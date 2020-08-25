import error500 from "./error500.svg";
import error404 from "./error404.svg";
import error403 from "./error403.svg";

const config = {
  403: {
    desc: "Not authorized",
    img: error403,
    title: "403",
  },
  404: {
    desc: "Not Found",
    img: error404,
    title: "404",
  },
  500: {
    desc: "Error",
    img: error500,
    title: "500",
  },
};

export default config;
