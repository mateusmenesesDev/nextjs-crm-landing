import localFont from "next/font/local";

export const gilroy = localFont({
  display: "swap",
  src: [
    { path: "./Gilroy-Light.woff", weight: "300" },
    { path: "./Gilroy-Regular.woff", weight: "400" },
    { path: "./Gilroy-Medium.woff", weight: "500" },
    { path: "./Gilroy-Bold.woff", weight: "700" },
  ],
});
