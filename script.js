                                document.addEventListener('DOMContentLoaded', () => {
                                    const menuToggle = document.querySelector('.menu-toggle');
                                    const navLinks = document.querySelector('.nav-links');

                                    menuToggle.addEventListener('click', () => {
                                        menuToggle.classList.toggle('active');
                                        navLinks.classList.toggle('active');
                                    });

                                    const readMoreButtons = document.querySelectorAll('.read-more');
                                    readMoreButtons.forEach(button => {
                                        button.addEventListener('click', () => {
                                            const post = button.closest('.post');
                                            const fullContent = post.querySelector('.full-content');
                                            const excerpt = post.querySelector('.excerpt');
                                            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                                                fullContent.style.display = 'block';
                                                excerpt.style.display = 'none';
                                                button.textContent = 'Read Less';
                                            } else {
                                                fullContent.style.display = 'none';
                                                excerpt.style.display = 'block';
                                                button.textContent = 'Read More';
                                            }
                                        });
                                    });
                                });
