document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const scheduledPostsList = document.getElementById('scheduled-posts');

    // Load scheduled posts from local storage on page load
    const loadScheduledPosts = () => {
        const posts = JSON.parse(localStorage.getItem('scheduledPosts')) || [];
        scheduledPostsList.innerHTML = '';
        posts.forEach(post => displayScheduledPost(post));
    };

    // Display a single post
    const displayScheduledPost = (post) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${post.title}</strong> - ${post.publishDate} <br>${post.content}`;
        scheduledPostsList.appendChild(listItem);
    };

    // Handle form submission
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather form data
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const publishDate = document.getElementById('publish-date').value;

        // Create post object
        const newPost = { title, content, publishDate };

        // Save to local storage
        let posts = JSON.parse(localStorage.getItem('scheduledPosts')) || [];
        posts.push(newPost);
        localStorage.setItem('scheduledPosts', JSON.stringify(posts));

        // Display the new post and reset the form
        displayScheduledPost(newPost);
        blogForm.reset();
    });

    // Initial load of posts
    loadScheduledPosts();
});
