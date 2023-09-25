const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Extract the post_id from the URL
    const post_id = parseInt(window.location.pathname.split('/').pop());
    // Get the content of the new comment from the HTML input field
    const content = document.querySelector('#content-new-comment').value.trim();
    // Check if the 'content' is not empty
    if (content) {
        // Create an HTTP POST request to send the new comment data to the server
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        // Check if the HTTP request was successful (status code 200-299)
        if (response.ok) {
            document.location.reload();
        } else {
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Failed to create a comment.');
        }
    }
};



// Event listener
const newCommentForm = document.querySelector('.new-comment-form');
if (newCommentForm) {
    newCommentForm.addEventListener('submit', newCommentFormHandler);
}
