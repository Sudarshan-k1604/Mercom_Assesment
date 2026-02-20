import { Link } from 'react-router-dom';

function EventDetails() {
  return (
    <div className="event-page-container">
      {/* Top Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <span>Event</span> &gt; <span>The Financial Freedom Boot Camp 2020</span>
      </div>

      {/* Big Hero Image */}
      <div className="event-hero-banner"></div>

      {/* Main Event Header Area */}
      <div className="event-header-info">
        <div className="header-left">
          <div className="calendar-block">
            <div className="cal-month">APRIL</div>
            <div className="cal-day">21</div>
            <div className="cal-weekday">Tuesday</div>
          </div>
          <div className="header-text">
            <h1>The Financial Freedom Boot Camp 2020</h1>
            <p>🕒 Tue April 21, 2026 8:00 am - 6:00 pm</p>
            <p>📍 South Alameda, Lakewood, Colorado</p>
          </div>
        </div>
        <div className="header-right">
          <button className="book-now-large">Book Now</button>
          <div className="header-actions">
            <span>🔗 SHARE</span>
            <span>🚩 REPORT</span>
            <span>📅 CALENDAR</span>
          </div>
        </div>
      </div>

      {/* 2-Column Layout for Content */}
      <div className="event-body-layout">
        
        {/* LEFT COLUMN */}
        <div className="left-column">
          <div className="content-box">
            <h3>Description</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div className="content-box">
            <h3>Ticket Information</h3>
            <div className="ticket-row">
              <span>Standard</span>
              <div className="ticket-price-col">
                <strong>45.00 د.إ</strong>
                <small>Tickets are available from March 24, 2026 1:00 am</small>
              </div>
            </div>
            <div className="ticket-row">
              <span>VIP</span>
              <div className="ticket-price-col">
                <strong>85.00 د.إ</strong>
                <small>Selling</small>
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>Event Calendar</h3>
            <div className="calendar-row">
              <div>
                <strong>Tuesday, April 21, 2026</strong><br/>
                <small>8:00 am - 6:00 pm</small>
              </div>
              <div className="calendar-action">
                <button className="book-btn-small">Book Now</button><br/>
                <small>200 tickets</small>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <div className="content-box map-box">
            <h3>Map</h3>
            <div className="fake-map">Google Maps Placeholder</div>
          </div>

          <div className="content-box profile-box">
            <div className="profile-header">
              <div className="profile-avatar">👤</div>
              <div>
                <h3>Ravi</h3>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className="profile-contact">
              <p>✉️ ravichandra@mercomindia.com</p>
              <p>🔗 http://localhost/conferencelisting</p>
            </div>
            <button className="message-btn">✉ Send Message</button>
          </div>

          <div className="content-box">
            <h3>Tags</h3>
            <div className="tags-container">
              <span className="tag">Cafe</span>
              <span className="tag">Food</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EventDetails;