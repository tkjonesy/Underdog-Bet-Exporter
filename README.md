# Underdog Bets Exporter

Welcome to the Underdog Bets Exporter Repository! This repository contains the code and project files from my chrome extension and extraction script in js and python. This project's aim is to leverage Web Scraping to extract bet data on Underdog Fantasy from their "Pick'em" results which cannot be exported at this time by default.
## Table of Contents

- [Getting Started](#getting-started)
- [Building the Repository](#building-the-repository)
- [Exporting Bets](#exporting-bets)

## Getting Started

Before diving into this project, it's important to have a solid understanding of several languages and topics. Make sure you're familiar with the following technologies and concepts:

- **HTML**: You should be comfortable with Hypertext Markup Language (HTML), which is used here to structure the Chrome Extension.

- **CSS**: You should be comfortable with Cascading Style Sheets (CSS), which is used here to style the Chrome Extension.

- **JavaScript**: A solid grasp of JavaScript will be necessary, as it's used for interactivity and functionality in the Chrome Extension.

- **Python**: This project utilizes Python for various purposes, so proficiency in Python programming is essential.

- **Unpacked Chrome Extensions**: Familiarize yourself with creating and managing Chrome extensions, especially the unpacked extension development process.

- **Jupyter Notebooks**: Familiarity with Jupyter Notebooks is recommended, as some parts of this project involve data analysis, and visualization using this interactive environment.

- **Web Scraping**: Understanding the basics of web scraping, including libraries like selenium.

Once you're confident in these areas, you can proceed with the project. Follow the instructions below to set up the repository and use the exporter.

## Building the Repository

1. **Clone the repository:**

`git clone https://github.com/tkjonesy/NBA-Fantasy-Draft-ML.git`

## Exporting Bets

**1. Install the unpacked Chrome Extension**

![Chrome Extension Loaded](/images/load.PNG?raw=true "Chrome Extension Loaded")

**2. Login to Underdog and navigate to ./results/pick-em**

**3. Run the extension, select a date range, and wait for it to finish**

![Run Extension](/images/date.PNG?raw=true "Run Extension")

**4. Save the page as "Webpage, Single File" in the same directory as the cloned repo**

![Save Page](/images/save-page.PNG?raw=true "Save Page")

**5. Run Underdog Bet Exporter.ipynb (Be sure to check the settings below)**

`driver = uc.Chrome(version_main=118)`

`html_file = Path.cwd() / 'Underdog Fantasy_ Results.mhtml'`

**6. Run the export cell (any unknown/mismatch leagues will be set to "Unknown" in the excel file. Update the league dictionary to fix this or manually change it in the excel file)**

`df.to_excel('UnderdogFantasyBets.xlsx', index=False)`

Happy Coding!
