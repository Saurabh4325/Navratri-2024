import React from 'react';
import './SecondSection.css';

function SecondSection() {
  return (
    <section className="second-section">
      <h2>Celebrate the Spirit of Navaratri</h2>
      <div className="grid-section">


        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1601043075826-172ed3a9e3be"
            alt="Garba dancers"
          />
          <div className="card-content">
          <iframe width="450" height="215" src="https://www.youtube.com/embed/3X7x4Ye-tqo?si=BO5-rJb8tNNPfjnP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen = "true"></iframe>
            <h3>Garba Night</h3>
            <p>
              Experience the joy of traditional Garba dance with vibrant music
              and colorful attire.
            </p>
          </div>
        </div>


        <div className="card-content">
          <iframe width="450" height="215" src="https://www.youtube.com/embed/rz1hAo3Hiy4?si=EAEBt6gTivluXaPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
            <h3>Garba Night</h3>
            <p>
              Experience the joy of traditional Garba dance with vibrant music
              and colorful attire.
            </p>
          </div>


        
        <div className="card">
            
          {/* <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://player.vimeo.com/external/452493933.sd.mp4?s=0d2fb5f1e906b9f5f5b3854b811b0f59eddbc893&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            
            Your browser does not support the video tag.
          </video> */}
          
          <div className="card-content">
          <iframe width="450" height="215" src="https://www.youtube.com/embed/Jh_VKJAEnUY?si=rq2TX-eQ8Hux3aHN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen = "true"></iframe>
            <h3>Garba Night</h3>
            <p>
              Experience the joy of traditional Garba dance with vibrant music
              and colorful attire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
