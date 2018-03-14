const loadPosts = () => {
    fetch('https://www.reddit.com/top.json').then( (response) => {
        if (document.querySelector('.loader')) {
            document.body.removeChild(document.querySelector('.loader'));
        }

        if (response.status != 200) {
            const error = document.createElement('div');
            error.classList.add('error');
            error.innerHTML = `Error ${response.status}`;
            document.body.appendChild(error);
            return;
        }

        response.json().then(function(responseData) {
            const posts = responseData.data.children;
            console.log(posts);
            posts.forEach(post => {
                const card = document.createElement('div');
                const postImg = document.createElement('img');
                const title = document.createElement('a');
                const comments = document.createElement('a');
                const preview = document.createElement('div');
                const metaInf = document.createElement('p');

                if (
                    post.data.thumbnail == 'default' ||
                    post.data.thumbnail == 'self'
                ) {
                    postImg.src =
                        'https://adiumxtras.com/images/pictures/reddit_alien_1_3582_2149_image_7961.gif';
                } else postImg.src = post.data.thumbnail;

                title.innerHTML = post.data.title;
                title.href = post.data.url;
                comments.href = `https://www.reddit.com${post.data.permalink}`;
                comments.innerHTML = `${post.data.num_comments} comments`;
                metaInf.innerHTML = `Posted by ${post.data.author} ${new Date(
                    post.data.created_utc * 1000
                ).getHours()} hours ago on ${
                    post.data.subreddit_name_prefixed
                }`;

                card.appendChild(postImg);
                preview.appendChild(title);
                preview.appendChild(metaInf);
                preview.appendChild(comments);
                card.appendChild(preview);
                document.body.appendChild(card);

                card.classList.add('post');
                title.classList.add('title');
                comments.classList.add('comments');
                metaInf.classList.add('meta');
            });
        });
    });
    setTimeout(loadPosts, 10000);
    console.log('posts are loaded');
};

loadPosts();
