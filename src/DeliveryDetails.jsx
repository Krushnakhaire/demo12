

import React, { useState, useEffect } from "react";
import axios from "axios";

const DeliveryDetails = () => {
    const [deliveryData, setDeliveryData] = useState({
        productName: "",
        quantity: 0,
        deliveryDate: "",
        fertilizerShop: "",
    });

    const [products, setProducts] = useState([]);
    const [fertilizerShops, setFertilizerShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productResponse, shopResponse] = await Promise.all([
                    axios.get("http://192.168.140.223:3000/product"),
                    axios.get("http://192.168.140.223:3000/fertilizershop"),
                ]);

                console.log("Product Response Data:", productResponse.data);
                console.log("Shop Response Data:", shopResponse.data);

             
                setProducts(
                    productResponse.data.map((item) => item.productName || item.name || item.product_name)
                );
                
               
                setFertilizerShops(
                    shopResponse.data.map((item) => item.shopname || item.name || item.shop_name)
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryData({ ...deliveryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://192.168.140.223:3000/add-delivery", deliveryData);
            alert("Delivery details added successfully!");
            setDeliveryData({ productName: "", quantity: 0, deliveryDate: "", fertilizerShop: "" });
        } catch (error) {
            console.error("Error adding delivery details:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
            <h2>Delivery Details</h2>

            <label>
                Product Name:
                <select
                    name="productName"
                    value={deliveryData.productName}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                >
                    <option value="" disabled>
                        Select Product
                    </option>
                    {products.map((product, index) => (
                        <option key={index} value={product}>
                            {product}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Quantity:
                <input
                    type="number"
                    name="quantity"
                    value={deliveryData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                />
            </label>

            <label>
                Delivery Date:
                <input
                    type="date"
                    name="deliveryDate"
                    value={deliveryData.deliveryDate}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                />
            </label>

            <label>
                Fertilizer Shop:
                <select
                    name="fertilizerShop"
                    value={deliveryData.fertilizerShop}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                >
                    <option value="" disabled>
                        Select Fertilizer Shop
                    </option>
                    {fertilizerShops.map((shop, index) => (
                        <option key={index} value={shop}>
                            {shop}
                        </option>
                    ))}
                </select>
            </label>

            <button
                type="submit"
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                }}
            >
                Add Delivery
            </button>
        </form>
    );
};

export default DeliveryDetails;
