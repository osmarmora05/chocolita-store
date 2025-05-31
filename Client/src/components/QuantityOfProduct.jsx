import "./QuantityOfProduct.css";

function QuantityOfProduct({ increase, decrease, value }) {
  return (
    <div className="cart-card__counter">
      <div className="cart-card__counter-box-minus" onClick={decrease}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
        </svg>
      </div>
      <span className="cart-card__counter-value">{value}</span>
      <div className="cart-card__counter-box-plus" onClick={increase}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </div>
    </div>
  );
}

export default QuantityOfProduct;
