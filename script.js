// JavaScript for dropdown and interactive elements
document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.querySelector('.dropdown-menu').style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
      item.querySelector('.dropdown-menu').style.display = 'none';
  });
});

document.querySelector('a[href="Connect"]').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Opening chat interface for farmer and wholesaler...');
  // Additional functionality for chat interface can be added here
});
