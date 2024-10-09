import React from 'react';
import './GridSection.css';

function GridSection() {
  return (
    <section className="grid-section">
      <div className="card">
        <img
        //   src="https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&w=600&q=80"
          src="https://t4.ftcdn.net/jpg/02/91/86/03/360_F_291860334_78srzTy8ltVSIUMYSZx169nWfPEWwnVt.jpg"
          alt="Dandiya Night"
        />
        <div className="card-content">
          <h3>Dandiya Night</h3>
          <p>Experience the joy of traditional Dandiya dance.</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/Navratri.jpg"
          alt="Festive Food"
        />
        <div className="card-content">
          <h3>Festive Feast</h3>
          <p>Indulge in a variety of traditional Navaratri delicacies.</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/171023-Navratri-01.jpg?resize=740%2C474&ssl=1"
          alt="Cultural Program"
        />
        <div className="card-content">
          <h3>Cultural Showcase</h3>
          <p>Witness amazing performances by talented artists.</p>
        </div>
      </div>
    </section>
  );
}

export default GridSection;
