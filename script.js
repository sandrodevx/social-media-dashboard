document.addEventListener('DOMContentLoaded', () => {
    // ========== THEME TOGGLE ========== //
    const themeToggle = document.querySelector('#theme-toggle');
    
    // Set initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme + '-mode');
    themeToggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '🌞' : '🌙';
    });

    // ========== SKELETON LOADING ========== //
    function simulateLoading() {
        document.body.classList.add('loading');
        setTimeout(() => {
            document.body.classList.remove('loading');
            initCharts(); // Initialize charts after "loading"
        }, 1500);
    }

    // ========== CHARTS ========== //
    function initCharts() {
        // Bar Chart
        new Chart(document.getElementById('bar-chart'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [{
                    label: 'Engagement',
                    data: [12, 19, 8, 15],
                    backgroundColor: '#9d50bb'
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        backgroundColor: '#6e48aa',
                        cornerRadius: 12,
                        displayColors: false,
                        callbacks: {
                            label: (ctx) => `Engagement: ${ctx.raw}K`
                        }
                    }
                }
            }
        });

        // Doughnut Chart
        new Chart(document.getElementById('doughnut-chart'), {
            type: 'doughnut',
            data: {
                labels: ['New', 'Returning', 'Inactive'],
                datasets: [{
                    data: [300, 150, 50],
                    backgroundColor: [
                        '#6e48aa',
                        '#9d50bb',
                        '#d3d3d3'
                    ]
                }]
            }
        });
    }

    // ========== NOTIFICATIONS ========== //
    const notifications = [
        { user: 'Jane', action: 'liked your post', time: '2m ago' },
        { user: 'John', action: 'started following you', time: '10m ago' }
    ];

    const activityList = document.querySelector('#activity-list');
    notifications.forEach(notif => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="user">${notif.user}</span>
            ${notif.action}
            <span class="time">${notif.time}</span>
        `;
        activityList.appendChild(li);
    });

    // ========== INIT ========== //
    simulateLoading(); // Start with loading animation
});