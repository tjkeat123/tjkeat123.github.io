document.addEventListener('DOMContentLoaded', function() {
    const bsStack = ["really just wants to code.", "know they picked the wrong major.", "loves computer science more than circuits.", "compiles dreams into reality.", "should've majored in code, but here I am."];
    const bsStackElement = document.getElementById("bs-stack");
    
    if (bsStackElement) {
        let currentIndex = 0;

        // Set initial text
        bsStackElement.innerHTML = bsStack[currentIndex];

        currentIndex = (currentIndex + 1)
        
        // Function to update the text with a fade effect
        function updateBsStackText() {
            // Fade out
            bsStackElement.style.opacity = 0;
            
            // Change text after fade out
            setTimeout(() => {
                bsStackElement.innerHTML = bsStack[currentIndex];
                
                // Fade in
                bsStackElement.style.opacity = 1;
                
                // Update index for next cycle
                currentIndex = (currentIndex + 1) % bsStack.length;
            }, 500); // Wait 500ms for fade out before changing text
        }
        
        // Add CSS transition for smooth fade effect
        bsStackElement.style.transition = 'opacity 0.5s ease-in-out';

        // Change text every 3 seconds
        setInterval(updateBsStackText, 3000);
    }

    // Get all the tab buttons
    const tabButtons = document.querySelectorAll('.button-group');
    // Define the content for each tab
    const skillListsContents = {
        'languages': `<ul class="recursive-regular">
                        <li class="text-white pt-12">Python</li>
                        <li class="text-white pt-12">C++</li>
                        <li class="text-white pt-12">C</li>
                        <li class="text-white pt-12">Java</li>
                        <li class="text-white pt-12">HTML+CSS</li>
                        <li class="text-white pt-12">JavaScript</li>
                        <li class="text-white pt-12">SQL</li>
                        <li class="text-white pt-12">LaTeX</li>
                    </ul>`,
        'libraries': `<ul class="recursive-regular">
                        <li class="text-white pt-12">NumPy</li>
                        <li class="text-white pt-12">pandas</li>
                        <li class="text-white pt-12">scikit-learn</li>
                        <li class="text-white pt-12">Tensorflow</li>
                        <li class="text-white pt-12">Flask</li>
                        <li class="text-white pt-12">Selenium</li>
                        <li class="text-white pt-12">MapReduce</li>
                    </ul>`,
        'tools': `<ul class="recursive-regular">
                    <li class="text-white pt-12">Git</li>
                    <li class="text-white pt-12">GitHub</li>
                    <li class="text-white pt-12">Docker</li>
                    <li class="text-white pt-12">Linux</li>
                    <li class="text-white pt-12">VS Code</li>
                    <li class="text-white pt-12">Jupyter Notebook</li>
                </ul>`
    };

    function updateContent(tabName) {
        const contentElement = document.getElementById('skills-list');
        if (contentElement) {
            contentElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                contentElement.innerHTML = skillListsContents[tabName] || '';
                contentElement.style.opacity = 1; // Fade in
            }, 300); // Wait 300ms for fade out before changing content
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => {
                btn.classList.remove('tab-chosen');
            });

            this.classList.add('tab-chosen');

            updateContent(this.getAttribute('id'));
        });
    });

    // Gives skill-lists a fade effect when changing content
    const skillLists = document.getElementById('skills-list');
    if (skillLists) {
        skillLists.style.transition = 'opacity 0.3s ease-in-out';
    }

    const emailIcon = document.getElementById('email-icon');
    if (emailIcon) {
        emailIcon.addEventListener('click', function() {
            const email = 'tjkeat123@gmail.com';
            
            // Create a tooltip/feedback element if it doesn't exist
            let tooltip = document.getElementById('email-tooltip');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.id = 'email-tooltip';
                tooltip.style.position = 'absolute';
                tooltip.style.backgroundColor = '#333';
                tooltip.style.color = 'white';
                tooltip.style.padding = '5px 10px';
                tooltip.style.borderRadius = '5px';
                tooltip.style.fontSize = '14px';
                tooltip.style.transition = 'opacity 0.3s';
                tooltip.style.zIndex = '1000';
                document.body.appendChild(tooltip);
            }
            
            // Position the tooltip near the email icon
            const rect = emailIcon.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;
            
            // Try to copy to clipboard with proper error handling
            navigator.clipboard.writeText(email)
                .then(() => {
                    // Success
                    tooltip.textContent = 'Email copied!';
                    tooltip.style.opacity = '1';
                    
                    // Hide tooltip after 2 seconds
                    setTimeout(() => {
                        tooltip.style.opacity = '0';
                    }, 2000);
                })
                .catch(err => {
                    // Error
                    console.error('Could not copy email: ', err);
                    tooltip.textContent = 'Failed to copy email';
                    tooltip.style.opacity = '1';
                    
                    // Hide tooltip after 2 seconds
                    setTimeout(() => {
                        tooltip.style.opacity = '0';
                    }, 2000);
                });
        });
    }
});