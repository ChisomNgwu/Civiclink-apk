
import './Topbar.css';
import { FaFilter, } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-header">
        <h2>Welcome to Civiclink</h2>
        <p>Connect with your local officials to report issues and get answers</p>
      </div>

      <div className="topbar-actions">
        <input type="text" placeholder="Search by keywords" className="search-input" />
        <button className="filter-btn">
          <FaFilter />
          Filter
        </button>
      </div>

      <div className="browse-btn-wrapper">
        <button className="browse-btn">Browse All Officials</button>
      </div>
    </div>
  );
};

export default Topbar;
