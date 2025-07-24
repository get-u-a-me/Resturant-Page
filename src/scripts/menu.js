export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Vorherige Inhalte löschen

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');

  const headline = document.createElement('h2');
  headline.textContent = 'Unsere Speisekarte';
  menuContainer.appendChild(headline);

  const items = [
    { name: 'Pizza Margherita', description: 'Tomatensauce, Mozzarella, Basilikum' },
    { name: 'Spaghetti Carbonara', description: 'Speck, Ei, Parmesan, Pfeffer' },
    { name: 'Tiramisu', description: 'Espresso, Mascarpone, Kakaopulver' },
    { name: 'Tiramisu', description: 'Espresso, Mascarpone, Kakaopulver' }
  ];

  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const title = document.createElement('h3');
    title.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    menuItem.appendChild(title);
    menuItem.appendChild(desc);
    menuContainer.appendChild(menuItem);
  });

  content.appendChild(menuContainer);
}
