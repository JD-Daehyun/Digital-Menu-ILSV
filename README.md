# Digital Menu for I Love Sushi Ventrua

Welcome to the digital menu project for I Love Sushi Ventura! This project showcases a dynamic, interactive digital menu that allows users to view and filter menu items. It features a frontend-only implementation using HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Responsive Design**: The menu is fully responsive and adapts to various screen sizes, including mobile devices.
- **Dynamic Filtering**: Users can filter menu items based on highlights such as "Fan's Favorite", "Bang for a Buck", and "Go Wild Special".
- **Input Menu Item Form**: Business owners can easily upload new menu items to their digital menu without needing to hard code them into the index.html file.
- **Pop-up Details**: Clicking on a menu item opens a pop-up with more details, including an image and description.
- **Smooth Scrolling**: The navigation links provide a smooth scrolling effect to different sections of the menu.
- **Sticky Categories**: The categories section remains visible while scrolling to easily navigate through different sections.

## Technologies Used

- **HTML5**: For the basic structure of the website.
- **CSS3**: For styling and layout, including Flexbox for responsive design.
- **JavaScript (ES6)**: For interactivity and dynamic content manipulation.


## Usage

### Filtering Menu Items

- Use the dropdown menu to filter items by highlight. The available options are "Fan's Favorite", "Bang for a Buck", "Go Wild Special", and "All".
- The filter will apply even if you add new menu items directly into the HTML.

### Adding New Menu Items

- Business owners can easily upload new menu items to their digital menu without needing to hard code them into the index.html file. This can be done via the input form provided in `input_form.html`.
- Due to limited storage capacity in local storage, you can only upload one new menu item for display at a time. This limitation means that the newly uploaded item will overwrite any existing items in local storage.

### Pop-up Details

- Click on any menu item to see more details in a pop-up window.
- The pop-up includes an image, title, price, description, and highlight of the menu item.

## Project Structure

\`\`\`plaintext
.
├── css
│   └── style.css          # Main CSS file for styling
├── images                 # Directory for images
│   ├── food1.jpg
│   ├── food2.jpg
│   └── ...
├── js
│   ├── main_script.js     # JavaScript for main interactions
│   └── input_form_script.js  # JavaScript for the input form
├── index.html             # Main HTML file for the digital menu
├── input_form.html        # HTML file for inputting new menu items
└── README.md              # Project README file
\`\`\`


# YEAH!