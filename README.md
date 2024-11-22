---

# ZathuraDbg: Open-Source GUI Debugger for Assembly

ZathuraDbg is an open-source, GUI-based debugger for assembly. It provides a clean and intuitive user interface designed to make learning assembly easier. Currently, it supports only the **x86_64 architecture**, but there are plans to support additional architectures in the future.

## Features

- **GUI Debugger**: Easy-to-use graphical interface for debugging assembly code.
- **Support for x86_64**: Focus on the x86_64 architecture, with plans to expand.
- **Meta Tags for Social Media**: Optimized for Open Graph (OG) and Twitter card integration.
- **Schema Markup**: Includes structured data for SEO optimization.

## Setup and Development

To get started with **ZathuraDbg**, follow the instructions below.

### 1. Clone the Repository

```bash
git clone https://github.com/ZathuraDbg/zathura-react.git
cd zathura-react
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Start the Development Server

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can access the app at `http://localhost:3000`.

## File Structure

The main files in the repository include:

- **`index.html`**: The main HTML file for the application. This contains the meta tags, social media sharing configuration, and schema markup.
- **`src/main.tsx`**: The entry point for the application, where React components are rendered.
- **Meta Tags**: These are included in the `<head>` of the `index.html` to optimize sharing on platforms like Facebook and Twitter.
  - **Open Graph Meta Tags**: `og:title`, `og:description`, `og:image`, etc.
  - **Twitter Card Meta Tags**: `twitter:card`, `twitter:title`, `twitter:image`, etc.
  
### 4. Modifying the Meta Tags

If you want to customize the meta tags for social media or SEO, modify the relevant content in the `index.html` file. The meta tags include:

- **OG Title and Description**: Displayed when the website is shared on platforms like Facebook.
- **Twitter Card Tags**: Tailor how the site appears when shared on Twitter.

```html
<meta property="og:title" content="Zathura dbg" />
<meta property="og:description" content="ZathuraDbg is an open-source GUI debugger for assembly..." />
<meta property="og:image" content="/banner.jpeg" />
<meta property="og:url" content="https://zathuradbg.github.io/" />
```

### 5. Schema Markup for SEO

The application also includes structured data for SEO in the form of JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ZathuraDbg",
  "url": "https://zathuradbg.github.io/",
  "description": "ZathuraDbg is an open-source GUI debugger for assembly.",
  "publisher": {
    "@type": "Organization",
    "name": "ZathuraDbg",
    "logo": "https://zathuradbg.github.io/logo.jpg"
  }
}
</script>
```

This will help improve the site's visibility on search engines.

## Deployment

Once you're ready to deploy, you can build the app using Vite's production build command:

```bash
npm run deploy
```

This will create an optimized build of your app in the `dist` folder, ready for deployment.

## Contributing

We welcome contributions to **ZathuraDbg**. If you'd like to contribute, please fork the repository, make your changes, and open a pull request.

## License

ZathuraDbg is open-source software, licensed under the [MIT License](LICENSE).

---