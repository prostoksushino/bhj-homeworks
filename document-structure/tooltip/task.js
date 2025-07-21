    const links = document.querySelectorAll('.has-tooltip');
    const tooltip = document.createElement('div');
    let activeLink;
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);


    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            activeLink = link;
            const title = link.getAttribute('title');
            tooltip.textContent = title;
            const rect = link.getBoundingClientRect();
            tooltip.style.top = rect.bottom + 'px';
            tooltip.style.left = rect.left + 'px';
            tooltip.classList.add('tooltip_active');
        })
    })

    window.addEventListener('scroll', () => {
        if (tooltip.classList.contains('tooltip_active')) {
            const rect = activeLink.getBoundingClientRect();
            tooltip.style.top = rect.bottom + 'px';
            tooltip.style.left = rect.left + 'px';
        }

    })