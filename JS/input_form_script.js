document.getElementById('menuForm').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted');

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const highlight = document.getElementById('highlight').value;
    const image = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const menuItem = {
            name: name,
            description: description,
            price: price,
            highlight: highlight,
            image: reader.result
        };
    
        console.log('Menu item:', menuItem);

        let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
        menuItems.push(menuItem);
        localStorage.setItem('menuItems', JSON.stringify(menuItems));

        // window.location.href = 'index.html';
    };

    if (image) {
        reader.readAsDataURL(image);
    } else {
        console.error('No image file selected');
    }
});
