import React from 'react';
import SectionCard from './SectionCollectionCard';

function SectionCollection({text,image}) {
  return (
    <div>
      {/* BEST SELLERS COLLECTION */}
      {/* 4 cards */}
      <div className="text mt-sm-3 mt-md-5">
        <h2 className="text-center heading mt-5 mt-sm-3" style={{ color: '#bbb572' }} data-aos="slide-up">BEST SELLERS COLLECTION</h2>
        <hr style={{ color: '#bbb572' }} className="mt-4" />
      </div>

      {/* BEST SELLERS COLLECTION first row */}
      <div className="row mb-3">
        <SectionCard />
      </div>
    </div>
  );
}

export default SectionCollection;
