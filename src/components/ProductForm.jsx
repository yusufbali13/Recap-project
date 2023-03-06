const ProductForm = ({ formData, handleChange, handleSubmit, text }) => {
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">{text} Product</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="image"
            value={formData.image}
            onChange={handleChange}
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To {text} Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;

// inputları doıldurup boşaltabilmek için value attributeunu kullandık ve değer olarakda formDatadan gelen verileri koyduk
//? tek bir handlechange fonksiyonuyla birden fazla inputtan veri almış olduk
