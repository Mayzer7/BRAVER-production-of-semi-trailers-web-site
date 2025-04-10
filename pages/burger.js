document.addEventListener('DOMContentLoaded', () => {
  const expandableItems = document.querySelectorAll('.navigate-item.expandable');

  const activeSvg = `
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="2.36486" cy="2.5" rx="2.36486" ry="2.5" fill="#202020"/>
    </svg>
  `;
  const defaultImgSrc = "../styles/images/svg/Ellipse.svg";

  expandableItems.forEach(item => {
    const content = item.querySelector('.navigate-content');
    const iconWrapper = item.querySelector('.navigate-icon');

    content.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      expandableItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherIcon = otherItem.querySelector('.navigate-icon');
        if (otherIcon) {
          otherIcon.innerHTML = `<img src="${defaultImgSrc}" alt="icon" />`;
        }
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        iconWrapper.innerHTML = activeSvg;
      }
    });
  });
});
