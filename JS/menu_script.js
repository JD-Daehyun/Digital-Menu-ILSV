document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.getElementById('menu');
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    menuItems.forEach(function(item) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

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

        menuSection.appendChild(menuItemDiv);
    });
});
