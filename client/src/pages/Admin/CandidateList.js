import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/candidatelist.css";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../../images/candidateProfile.jpg";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/auth/candidate-profiles"
        );
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/auth/candidate-profile/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete profile.`);
      }

      setCandidates(candidates.filter((candidate) => candidate._id !== id));
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminHeader />
      <section className="container candList">
        <h2 className="title textPrimary">Candidates List</h2>
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i class="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="formControl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="candDataTable">
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Logo</th>
                <th>Candidate Name</th>
                <th>Candidate Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((candidate) => (
                <tr key={candidate._id}>
                  <td>
                    <img
                      src={candidateProfile}
                      alt={`${candidate.firstName} logo`}
                    />
                  </td>
                  <td>
                    {candidate.firstName} {candidate.lastName}
                  </td>
                  <td>{candidate.email}</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <span
                      onClick={() => handleDelete(candidate._id)}
                      className="cursorPointer"
                    >
                      <i className="fa-solid fa-trash-can textDanger"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CandidateList;
