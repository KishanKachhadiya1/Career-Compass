import React from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/candidatelist.css";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../../images/candidateProfile.jpg";

const candidatesList = [
  {
    id: 1,
    logo: candidateProfile,
    name: "Kishan Kachhadiya",
    email: "kishan@gmail.com",
  },
  {
    id: 2,
    logo: candidateProfile,
    name: "Kirtan Chaklasiya",
    email: "kirtan@gmail.com",
  },
  {
    id: 3,
    logo: candidateProfile,
    name: "Jainil Patel",
    email: "jaimil@gmail.com",
  },
];

const CandidateList = () => {
  return (
    <>
      <AdminHeader />
      <section className="container candList">
        <h2 className="title textPrimary">Candidates List</h2>
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i class="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input type="text" placeholder="Search..." className="formControl" />
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
              {candidatesList.map((candidate) => (
                <tr key={candidate.id}>
                  <td>
                    <img src={candidate.logo} alt={`${candidate.name} logo`} />
                  </td>
                  <td>{candidate.name}</td>
                  <td>{candidate.email}</td>
                  <td>
                    <i class="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <i class="fa-solid fa-trash-can textDanger"></i>
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
