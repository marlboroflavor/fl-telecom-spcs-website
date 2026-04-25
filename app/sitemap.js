const baseUrl = "https://fltelecomspcs.com";
const routes = [
  "",
  "/services",
  "/fiber-construction",
  "/underground-bury",
  "/subcontracting",
  "/capability-statement",
  "/careers",
  "/contact"
];

export default function sitemap() {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
