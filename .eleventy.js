const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat("d/M/y");
  });

  eleventyConfig.addShortcode("youtube", require("./src/shortcodes/youtube"))

  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addWatchTarget("./src/css")


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
