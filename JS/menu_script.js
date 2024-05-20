document.addEventListener('DOMContentLoaded', function() {
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    console.log('Menu items loaded:', menuItems); // Debugging statement to confirm menu items were loaded

    menuItems.forEach(function(item) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item'); 
        menuItemDiv.dataset.highlight = item.highlight; // Store the highlight in a data attribute

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        menuItemDiv.appendChild(img);

        const name = document.createElement('h2');
        name.textContent = item.name;
        menuItemDiv.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.description;
        menuItemDiv.appendChild(description);

        const price = document.createElement('p');
        price.textContent = `$${item.price}`;
        menuItemDiv.appendChild(price);

        if (item.highlight !== 'none') {
            const highlight = document.createElement('p');
            highlight.textContent = item.highlight.replace('_', ' ');
            highlight.classList.add('highlight');
            menuItemDiv.appendChild(highlight);
        }

        // Append the menu item to the correct section based on its category
        const sectionId = item.category;
        const section = document.getElementById(sectionId);
        if (section) {
            section.appendChild(menuItemDiv);
        }
    });

    // Filter function
    const filterDropdown = document.getElementById('highlightFilter');
    filterDropdown.addEventListener('change', function() {
        const selectedValue = this.value;
        document.querySelectorAll('.menu-item').forEach(function(item) {
            if (selectedValue === 'all' || item.dataset.highlight === selectedValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
