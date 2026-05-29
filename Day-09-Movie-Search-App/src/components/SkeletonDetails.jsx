export default function SkeletonDetails() {
  return (
    <div className="movie-details-wrapper">
      <div className="movie-details">
        <div className="skeleton-img" style={{width: '300px', height: '450px', flexShrink: 0}}></div>
        <div className="movie-details-info" style={{flex: 1}}>
          <div className="skeleton-title" style={{width: '60%', height: '50px'}}></div>
          <div className="skeleton-year" style={{width: '20%', height: '20px'}}></div>
          <div className="skeleton-title" style={{width: '90%', height: '80px'}}></div>
          <div className="skeleton-title" style={{width: '50%', height: '20px'}}></div>
          <div className="skeleton-title" style={{width: '70%', height: '20px'}}></div>
        </div>
      </div>
    </div>
  )
}