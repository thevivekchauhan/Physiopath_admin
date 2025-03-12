// import React, { useState } from "react";

// const App = () => {
//   const [products] = useState([
//     {
//       id: 1,
//       name: "Neck Massager",
//       price: 100,
//       image: "/Product Images/Neck_pain.png",
//     },
//     {
//       id: 2,
//       name: "Back Massager",
//       price: 300,
//       image: "/Product Images/Back_pain.png",
//     },
//     {
//       id: 3,
//       name: "Knee Brace",
//       price: 300,
//       image: "/Product Images/Knee_Brace.png",
//     },
//     {
//       id: 4,
//       name: "Foot Massager",
//       price: 250,
//       image: "/Product Images/Foot_Massager.png",
//     },
//     {
//       id: 5,
//       name: "Hand Gripper",
//       price: 50,
//       image: "/Product Images/Hand_Gripper.png",
//     },
//     {
//       id: 6,
//       name: "Shoulder Support",
//       price: 200,
//       image: "/Product Images/Shoulder_Support.png",
//     },
//     {
//       id: 7,
//       name: "Elbow Brace",
//       price: 180,
//       image: "/Product Images/Elbow_Brace.png",
//     },
//     {
//       id: 9,
//       name: "Posture Corrector",
//       price: 220,
//       image: "/Product Images/Posture_Corrector.png",
//     },
//   ]);

//   const appStyles = {
//     textAlign: "center",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   };

//   const gridStyles = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid
//     gap: "20px",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const cardStyles = {
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "16px",
//     textAlign: "center",
//     boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
//     height: "auto", // Let the card height adjust automatically
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   };

//   const imageStyles = {
//     width: "100%", // Make the image fill the width of the container
//     height: "200px", // Fixed height for images
//     objectFit: "contain", // Ensures the full image is visible without cutting
//     borderRadius: "8px",
//   };

//   const handleImageError = (e) => {
//     e.target.src = "/default_image.png"; // Fallback image path
//   };

//   return (
//     <div style={appStyles}>
//       <h1>Available Products</h1>
//       <div style={gridStyles}>
//         {products.map((product) => (
//           <div key={product.id} style={cardStyles}>
//             <img
//               src={product.image}
//               alt={`Image of ${product.name}`}
//               style={imageStyles}
//               onError={handleImageError}
//             />
//             <h2>{product.name}</h2>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



















import React, { useState, useEffect } from "react";
import "./Rent.css";

