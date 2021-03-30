<form className="search-product" action="">
            <input
              className="search-product-input"
              type="text"
              placeholder="Czego szukasz?"
              onChange={console.log("aaa")}
            />
            <div
              className="search-product-button"
              type="submit"
              onClick={this.searchProduct}
            >
              SZUKAJ
            </div>
          </form>