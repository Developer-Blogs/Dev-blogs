# [**Dev-Blogs**](https://developersblogs.netlify.app)

[![License](https://img.shields.io/github/license/snakes-n-networks/dev-blogs?style=flat-square)](LICENSE)
[![Issues](https://img.shields.io/github/issues/snakes-n-networks/dev-blogs?style=flat-square)](https://github.com/Snakes-n-Networks/Dev-blogs/issues)
[![Forks](https://img.shields.io/github/forks/snakes-n-networks/dev-blogs?style=flat-square)](https://github.com/Snakes-n-Networks/Dev-blogs/network/members)
[![Stars](https://img.shields.io/github/stars/snakes-n-networks/dev-blogs?style=flat-square)](https://github.com/Snakes-n-Networks/Dev-blogs/stargazers)

## **Introduction**

**Dev-Blogs** is an open-source blogging platform aimed at developers and tech enthusiasts. It allows contributors to write and share blogs about various technical topics, including programming, open-source software, and emerging technologies. This project encourages community collaboration by allowing developers to fork the repository, submit blog posts, and contribute to the platform's development.

> [!NOTE]
> If you’re interested in sharing your knowledge, stories, or tutorials but aren’t sure where to start, feel free to reach out. I’m here to help with any questions you might have about contributing.[Contact](https://discord.gg/nvGAqGSMws)
> Looking forward to seeing your contributions! 😊
## **Key Features**

- **Contribute Blog Posts**: Share your knowledge and experiences by submitting technical blogs.
- **Fully Responsive**: Dev-Blogs is designed to work seamlessly across all devices.
- **Customizable Themes**: Switch between light and dark themes for a better user experience.
- **TailwindCSS for Styling**: Clean and flexible CSS framework for easy customization.
- **SEO Optimized**: Ensures better visibility on search engines, increasing the reach of your content.
- **Open Source**: Free to use and contribute under the MIT license.

## **How to Contribute**

Contributing to Dev-Blogs is simple and open to everyone! Follow these steps to submit your own blog posts or improve the project:

1. **Fork the Repository**: Click on the fork button at the top-right of this page to create a copy of the project on your GitHub account.
2. **Clone the Forked Repository**: Clone the repository to your local machine.
   ```bash
   git clone https://github.com/Developer-Blogs/Dev-blogs
   ```
3. **Create a New Branch**: 
   ```bash
   git checkout -b my-new-feature
   ```
4. **Make Your Changes**: Add your blog post, fix bugs, or add new features.
5. **Commit Your Changes**: Use descriptive commit messages.
   ```bash
   git commit -m "Add: New blog"
   ```
6. **Push to GitHub**: Push your changes to your forked repository.
   ```bash
   git push origin my-new-feature
   ```
7. **Submit a Pull Request**: Go to the original repository and submit a pull request with a detailed description of your changes.

For more details, please refer to the **[CONTRIBUTING.md](CONTRIBUTING.md)** guide.

## **Installation Instructions**

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Developer-Blogs/Dev-blogs
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd dev-blogs
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## **Project Structure**

```plaintext
Directory structure:
└── Developer-Blogs-Dev-blogs/
    ├── README.md
    ├── CONTRIBUTING.md
    ├── Dockerfile
    ├── LICENSE
    ├── SECURITY.md
    ├── astro.config.mjs
    ├── code_of_conduct.md
    ├── netlify.toml
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── .dockerignore
    ├── .editorconfig
    ├── .markdownlint.json
    ├── .prettierrc
    ├── config/
    │   └── nginx/
    │       └── nginx.conf
    ├── public/
    │   ├── robots.txt
    │   ├── .htaccess
    │   └── images/
    ├── scripts/
    │   ├── jsonGenerator.js
    │   ├── removeDarkmode.js
    │   └── removeMultilang.js
    ├── src/
    │   ├── env.d.ts
    │   ├── config/
    │   │   ├── config.json
    │   │   ├── language.json
    │   │   ├── menu.en.json
    │   │   ├── menu.fr.json
    │   │   ├── social.json
    │   │   └── theme.json
    │   ├── content/
    │   │   ├── config.ts
    │   │   ├── about/
    │   │   │   ├── english/
    │   │   │   │   └── -index.md
    │   │   │   └── french/
    │   │   │       └── -index.md
    │   │   ├── authors/
    │   │   │   ├── english/
    │   │   │   │   ├── -index.md
    │   │   │   │   ├── Admin.md
    │   │   │   │   ├── EkSandy.md
    │   │   │   │   └── lok.md
    │   │   │   └── french/
    │   │   │       └── -index.md
    │   │   ├── blog/
    │   │   │   ├── english/
    │   │   │   │   ├── -index.md
    │   │   │   │   ├── AutomateHealthcare.md
    │   │   │   │   ├── Chitesh.md
    │   │   │   │   ├── Metaverse.md
    │   │   │   │   ├── Sumit.md
    │   │   │   │   ├── Time-Complexity.md
    │   │   │   │   ├── ai_engineer.md
    │   │   │   │   ├── blockchain.md
    │   │   │   │   ├── deepak.md
    │   │   │   │   ├── llm.md
    │   │   │   │   ├── lokesh.md
    │   │   │   │   ├── post-1.md
    │   │   │   │   ├── post-2.md
    │   │   │   │   ├── post-3.md
    │   │   │   │   ├── post-4.md
    │   │   │   │   ├── post-5.md
    │   │   │   │   ├── quantam-computing.md
    │   │   │   │   ├── siddharth.md
    │   │   │   │   ├── teja.md
    │   │   │   │   └── umesh.md
    │   │   │   └── french/
    │   │   │       └── -index.md
    │   │   ├── contact/
    │   │   │   ├── english/
    │   │   │   │   └── -index.md
    │   │   │   └── french/
    │   │   │       └── -index.md
    │   │   ├── homepage/
    │   │   │   ├── english/
    │   │   │   │   └── -index.md
    │   │   │   └── french/
    │   │   │       └── -index.md
    │   │   ├── pages/
    │   │   │   └── english/
    │   │   │       ├── elements.mdx
    │   │   │       └── privacy-policy.md
    │   │   └── sections/
    │   │       └── english/
    │   │           ├── call-to-action.md
    │   │           └── testimonial.md
    │   ├── hooks/
    │   │   └── useTheme.ts
    │   ├── i18n/
    │   │   ├── en.json
    │   │   └── fr.json
    │   ├── layouts/
    │   │   ├── Base.astro
    │   │   ├── PostSingle.astro
    │   │   ├── components/
    │   │   │   ├── AuthorCard.astro
    │   │   │   ├── BlogCard.astro
    │   │   │   ├── Breadcrumbs.astro
    │   │   │   ├── ImageMod.astro
    │   │   │   ├── Logo.astro
    │   │   │   ├── Pagination.astro
    │   │   │   ├── Share.astro
    │   │   │   ├── Social.astro
    │   │   │   ├── ThemeSwitcher.astro
    │   │   │   └── TwSizeIndicator.astro
    │   │   ├── helpers/
    │   │   │   ├── Disqus.tsx
    │   │   │   ├── DynamicIcon.tsx
    │   │   │   ├── LanguageSwitcher.tsx
    │   │   │   ├── SearchModal.tsx
    │   │   │   └── SearchResult.tsx
    │   │   ├── partials/
    │   │   │   ├── CallToAction.astro
    │   │   │   ├── Footer.astro
    │   │   │   ├── Header.astro
    │   │   │   ├── PageHeader.astro
    │   │   │   ├── PostSidebar.astro
    │   │   │   └── Testimonial.astro
    │   │   └── shortcodes/
    │   │       ├── Accordion.tsx
    │   │       ├── Button.tsx
    │   │       ├── Notice.tsx
    │   │       ├── Tab.tsx
    │   │       ├── Tabs.tsx
    │   │       ├── Video.tsx
    │   │       └── Youtube.tsx
    │   ├── lib/
    │   │   ├── contentParser.astro
    │   │   ├── taxonomyParser.astro
    │   │   └── utils/
    │   │       ├── bgImageMod.ts
    │   │       ├── dateFormat.ts
    │   │       ├── languageParser.ts
    │   │       ├── readingTime.ts
    │   │       ├── similarItems.ts
    │   │       ├── sortFunctions.ts
    │   │       ├── taxonomyFilter.ts
    │   │       └── textConverter.ts
    │   ├── pages/
    │   │   ├── 404.astro
    │   │   └── [...lang]/
    │   │       ├── [regular].astro
    │   │       ├── about.astro
    │   │       ├── contact.astro
    │   │       ├── index.astro
    │   │       ├── authors/
    │   │       │   ├── [single].astro
    │   │       │   └── index.astro
    │   │       ├── blog/
    │   │       │   ├── [single].astro
    │   │       │   ├── index.astro
    │   │       │   └── page/
    │   │       │       └── [slug].astro
    │   │       ├── categories/
    │   │       │   ├── [category].astro
    │   │       │   └── index.astro
    │   │       └── tags/
    │   │           ├── [tag].astro
    │   │           └── index.astro
    │   ├── styles/
    │   │   ├── base.scss
    │   │   ├── buttons.scss
    │   │   ├── components.scss
    │   │   ├── main.scss
    │   │   ├── navigation.scss
    │   │   ├── search.scss
    │   │   └── utilities.scss
    │   └── types/
    │       └── index.d.ts
    └── .github/
        ├── FUNDING.yml
        ├── ISSUE_TEMPLATE/
        │   └── feature_request.md
        └── workflows/
            └── greetings.yml
```

## **Contributors**

We appreciate all contributions to **Dev-Blogs**! You can see the full list of contributors [here](https://github.com/Developer-Blogs/Dev-blogs/graphs/contributors).

## **License**

This project is licensed under the MIT License. See the **[LICENSE](LICENSE)** file for more details.

## **Contact**

If you have any questions or want to get involved, feel free to reach out to us through:
- Discord : [SERVER](https://discord.gg/wmuGFyaN)
- GitHub Issues: [Submit a question or issue](https://github.com/Snakes-n-Networks/Dev-blogs/issues)
- Email: [ekrishnachaitanya2004@gmail.com]
