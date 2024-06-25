document.addEventListener('DOMContentLoaded', () => {
    const joinNowBtn = document.querySelector('.join-now');
    const watchNowBtn = document.querySelector('.watch-now');
    const movieItems = document.querySelectorAll('.movie-item');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeModalBtn = document.createElement('span');

    // Set up the modal's styles and content
    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    closeModalBtn.classList.add('close-modal');
    closeModalBtn.innerHTML = '&times;';

    modalContent.innerHTML = `
        <h2>Join Netflix</h2>
        <p>Enter your details to create an account and start watching!</p>
        <form>
            <input type="text" placeholder="Email Address" required><br>
            <input type="password" placeholder="Password" required><br>
            <button type="submit">Sign Up</button>
        </form>
    `;
    modalContent.appendChild(closeModalBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Add event listeners
    joinNowBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    watchNowBtn.addEventListener('click', () => {
        alert('Redirecting to the latest movie...');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const movieTitle = item.querySelector('img').alt;
            alert(`You clicked on ${movieTitle}`);
        });
    });
});
