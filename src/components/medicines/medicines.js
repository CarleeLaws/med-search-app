import React from "react";
import styles from "./medicines.module.css";

const Medicines = ({ medicines, search }) => {
  const searchFilter = medicines.filter((medicine) => {
    if (search === "") {
      return medicines;
    } else {
      return (
        medicine.name.toLowerCase().includes(search.toLowerCase()) ||
        medicine.company.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  const numberOfResults = searchFilter.length;
  const NumberMeds = () => {
    if (numberOfResults === 1) {
      return `Looks like you have ${numberOfResults} medicine!`;
    }
    if (numberOfResults === 0) {
      return "Looks like you don't have any medicines!";
    } else {
      return `Looks like you have ${numberOfResults} medicines!`;
    }
  };

  return (
    <div>
      <div className={styles.root}>
        <NumberMeds />
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {searchFilter.map((medicine, index) => {
              return (
                <tr key={index}>
                  <td>{medicine.name}</td>
                  <td>{medicine.company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medicines;
