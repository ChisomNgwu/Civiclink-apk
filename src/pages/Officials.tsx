
import React from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import OfficialCard from "../components/OfficialCards";
import "../styles/Officials.css";

// Image imports
import MinisterTaiwoImg from "../assets/Minister A. Taiwo .png";
import OrieukwuStanley from "../assets/Orieukwu Stanley .png";
import EjirogheneAdesua  from "../assets/Ejiroghene Adesua .png";
import RobertFox from "../assets/Robert Fox.png";
import MarvinMcKinney from "../assets/Marvin McKinney.png";
import JennyWilson from "../assets/Jenny Wilson.png";
import KristinWatson from "../assets/Kristin Watson.png";
import JacobJones from "../assets/Jacob Jones.png";
import FloydMiles from "../assets/Floyd Miles.png";

// Federal Officials
const federalOfficials = [
  {
    name: "Minister A. Taiwo",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: MinisterTaiwoImg,
  },
  {
    name: "Orieukwu Stanley ",
    role: "City Council",
    tags: ["Transport", "Parks"],
    image: OrieukwuStanley,
  },
  {
    name: "Ejiroghene Adesua ",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: EjirogheneAdesua ,
  },
  {
    name: "Robert Fox",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: RobertFox,
  },
  {
    name: "Marvin McKinney",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: MarvinMcKinney
  },
];

// State Officials
const stateOfficials = [
  {
    name: "Jenny Wilson",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: JennyWilson,
  },
  {
    name: "Kathryn Murphy",
    role: "City Council",
    tags: ["Transport", "Parks"],
    image: MinisterTaiwoImg,
  },
  {
    name: "Kristin Watson",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: KristinWatson,
  },
  {
    name: "Jacob Jones",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: JacobJones,
  },
  {
    name: "Floyd Miles",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: FloydMiles
  },
];

const tabOptions = ["All", "Federal", "State", "Local"];
const OfficialsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = () => {
    alert("Filter clicked!");
  };
  return (
    <div className="officials-page">
      <h1 className="page-title">Official Directory</h1>
      <p className="page-subtitle">Browse and connect with verified government officials</p>

      <div className="tabs-container">
        {tabOptions.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="search-filter-container">
      <input 
          type="text"
          placeholder="🔍Search by name, role, or topics..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="filter-button" onClick={handleFilterClick}>
         <FaFilter/>Filter
        </button>
      </div>

      <div className="tab-content">
        <p>
          Showing <strong>{activeTab}</strong> officials
        </p>
        {searchTerm && (
          <p>
            Searching for: <em>{searchTerm}</em>
          </p>
        )}
      </div>
      <section className="officials-section">
        <h2>Federal Officials</h2>
        <div className="officials-list">
          {federalOfficials.map((official, index) => (
            <OfficialCard key={index} {...official} />
          ))}
        </div>
      </section>

      <section className="officials-section">
        <h2>State Officials</h2>
        <div className="officials-list">
          {stateOfficials.map((official, index) => (
            <OfficialCard key={index} {...official} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfficialsPage;
