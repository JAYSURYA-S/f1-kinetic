// Main Application Logic
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
    // If we're on the root, redirect to intro.html
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.location.href = '/intro.html';
    }

    // Add common interactive logic here
    const launchButton = document.querySelector('button:has(div:contains("ENGAGE LAUNCH"))') || 
                         document.querySelector('button:contains("ENGAGE LAUNCH")');
    
    // Modern button search as pseudo-code, but let's be more specific
    const engageBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('ENGAGE LAUNCH'));
    if (engageBtn) {
        engageBtn.onclick = () => {
            window.location.href = '/hero.html';
        };
    }

    // Nav speed button
    const speedBtn = document.querySelector('button:contains("FEEL THE SPEED")') || 
                   Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('FEEL THE SPEED'));
    if (speedBtn) {
        speedBtn.onclick = () => {
            window.location.href = '/hero.html';
        };
    }
});
