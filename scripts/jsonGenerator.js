const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const languages = require("../src/config/language.json");

const JSON_FOLDER = "./.json";
const CONTENT_ROOT = "src/content";
const CONTENT_DEPTH = 3;
const BLOG_FOLDER = "blog";

// get data from markdown
const getData = (folder, groupDepth, langIndex = 0) => {
  console.log(`Processing folder: ${folder}`);
  
  const getPaths = languages
    .map((lang, index) => {
      const langFolder = lang.contentDir ? lang.contentDir : lang.languageCode;
      const dir = path.join(CONTENT_ROOT, folder, langFolder);
      
      console.log(`Checking directory: ${dir}`);
      
      if (!fs.existsSync(dir)) {
        console.warn(`Directory does not exist: ${dir}`);
        return [];
      }
      
      return fs
        .readdirSync(dir)
        .filter(
          (filename) =>
            !filename.startsWith("-") &&
            (filename.endsWith(".md") || filename.endsWith(".mdx")),
        )
        .flatMap((filename) => {
          const filepath = path.join(dir, filename);
          console.log(`Processing file: ${filepath}`);
          
          try {
            const stats = fs.statSync(filepath);
            const isFolder = stats.isDirectory();

            if (isFolder) {
              return getData(filepath, groupDepth, index);
            } else {
              const file = fs.readFileSync(filepath, "utf-8");
              const { data, content } = matter(file);
              const pathParts = filepath.split(path.sep);

              let slug;
              if (data.slug) {
                const slugParts = data.slug.split("/");
                slugParts[0] = BLOG_FOLDER;
                slug = slugParts.join("/");
              } else {
                slug = pathParts
                  .slice(CONTENT_DEPTH)
                  .join("/")
                  .replace(/\.[^/.]+$/, "");
                slug = `${BLOG_FOLDER}/${slug.split("/").slice(1).join("/")}`;
              }
              data.slug = slug;
              const group = "blog";

              return {
                lang: languages[index].languageCode,
                group: group,
                slug: data.slug,
                frontmatter: data,
                content: content,
              };
            }
          } catch (error) {
            console.error(`Error processing file ${filepath}:`, error);
            return [];
          }
        });
    })
    .flat();

  const publishedPages = getPaths.filter((page) => !page.frontmatter?.draft);
  return publishedPages;
};

try {
  console.log("Starting JSON generation...");
  
  // create folder if it doesn't exist
  if (!fs.existsSync(JSON_FOLDER)) {
    console.log(`Creating JSON folder: ${JSON_FOLDER}`);
    fs.mkdirSync(JSON_FOLDER, { recursive: true });
  }

  // create json files
  const posts = getData(BLOG_FOLDER, 3);
  console.log(`Generated ${posts.length} posts`);
  
  fs.writeFileSync(
    `${JSON_FOLDER}/posts.json`,
    JSON.stringify(posts, null, 2)
  );

  // merge json files for search
  const search = [...posts];
  fs.writeFileSync(
    `${JSON_FOLDER}/search.json`,
    JSON.stringify(search, null, 2)
  );
  
  console.log("JSON generation completed successfully");
} catch (err) {
  console.error("Error during JSON generation:", err);
  process.exit(1);
}
