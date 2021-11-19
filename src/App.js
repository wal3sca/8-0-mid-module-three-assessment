import "./App.css";
import data from "./data/productData";
import ProductCard from "./components/ProductCard"
import SelectedProd from "./components/SelectedProduct"



constructor() {
  super();
  this.state = {
    product: data.productData,
    selectedProduct: {
      name: "",
      price: "",
      description:
        "",
      image: "https://via.placeholder.com/100",
    }
  };
}

handleProductClick= (item) => {
  this.setState({
    selectedProduct: item,
  });
};

render() {
  const { selectedProduct } = this.state;
  const product = this.state.product.map((item) => {
    return (
      <ProductCard
      key={item.id}
      item={item}
      handleProductClick={this.handleProductClick}
          />
       );
    });
      
    return (
      <div className="app" id="app-container">
        <h1>Product List</h1>
        <SelectedProd prod={selectedProduct} />
        {SelectedProd({dino: selectedProduct})}
        <div id="product-list-container">{product}</div>
      </div>
      );
    }
  }



export default App;
