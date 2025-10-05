import React from "react";
import "./Jewelerylist.css";

function JewelryList({ addToCart }) {
  const jewelryItems = [
    {
      id: 1,
      name: "Diamond Necklace",
      weight: 22, // grams
      stoneRate: 1500, // per gram
      wastage: 5, // %
      img: "https://truediamond.in/cdn/shop/files/preview_images/2a81cea9d7274326b811ebeb6bef7597.thumbnail.0000000000_720x720.jpg?v=1725010597",
    },
    {
      id: 2,
      name: "Gold Earrings",
      weight: 8,
      stoneRate: 1200,
      wastage: 3,
      img: "https://static.wixstatic.com/media/b69f5d_59102cfa0d5641e7b344a0d9d54768b1~mv2.jpg/v1/fill/w_940,h_788,al_c,q_85/b69f5d_59102cfa0d5641e7b344a0d9d54768b1~mv2.jpg",
    },
    {
      id: 3,
      name: "Silver Bracelet",
      weight: 15,
      stoneRate: 500,
      wastage: 2,
      img: "https://au.pandora.net/dw/image/v2/BKNF_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwfa5ac46f/productimages/singlepackshot/590041C02_RGB.jpg?sw=1200&sh=1200&sm=fit&sfrm=png&bgcolor=F5F5F5",
    },
    {
      id: 4,
      name: "Ruby Ring",
      weight: 10,
      stoneRate: 1200,
      wastage: 4,
      img: "https://tse1.mm.bing.net/th/id/OIP.WA36Ko0UF8U0f3StYZw37wHaGL?pid=Api&P=0&h=180",
    },
    {
      id: 5,
      name: "Emerald Pendant",
      weight: 12,
      stoneRate: 1400,
      wastage: 3,
      img: "https://www.dhresource.com/0x0s/f2-albu-g5-M01-FC-21-rBVaJFg6_e6AT6UsAAOMWezBXE0855.jpg/luxury-emerald-pendant-20-pcs-2-5-5mm-natural.jpg",
    },
    {
      id: 6,
      name: "Platinum Chain",
      weight: 18,
      stoneRate: 1600,
      wastage: 5,
      img: "https://www.jewelove.in/cdn/shop/files/jewelove-2mm-japanese-platinum-rose-gold-fantasy-chain-for-women-jl-pt-ch-1213r-15-inches-39692317262065_1024x.jpg?v=1698131321",
    },
    {
      id: 7,
      name: "Pearl Necklace",
      weight: 20,
      stoneRate: 1000,
      wastage: 2,
      img: "https://i.pinimg.com/originals/d5/8e/4d/d58e4d8072f35cc70fb43ad5c87a75aa.jpg",
    },
    {
      id: 8,
      name: "Sapphire Earrings",
      weight: 14,
      stoneRate: 1800,
      wastage: 4,
      img: "https://media.istockphoto.com/id/954397602/photo/two-golden-sapphire-earrings-with-small-diamonds.jpg?s=170667a&w=0&k=20&c=dzSQhcjwFZ8kv2LjwkuF2FTpmYAggc1rkz8dM9eE_38=",
    },
  ];

  // calculate final price = (weight * stoneRate) + wastageAmount
  const calculatePrice = (item) => {
    const base = item.weight * item.stoneRate;
    const wastageAmount = (base * item.wastage) / 100;
    return { total: base + wastageAmount, wastageAmount };
  };

  return (
    <div className="shop-container">
      <h2 className="shop-title">✨ Our Jewelry Collection ✨</h2>
      <div className="jewelry-row">
        {jewelryItems.map((item) => {
          const { total, wastageAmount } = calculatePrice(item);
          return (
            <div key={item.id} className="jewelry-card">
              <img src={item.img} alt={item.name} className="jewelry-img" />
              <h3>{item.name}</h3>
              <p className="price">₹{total.toLocaleString()}</p>
              <p className="details">Weight: {item.weight}g</p>
              <p className="details">Stone Rate: ₹{item.stoneRate}/g</p>
              <p className="details">Wastage: {item.wastage}% (₹{wastageAmount.toFixed(2)})</p>
              <button className="add-btn" onClick={() => addToCart({ ...item, price: total })}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JewelryList;
