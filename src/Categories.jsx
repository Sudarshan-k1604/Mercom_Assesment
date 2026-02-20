function Categories() {
  // 1. This is our data! In a real app, this comes from a database.
  // We use emojis here as placeholders for your red icons.
  const categoryData = [
    { id: 1, icon: '🛍️', title: 'Business', count: '2 Events' },
    { id: 2, icon: '🎙️', title: 'Conference', count: '2 Events' },
    { id: 3, icon: '🛍️', title: 'Business', count: '2 Events' },
    { id: 4, icon: '🎙️', title: 'Conference', count: '2 Events' },
    { id: 5, icon: '🛍️', title: 'Business', count: '2 Events' },
    { id: 6, icon: '🎙️', title: 'Conference', count: '2 Events' },
  ];

  return (
    <div className="categories-section">
      {/* 2. 'map' loops through our data and draws a card for each item */}
      {categoryData.map((cat) => (
        <div className="category-card" key={cat.id}>
          <div className="category-icon">{cat.icon}</div>
          <div className="category-title">{cat.title}</div>
          <div className="category-count">{cat.count}</div>
        </div>
      ))}
    </div>
  );
}

export default Categories;