 1.React is primarily used for:
 a) Server-side rendering
 b) Styling web pages
 c) Building user interfaces 
 d) Managing databases
Ans:-c) Building user interfaces

 2.JSX allows you to:
 a) Write JavaScript inside CSS files
 b) Write HTML-like code inside JavaScript 
 c) Run SQL queries in React
 d) Replace Node.js
 Ans:-b) Write HTML-like code inside JavaScript


 3.Which of the following is true about props?
 a) Props can be modified inside the child component
 b) Props allow data flow from child → parent
 c) Props are immutable and flow parent → child 
 d) Props are used to manage component state
 Ans:-c) Props are immutable and flow parent → child


 4.In React, event handlers are written in:
 a) snake_case
 b) PascalCase
 c) camelCase 
 d) kebab-case
 Ans:-c) camelCase


 5.What does React use for efficient DOM updates?
 a) Shadow DOM
 b) Virtual DOM 
 c) Real DOM only
 d) Web Assembly
 Ans:-b) Virtual DOM

 6.Write a simple React functional component called 
HelloWorld that displays “Hello, React!”
Ans:-  
import React from 'react';

function HelloWorld() {
  return (
    <h1>Hello, React!</h1>
  );
}

export default HelloWorld;

App.js
--------
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;


 7.What is the difference between a functional 
component and a class component?
Ans:- 
Functional components are simpler, cleaner, and preferred in modern React with Hooks, while class components are older and used less often now.

 8.Why should React component names start with a 
capital letter?
Ans:- React uses capitalization to distinguish between HTML tags and custom components.

 9.Explain the difference between JSX and plain 
JavaScript in React.
Ans:-
i-JSX is a syntax extension that lets you write HTML-like code inside JavaScript. Where plain javascript is standard JavaScript code without any HTML-like syntax.
ii-JSX makes it easier to describe UI structure in a readable, declarative way. Where plain javascript used for logic, functions, and DOM manipulation manually.

 10.Create a button in React that, when clicked, logs 
"Button clicked!" to the console.
Ans:-
import React from 'react';

function ClickButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default ClickButton;

App.js
---------
import ClickButton from './ClickButton';

function App() {
  return (
    <div>
      <ClickButton />
    </div>
  );
}

export default App;



 Build a simple profile card
 -----------------------------
 import React from "react";

function ProfileCard({ name, role, avatarUrl }) {
 
  const handleClick = () => {
    alert("Hello from " + name);
  };

 
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    margin: "10px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <button style={buttonStyle} onClick={handleClick}>
        Say Hello 👋
      </button>
    </div>
  );
}

export default ProfileCard;

App.js
--------
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <ProfileCard
        name="Hrushikesh Nandi"
        role="Frontend Developer Intern"
        avatarUrl="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;

Greeting App
-------------
import React from "react";

function Greeting({ name, favoriteColor }) {
 
  const textStyle = {
    color: favoriteColor,
    fontFamily: "Arial, sans-serif",
  };


  const handleClick = () => {
    console.log(`${name} clicked the button!`);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2 style={textStyle}>
        Hello {name}! Your favorite color is {favoriteColor}.
      </h2>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: favoriteColor,
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Greeting;

App.js
-------
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h1>🌈 Mini Greeting App</h1>

      <Greeting name="Aman" favoriteColor="blue" />
      <Greeting name="Riya" favoriteColor="green" />
      <Greeting name="Hrushikesh" favoriteColor="purple" />
    </div>
  );
}

export default App;

Why we use react?
------------------
We use React to build fast, dynamic, and reusable user interfaces efficiently. It uses a component-based structure and a Virtual DOM to update only what’s needed, making web apps faster and easier to manage.

What is vite? why vite is better than create react app?
---------------------------------------------------------

Vite is a fast, modern build tool that helps you develop front-end apps quickly. It’s better than Create React App (CRA) because it offers much faster startup and build times, uses native ES modules, and provides instant hot reloads — making development smoother and more efficient.


Shopping cart app
-------------------
App.jsx
---------
import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];


function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}


function CartItem({ item, addQty, removeQty, removeItem }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        {item.name} - ${item.price} × {item.quantity} = $
        {item.price * item.quantity}
      </span>
      <button onClick={() => addQty(item.id)} style={{ marginLeft: "10px" }}>
        +
      </button>
      <button onClick={() => removeQty(item.id)} style={{ marginLeft: "5px" }}>
        -
      </button>
      <button
        onClick={() => removeItem(item.id)}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </div>
  );
}


function CartSummary({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}



export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const addQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Simple Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addQty={addQty}
            removeQty={removeQty}
            removeItem={removeItem}
          />
        ))
      )}

      <CartSummary cart={cart} />
    </div>
  );
}

main.jsx
-----------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

Mini Greeting App
-------------------
App.jsx
---------
import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    profilePic: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address";
        break;
      case "password":
        if (value.length < 8)
          error = "Password must be at least 8 characters long";
        break;
      case "confirmPassword":
        if (value !== form.password)
          error = "Passwords do not match";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setForm((prev) => ({ ...prev, [name]: fieldValue }));

    if (name !== "profilePic" && name !== "terms") {
      validate(name, fieldValue);
    }
  };

 
  const getPasswordStrength = () => {
    const { password } = form;
    if (!password) return "";
    if (password.length < 8) return "Weak 🔴";
    if (/[A-Z]/.test(password) && /\d/.test(password)) return "Strong 🟢";
    return "Medium 🟠";
  };

 
  const isFormValid =
    form.name.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.password.length >= 8 &&
    form.password === form.confirmPassword &&
    form.terms;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>🎉 Registration Successful!</h2>
        <p>Welcome, {form.name}!</p>
        {form.profilePic && (
          <img
            src={URL.createObjectURL(form.profilePic)}
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>📝 Mini Greeting App</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={(e) => validate(e.target.name, e.target.value)}
          style={{ width: "100%", marginBottom: "5px" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={(e) => validate(e.target.name, e.target.value)}
          style={{ width: "100%", marginBottom: "5px" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={(e) => validate(e.target.name, e.target.value)}
          style={{ width: "100%", marginBottom: "5px" }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {form.password && <p>Password Strength: {getPasswordStrength()}</p>}

        {/* Confirm Password */}
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={(e) => validate(e.target.name, e.target.value)}
          style={{ width: "100%", marginBottom: "5px" }}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}

        {/* Profile Picture */}
        <label>Profile Picture:</label>
        <input
          type="file"
          name="profilePic"
          accept="image/*"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Terms and Conditions */}
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        <br />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "8px",
            backgroundColor: isFormValid ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}


main.jsx
---------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
