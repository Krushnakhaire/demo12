import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const LabelInput = ({ label, type, name, value, onChange, placeholder }) => (
    <label>
        {label}:
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
        />
    </label>
);

const LabelSelect = ({ label, name, value, onChange, options }) => (
    <label>
        {label}:
        <select
            name={name}
            value={value}
            onChange={onChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
        >
            <option value="" disabled>
                Select {label}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </label>
);

const PaymentReceipt = () => {
    const [paymentData, setPaymentData] = useState({
        batchNo: "",
        paymentDate: "",
        fertilizerShop: "",
        productName: "",
        quantity: "",
        totalAmount: "",
    });

    const [fertilizerShops, setFertilizerShops] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productResponse, shopResponse] = await Promise.all([
                    axios.get("http://192.168.140.223:3000/product"),
                    axios.get("http://192.168.140.223:3000/fertilizershop"),
                ]);

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
        setPaymentData({ ...paymentData, [name]: value });
    };

    const generateReceipt = (e) => {
        e.preventDefault();

        const doc = new jsPDF();

       
        doc.setFontSize(20);
        doc.text("SURAJ AGRO CHEMICAL", 105, 20, { align: "center" });
        doc.setFontSize(12);
        doc.text("Gajrwadi, Tal – Niphad, Dist - Nashik 422303", 105, 30, { align: "center" });

      
        doc.setFontSize(18);
        doc.text("Payment Receipt", 105, 50, { align: "center" });

        doc.setFontSize(12);
        let y = 70; 
        const lineSpacing = 8; 

        doc.text(`Batch No: ${paymentData.batchNo}`, 20, y);
        y += lineSpacing;
        doc.text(`Date: ${paymentData.paymentDate}`, 20, y);
        y += lineSpacing;
        doc.text(`Fertilizer Shop: ${paymentData.fertilizerShop}`, 20, y);
        y += lineSpacing;
        doc.text(`Product Name: ${paymentData.productName}`, 20, y);
        y += lineSpacing;
        doc.text(`Quantity: ${paymentData.quantity}`, 20, y);
        y += lineSpacing;
        doc.text(`Total Amount: Rs ${paymentData.totalAmount}`, 20, y);
        y += lineSpacing;
        doc.text("Thank you for your payment!", 20, y);

        
        doc.save("Payment_Receipt.pdf");

        alert("Receipt Generated and Downloaded Successfully");
    };

    return (
        <form onSubmit={generateReceipt} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Generate Payment Receipt</h2>

            <LabelInput
                label="Batch No"
                type="text"
                name="batchNo"
                value={paymentData.batchNo}
                onChange={handleChange}
                placeholder="Batch No"
            />

            <LabelInput
                label="Payment Date"
                type="date"
                name="paymentDate"
                value={paymentData.paymentDate}
                onChange={handleChange}
            />

            <LabelSelect
                label="Product Name"
                name="productName"
                value={paymentData.productName}
                onChange={handleChange}
                options={products}
            />

            <LabelSelect
                label="Fertilizer Shop"
                name="fertilizerShop"
                value={paymentData.fertilizerShop}
                onChange={handleChange}
                options={fertilizerShops}
            />

            <LabelInput
                label="Quantity"
                type="number"
                name="quantity"
                value={paymentData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
            />

            <LabelInput
                label="Total Amount"
                type="number"
                name="totalAmount"
                value={paymentData.totalAmount}
                onChange={handleChange}
                placeholder="Total Amount"
            />

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
                Generate & Download Receipt
            </button>
        </form>
    );
};

export default PaymentReceipt;


