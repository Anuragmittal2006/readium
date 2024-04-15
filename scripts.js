
 // Function to open a book
    function openBook(link) {
        window.open(link, '_blank');
    }

    // Function to search for books
    function searchBooks() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const books = document.querySelectorAll('.book');

        books.forEach(book => {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('.book-info p').textContent.toLowerCase();

            if (title.includes(input) || author.includes(input)) {
                book.style.display = 'flex';
            } else {
                book.style.display = 'none';
            }
        });
    }

    // Function to display the reading list
    function displayReadingList() {
        const readingListContainer = document.getElementById('readingList');
        const readingList = JSON.parse(localStorage.getItem('readingList')) || [];

        // Clear the current contents of the reading list container
        readingListContainer.innerHTML = '';

        if (readingList.length === 0) {
            // Display a message if the reading list is empty
            readingListContainer.innerHTML = '<p>Your reading list is empty.</p>';
        } else {
            // Iterate through each book in the reading list and display it
            readingList.forEach(bookId => {
                // Create a book element and add it to the reading list container
                const book = document.createElement('div');
                book.textContent = `Book ID: ${bookId}`;
                // Optionally, you can fetch book details from your data source and display them here
                readingListContainer.appendChild(book);

                // Add a button to remove the book from the reading list
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeFromReadingList(bookId);
                    displayReadingList(); // Refresh the reading list display after removing the book
                });
                book.appendChild(removeButton);
            });
        }
    }

    // Function to remove a book from the reading list
    function removeFromReadingList(bookId) {
        let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
        readingList = readingList.filter(id => id !== bookId);
        localStorage.setItem('readingList', JSON.stringify(readingList));
    }

    // Display the reading list when the page loads
    window.onload = function() {
        displayReadingList();
    }
function shareOnFacebook() {
        // Replace the URL with your website URL
        var url = encodeURIComponent(window.location.href);
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    }

    function shareOnTwitter() {
        // Replace the URL and text with your own content
        var url = encodeURIComponent(window.location.href);
        var text = encodeURIComponent('Check out this virtual library!');
        window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, '_blank');
    }

    function shareOnWhatsApp() {
        // Replace the URL and text with your own content
        var url = encodeURIComponent(window.location.href);
        var text = encodeURIComponent('Check out this virtual library!');
        window.open('https://wa.me/?text=' + text + ' ' + url, '_blank');
    }