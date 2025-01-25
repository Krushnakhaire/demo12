import express from 'express'; 
import pool from './db.js'; 
import cors from 'cors'; 
import bodyParser from 'body-parser'; 

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send('<h1>Express js API</h1>');
});


app.get("/product", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Product');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Fetch all fertilizer shops
app.get("/fertilizershop", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM fertilizershop');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add new product
app.post("/api/add-product", async (req, res) => {
    const { Product_Name, Category, Description, PricePerUnit } = req.body;

    try {
        const query = `
            INSERT INTO Product (Product_Name, Category, Description, PricePerUnit)
            VALUES ($1, $2, $3, $4)
        `;
        await pool.query(query, [Product_Name, Category, Description, PricePerUnit]);
        res.status(201).send("Product added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting product into the database.");
    }
});

// Add new fertilizer shop
app.post("/addfertilizershop", async (req, res) => {
    const { ShopName, OwnerName, Address, ContactNumber, Email } = req.body;

    if (!ShopName || !OwnerName || !Address || !ContactNumber || !Email) {
        return res.status(400).send("All fields are required.");
    }

    try {
        const query = `
            INSERT INTO FertilizerShop (ShopName, OwnerName, Address, ContactNumber, Email)
            VALUES ($1, $2, $3, $4, $5)
        `;
        await pool.query(query, [ShopName, OwnerName, Address, ContactNumber, Email]);
        res.status(201).send("Fertilizer shop added successfully!");
    } catch (error) {
        console.error("Database error:", error.message);
        res.status(500).send("Error inserting fertilizer shop into the database.");
    }
});

// Add new delivery
app.post("/add-delivery", async (req, res) => {
    const { productName, quantity, deliveryDate, fertilizerShop } = req.body;

    try {
        const query = `
            INSERT INTO deliveries (product_name, quantity, delivery_date, fertilizer_shop)
            VALUES ($1, $2, $3, $4)
            RETURNING id;
        `;
        const values = [productName, quantity, deliveryDate, fertilizerShop];
        const result = await pool.query(query, values);

        res.status(200).json({
            message: "Delivery details added successfully!",
            deliveryId: result.rows[0].id,
        });
    } catch (error) {
        console.error("Error adding delivery details:", error);
        res.status(500).json({ message: "Error adding delivery details" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
