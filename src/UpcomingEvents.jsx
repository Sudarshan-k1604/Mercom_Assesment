import { useNavigate } from 'react-router-dom';

function UpcomingEvents() {
  const navigate = useNavigate(); // 1. Add the navigation tool

  const events = [
    { id: 1, title: "Seat Map", date: "Fri February 20, 2026 1:00 pm - 7:00 pm", location: "Albuquerque , New Mexico", price: "$500", hasImage: false, category: "" },
    { id: 2, title: "The Financial Freedom Boot Camp 2020", date: "Tue April 21, 2026 8:00 am - 6:00 pm", location: "Lakewood , Colorado", price: "45.00 د.إ", hasImage: true, category: "Conference" },
    { id: 3, title: "Functional properties of food today", date: "Thu September 24, 2026 1:15 am - 4:00 am", location: "Austin , Texas", price: "20.00 د.إ", hasImage: false, category: "" }
  ];

  return (
    <div className="upcoming-events-section">
      <div className="events-header">
        <h2>Upcoming Events</h2>
        <p>You can choose to display featured</p>
        <div className="header-line"></div>
      </div>

      <div className="events-carousel-container">
        <button className="carousel-arrow">←</button>

        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <div className={`event-image-area ${event.hasImage ? 'has-bg-img' : ''}`}>
                <div className="icon-overlay avatar-icon">👤</div>
                <div className="icon-overlay heart-icon">🤍</div>
                {event.category && <span className="category-badge">{event.category}</span>}
              </div>

              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p>🕒 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <div className="event-footer">
                  {/* 2. ADD onClick HERE to change pages */}
                  <button className="get-ticket-btn" onClick={() => navigate('/event')}>
                    Get Ticket
                  </button>
                  <span className="event-price">{event.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow">→</button>
      </div>
    </div>
  );
}

export default UpcomingEvents;