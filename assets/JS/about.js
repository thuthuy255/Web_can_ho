document.getElementById('arrowRight').addEventListener('click', function() {
    rotateItems('right');
});

document.getElementById('arrowLeft').addEventListener('click', function() {
    rotateItems('left');
});

function rotateItems(direction) {
    const container = document.querySelector('.information_customer');
    const items = document.querySelectorAll('.customer1');

    if (direction === 'right') {
        const firstItem = items[0];
        container.appendChild(firstItem);
    } else if (direction === 'left') {
        const lastItem = items[items.length - 1];
        container.prepend(lastItem);
    }

    // Optional: Reset the scroll position to ensure smooth experience
    container.style.transition = 'none';
    container.scrollLeft = 0;
    setTimeout(() => {
        container.style.transition = 'transform 0.5s ease';
    }, 0);
}
document.getElementById('arrowRight').addEventListener('click', function() {
    rotateItems('right');
});

document.getElementById('arrowLeft').addEventListener('click', function() {
    rotateItems('left');
});

function rotateItems(direction) {
    const container = document.querySelector('.information_customer');
    const items = document.querySelectorAll('.customer1');

    if (direction === 'right') {
        const firstItem = items[0];
        container.appendChild(firstItem);
    } else if (direction === 'left') {
        const lastItem = items[items.length - 1];
        container.prepend(lastItem);
    }

    // Optional: Reset the scroll position to ensure smooth experience
    container.style.transition = 'none';
    container.scrollLeft = 0;
    setTimeout(() => {
        container.style.transition = 'transform 0.5s ease';
    }, 0);
}

