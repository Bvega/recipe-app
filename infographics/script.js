// Helper function to wrap long labels for Chart.js
function wrapLabel(label) {
    const maxLength = 16;
    if (typeof label !== 'string' || label.length <= maxLength) {
        return label;
    }
    const words = label.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach(word => {
        if ((currentLine + ' ' + word).trim().length > maxLength) {
            lines.push(currentLine.trim());
            currentLine = word;
        } else {
            currentLine = (currentLine + ' ' + word).trim();
        }
    });
    if (currentLine) {
        lines.push(currentLine.trim());
    }
    return lines;
}

// Tooltip callback for Chart.js to handle wrapped labels
const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label)) {
        return label.join(' ');
    } else {
        return label;
    }
};

// Data for the "Most Common Elements" bar chart
const commonElementsData = {
    labels: ['div', 'p', 'a', 'span', 'li', 'img', 'h1-h6', 'input', 'button'].map(wrapLabel),
    datasets: [{
        label: 'Commonality Score',
        data: [95, 88, 85, 75, 70, 65, 60, 50, 45],
        backgroundColor: '#0a9396',
        borderColor: '#005f73',
        borderWidth: 2,
        borderRadius: 5
    }]
};

// Render the "Most Common Elements" bar chart
const commonElementsCtx = document.getElementById('commonElementsChart').getContext('2d');
new Chart(commonElementsCtx, {
    type: 'bar',
    data: commonElementsData,
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: '#e0e0e0'
                },
                ticks: {
                    color: '#333'
                }
            },
            y: {
                grid: {
                    display: false
                },
                 ticks: {
                    color: '#333'
                }
            }
        }
    }
});

// Data for the "Core Benefits of Semantic HTML" donut chart
const semanticBenefitsData = {
    labels: ['Accessibility', 'SEO', 'Maintainability', 'Usability'],
    datasets: [{
        label: 'Importance',
        data: [35, 25, 20, 20],
        backgroundColor: [
            '#0a9396',
            '#94d2bd',
            '#ee9b00',
            '#ca6702'
        ],
        borderColor: '#ffffff',
        borderWidth: 4,
        hoverOffset: 4
    }]
};

// Render the "Core Benefits of Semantic HTML" donut chart
const semanticBenefitsCtx = document.getElementById('semanticBenefitsChart').getContext('2d');
new Chart(semanticBenefitsCtx, {
    type: 'doughnut',
    data: semanticBenefitsData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                }
            }
        },
        cutout: '60%'
    }
});