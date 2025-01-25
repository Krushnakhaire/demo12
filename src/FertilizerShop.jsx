import React, { useState, useEffect } from "react";
import axios from "axios";

const FertilizerShop = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("http://192.168.140.223:3000/fertilizershop");
        setShops(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Server Error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError("Network Error: Could not reach the server. Please check your connection.");
        } else {
          setError(`Unexpected Error: ${err.message}`);
        }
        console.error(err);
      }
    };

    fetchShops();
  }, []);

  return (
    <div>
      <h2>Fertilizer Shop Details</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : shops.length > 0 ? (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Owner Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.shopname}</td>
                <td>{shop.ownername}</td>
                <td>{shop.address}</td>
                <td>{shop.contactnumber}</td>
                <td>{shop.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No fertilizer shops found.</p>
      )}
    </div>
  );
};

export default FertilizerShop;
