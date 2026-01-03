import React from 'react';
import '../../styles/imageContainer.css';
import image1 from '../../assets/img/icons8-facebook-100 (1) 1.png';
import image2 from '../../assets/img/icons8-adobe-illustrator-100 2.png';
import image3 from '../../assets/img/icons8-video-camera-100 (1) 1.png';
import image4 from '../../assets/img/icons8-business-report-100 2.png';
import image5 from '../../assets/img/icons8-gmail-100 2.png';

import image6 from '../../assets/img/icons8-code-100 2.png';

const ImageContainer = ({ imageUrl, title, description }) => {
  return (
    <div className="image-container">

      <img src={imageUrl} alt={title} className="image" />
      <div className="image-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  return (
    <div className="gallery" style={{ marginTop: '0%' }}>
      <ImageContainer
        imageUrl={image1}
        title="Social Media Marketing"
        description="Targeted campaigns that spark engagement and fuel growth."
      />
      <ImageContainer
        imageUrl={image2}
        title="Graphical Illustrations"
        description="Artistic creations that communicate your message creatively and effectively."
      />
      <ImageContainer
        imageUrl={image3}
        title="Videography"
        description="Captivating visuals that bring your brand story to life."
      />
      <ImageContainer
        imageUrl={image4}
        title="Data Analytics"
        description="Actionable insights that steer your business towards success."
      />
      <ImageContainer
        imageUrl={image5}
        title="Email Marketing"
        description="Targeted campaigns that drive engagement and conversions."
      />
      <ImageContainer
        imageUrl={image6}
        title="SEO &Web Development"
        description="Boost your online presence with optimized websites."
      />
    </div>
  );
};

export default ImageGallery;