const App = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [
      {
        id: 1,
        name: "Neck Massager",
        price: 100,
        image: "/Product Images/Neck_pain.png",
      },
      {
        id: 2,
        name: "Back Massager",
        price: 300,
        image: "/Product Images/Back_pain.png",
      },
      {
        id: 3,
        name: "Knee Brace",
        price: 300,
        image: "/Product Images/Knee_Brace.png",
      },
      {
        id: 4,
        name: "Foot Massager",
        price: 250,
        image: "/Product Images/Foot_Massager.png",
      },
      {
        id: 5,
        name: "Hand Gripper",
        price: 50,
        image: "/Product Images/Hand_Gripper.png",
      },
      {
        id: 6,
        name: "Shoulder Support",
        price: 200,
        image: "/Product Images/Shoulder_Support.png",
      },
      {
        id: 7,
        name: "Elbow Brace",
        price: 180,
        image: "/Product Images/Elbow_Brace.png",
      },
      {
        id: 9,
        name: "Posture Corrector",
        price: 220,
        image: "/Product Images/Posture_Corrector.png",
      },
    ];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [actionType, setActionType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });

  const [editingProduct, setEditingProduct] = useState(null);
  const [showQrPopup, setShowQrPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAction = (product, type) => {
    setSelectedProduct(product);
    setActionType(type);
    setQuantity(1);
    setShowPopup(true);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const itemIndex = cart.findIndex(
      (item) => item.id === selectedProduct.id && item.type === actionType
    );
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      updatedCart[itemIndex].totalPrice += selectedProduct.price * quantity;
      setCart(updatedCart);
    } else {
      const item = {
        ...selectedProduct,
        type: actionType,
        quantity,
        totalPrice: selectedProduct.price * quantity,
      };
      setCart([...cart, item]);
    }
    setShowPopup(false);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateCartQuantity = (index, change) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity + change > 0) {
      updatedCart[index].quantity += change;
      updatedCart[index].totalPrice =
        updatedCart[index].quantity * updatedCart[index].price;
      setCart(updatedCart);
    } else {
      removeFromCart(index);
    }
  };

  const handlePayment = () => {
    setShowOrderConfirmation(true);
    setShowCartModal(false);
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
    setShowOrderConfirmation(false);
    setShowPaymentPopup(true);
  };

  const cancelOrderConfirmation = () => {
    setShowOrderConfirmation(false);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1, price: parseFloat(newProduct.price) },
    ]);
    setNewProduct({ id: "", name: "", price: "", image: "" });
  };

  const updateProduct = (id, updatedDetails) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, ...updatedDetails } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const saveProductChanges = () => {
    updateProduct(editingProduct.id, newProduct);
    setEditingProduct(null);
    setNewProduct({ id: "", name: "", price: "", image: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (editingProduct) {
        saveProductChanges();
      } else {
        addProduct();
      }
    }
  };

  const handleUpiPayment = () => {
    setShowQrPopup(true);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Physiotherapy Products</h1>
        <div className="cart" onClick={() => setShowCartModal(true)}>
          <span>🛒 Cart ({cart.length})</span>
        </div>
      </header>

      <div className="add-product-form">
        <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleProductChange}
          onKeyPress={handleKeyPress}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleProductChange}
          onKeyPress={handleKeyPress}
        />
        <input
          type="text"
          name="image"
          placeholder="Product Image URL"
          value={newProduct.image}
          onChange={handleProductChange}
          onKeyPress={handleKeyPress}
        />
        {editingProduct ? (
          <button onClick={saveProductChanges}>Save Changes</button>
        ) : (
          <button onClick={addProduct}>Add Product</button>
        )}
      </div>

      <main className="main-content">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price}</p>
              <div className="actions">
                <button onClick={() => handleAction(product, "buy")}>
                  Buy
                </button>
                <button onClick={() => handleEditProduct(product)}>
                  ✏️
                </button>
                <button onClick={() => deleteProduct(product.id)}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Confirm {actionType === "rent" ? "Rent" : "Purchase"}</h3>
            <p>
              Are you sure you want to {actionType} {selectedProduct.name}?
            </p>
            <div className="quantity-selector">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Total Price: ₹{selectedProduct.price * quantity}</p>
            <div className="popup-buttons">
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="cancel" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showCartModal && (
        <div className="cart-modal-overlay">
          <div className="cart-modal-content">
            <h3>Your Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-details">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>{item.type === "rent" ? "Rent" : "Buy"}</p>
                        <p>Price: ₹{item.price}</p>
                        <p>Total: ₹{item.totalPrice}</p>
                      </div>
                    </div>
                    <div className="cart-item-controls">
                      <button
                        className="cart-quantity-btn"
                        onClick={() => updateCartQuantity(index, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cart-quantity-btn"
                        onClick={() => updateCartQuantity(index, 1)}
                      >
                        +
                      </button>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="cart-summary">
              <div className="summary-section">
                <h4>
                  Rent Total: ₹
                  {cart
                    .filter((item) => item.type === "rent")
                    .reduce((acc, item) => acc + item.totalPrice, 0)}
                </h4>
              </div>
              <div className="summary-section">
                <h4>
                  Buy Total: ₹
                  {cart
                    .filter((item) => item.type === "buy")
                    .reduce((acc, item) => acc + item.totalPrice, 0)}
                </h4>
              </div>
              <div className="summary-section">
                <h4>
                  Grand Total: ₹
                  {cart.reduce((acc, item) => acc + item.totalPrice, 0)}
                </h4>
              </div>
            </div>

            <div className="cart-modal-actions">
              {/* <button className="proceed-btn" onClick={handlePayment}>
                Proceed to Payment
              </button> */}
              <button
                className="close-btn"
                onClick={() => setShowCartModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showOrderConfirmation && !orderConfirmed && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Confirm Your Order</h3>
            <p>Are you sure you want to proceed with the items in your cart?</p>
            <div className="popup-buttons">
              <button className="confirm-btn" onClick={confirmOrder}>
                Confirm
              </button>
              <button className="cancel-btn" onClick={cancelOrderConfirmation}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showPaymentPopup && (
        <div className="payment-popup-overlay">
          <div className="payment-popup-content">
            <h3>Select Payment Method</h3>
            <div className="payment-options">
              <button className="payment-option" onClick={handleUpiPayment}>UPI</button>
            </div>
            <div className="popup-buttons">
              <button
                className="close-payment-popup"
                onClick={() => {
                  setShowPaymentPopup(false);
                  setOrderConfirmed(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showQrPopup && (
        <div className="qr-popup-overlay">
          <div className="qr-popup-content">
            <h1>Scan this QR code then pay it.</h1>
            <img src="/pay.jpg" alt="QR Code" />
            <button className="close-qr-popup" onClick={() => setShowQrPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;





