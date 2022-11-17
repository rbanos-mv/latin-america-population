![](https://img.shields.io/badge/Microverse-blueviolet)

# Latin America Population

> Latin America Population is a single page application created with React and Redux that allow users to review Latin America countries population. This webapp uses the World Bank indicators API.
>
> **Home page**:
> It shows the list of Latin America and the Caribbean countries. The list includes de Flag, the name and the last known population. Initially, the population is shown as zero, since the API endpoint for the list of countries does not include such value.
>
> When you click anywhere on the country area, it will send you to the Population page. When you come back from the Population page, the country population is updated.
>
> You can filter the list of countries by typing partially the name of the one you are interested.
>
> **Population page**:
> The population page, shows the country flag and the name of the country in the top.
>
> Next comes a list of years and the country's population for that year.
>
> To go back to the Home Page, you may tap in the Back button (<).

## Built With

- JavaScript-ES6
- CSS3
- ReactJS
- Redux

## Live Demo

- [GitHub Live Demo Link](https://rbanos-mv.github.io/latin-america-population/)
- [Video Presentation](https://www.loom.com/share/8c5c22a9ba634e5b91f59af52e6fe79d)

### Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

Open your terminal and navigate to the folder you would like to save the project.

### Setup

Type these commands into the terminal:

```
git clone https://github.com/rbanos-mv/latin-america-population.git
cd latin-america-population
```

You will need a `.env` file before you install and run the project. The `.env` file contains environment variables needed to deploy the webpage. There is a commented `.env.example` file you can use as a guide to configure your own. Type the following command into the terminal (or Git Bash, if using Windows) to create your `.env` file:

```
cp .env.example .env
```

### Install

Type this command into the terminal:

```
npm install
```

### Build

Type these commands into the terminal:

```
npm run build
```

- Open `build/index.html` in your web browser.

### Run dev server

Type these commands into the terminal:

```
npm run start
```

- Your web browser will open on [http://localhost:3000](http://localhost:3000)

### Run tests

Type this command into the terminal:

```
npm run test
```

### Deployment

```
npm run deploy
```

## Authors

👤 **Roberto A. Baños Alvarez**

- GitHub: [@rbanos-mv](https://github.com/rbanos-mv)
- Twitter: [@RobertoBanosMV](https://twitter.com/RobertoBanosMV)
- LinkedIn: [Roberto A Baños Alvarez](https://linkedin.com/in/roberto-a-baños-alvarez-500766234)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/) for the motivation.
- API by [Word Bank](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries)
- Country Flags by [flagcdn.com](https://flagcdn.com/)
- [Latin America map](https://upload.wikimedia.org/wikipedia/commons/6/63/Latin_America_%28orthographic_projection%29.svg) by [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
- [Original design idea](<https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)>) by [Nelson Sakwa in Behance](https://www.behance.net/sakwadesignstudio).

## 📝 License

This project is [MIT](./MIT.md) licensed.
