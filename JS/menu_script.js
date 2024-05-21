document.addEventListener('DOMContentLoaded', function() {
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    console.log('Menu items loaded:', menuItems); // Debugging statement to confirm menu items were loaded

    menuItems.forEach(function(item) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.dataset.highlight = item.highlight; // Store the highlight in a data attribute

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const name = document.createElement('h2');
        name.textContent = item.name;
        contentDiv.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `$${item.price}`;
        contentDiv.appendChild(price);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = item.description;
        contentDiv.appendChild(description);

        if (item.highlight !== 'none') {
            const highlight = document.createElement('p');
            highlight.textContent = item.highlight.replace('_', ' ');
            highlight.classList.add('highlight');
            contentDiv.appendChild(highlight);
        }

        menuItemDiv.appendChild(contentDiv);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        menuItemDiv.appendChild(img);

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
                item.style.display = 'flex';
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
        const offsetPosition = elementPosition - headerOffset -50;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

//allow horizontal scrolling with right mouse click for menu
document.addEventListener('DOMContentLoaded', function() {
    const menuSections = document.querySelectorAll('.menu');

    menuSections.forEach(menuSection => {
        let isDown = false;
        let startX;
        let scrollLeft;

        menuSection.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // Left mouse button
                isDown = true;
                menuSection.classList.add('active');
                startX = e.pageX - menuSection.offsetLeft;
                scrollLeft = menuSection.scrollLeft;
                e.preventDefault(); // Prevent default behavior
            }
        });

        menuSection.addEventListener('mouseleave', () => {
            isDown = false;
            menuSection.classList.remove('active');
        });

        menuSection.addEventListener('mouseup', () => {
            isDown = false;
            menuSection.classList.remove('active');
        });

        menuSection.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - menuSection.offsetLeft;
            const walk = (x - startX) * 3; // The scroll speed
            menuSection.scrollLeft = scrollLeft - walk;
        });
    });

    // Optionally, prevent default context menu on right click for the sections
    menuSections.forEach(menuSection => {
        menuSection.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});
//allow horizontal scrolling with right mouse click for categories
document.addEventListener('DOMContentLoaded', function() {
    const menuSections = document.querySelectorAll('#categories');

    menuSections.forEach(menuSection => {
        let isDown = false;
        let startX;
        let scrollLeft;

        menuSection.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // Left mouse button
                isDown = true;
                menuSection.classList.add('active');
                startX = e.pageX - menuSection.offsetLeft;
                scrollLeft = menuSection.scrollLeft;
                e.preventDefault(); // Prevent default behavior
            }
        });

        menuSection.addEventListener('mouseleave', () => {
            isDown = false;
            menuSection.classList.remove('active');
        });

        menuSection.addEventListener('mouseup', () => {
            isDown = false;
            menuSection.classList.remove('active');
        });

        menuSection.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - menuSection.offsetLeft;
            const walk = (x - startX) * 3; // The scroll speed
            menuSection.scrollLeft = scrollLeft - walk;
        });
    });

    // Optionally, prevent default context menu on right click for the sections
    menuSections.forEach(menuSection => {
        menuSection.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});

//for pop up screen 
document.addEventListener('DOMContentLoaded', function() {
    const menuSections = document.querySelectorAll('.menu');
    const popup = document.getElementById('popup');
    console.log(popup);
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupPrice = document.getElementById('popup-price');
    const popupDescription = document.getElementById('popup-description');
    const popupHighlight = document.getElementById('popup-highlight');
    const closeBtn = document.querySelector('.close');
    const mainContent = document.querySelectorAll('body > :not(#popup)'); // Select all main content areas except popup
    console.log(mainContent);

    menuSections.forEach(menuSection => {
        menuSection.addEventListener('click', function(e) {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                const imgSrc = menuItem.querySelector('img').src;
                const title = menuItem.querySelector('.content h2').textContent;
                const price = menuItem.querySelector('.content p').textContent;
                const description = menuItem.querySelector('.content p:nth-of-type(2)').textContent;
                const highlight = menuItem.querySelector('.content .highlight').textContent;

                popupImage.src = imgSrc;
                popupTitle.textContent = title;
                popupPrice.textContent = price;
                popupDescription.textContent = description;
                popupHighlight.textContent = highlight;

                popup.style.display = 'flex';
                mainContent.forEach(content => content.classList.add('blur')); // Add blur to all main content
                console.log(mainContent);
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        mainContent.forEach(content => content.classList.remove('blur')); // Remove blur from all main content
    });

    window.addEventListener('click', function (e) {
        console.log('Popup clicked', e.target);
        if (e.target === popup) {
            console.log('Outside popup content clicked');
            popup.style.display = 'none';
            mainContent.forEach(content => content.classList.remove('blur')); // Remove blur from all main content
        }
    });
});



