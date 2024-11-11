document.getElementById('arrowRight').addEventListener('click', function() {
    rotateItems('right');
});

document.getElementById('arrowLeft').addEventListener('click', function() {
    rotateItems('left');
});

function rotateItems(direction) {
    const container = document.querySelector('.info_page6');
    const items = document.querySelectorAll('.page6_info');

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
    const container = document.querySelector('.info_page6');
    const items = document.querySelectorAll('.page6_info');

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

// Tự động trượt các thẻ sau mỗi 3 giây
setInterval(() => {
    rotateItems('right');
}, 2000);
