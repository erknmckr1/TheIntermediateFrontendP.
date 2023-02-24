import { createSlice } from "@reduxjs/toolkit";
import products from "../products.json";
export const ProductSlice = createSlice({
  name: "money",
  initialState: {
    initialMoney: 100000000000,
    wallet:100000000000,
    item: products,
    basket: localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [],
  },
  reducers: {
    addBasket: (state, action) => {
      const { id, count, } = action.payload;
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === id
      ); // basket ıcındeki aynı urunlerı tespıt edıp o urunun sadece count  degerını arttırdık ürün yoksa baskete pushladık. Bu sorguyu yapmasak aynı ıd ye sahıp urunden 4 kere yolladıgımızı dusunelım her bırını yenı eleman gıbı kaydedecekti. Fınd ındex basket ıcındeki ogelerı tarıyacak bulursa count'u guncelleyecek bulamazsa -1 donecek.
      if (existingItemIndex !== -1) {
        state.basket[existingItemIndex].count = count;
        localStorage.setItem("basket",JSON.stringify(state.basket))
      } else {
        state.basket.push(action.payload);
        localStorage.setItem("basket",JSON.stringify(state.basket))
      }

      let price = 0

      state.basket.map(product=> price += product.count * product.price
      );
      state.wallet = state.initialMoney -price
    },
    deleteProduct:(state,action)=>{
      state.basket=state.basket.filter((product)=>product.id !== action.payload)
      localStorage.setItem("basket",JSON.stringify(state.basket))
    }
  },
    
});

export default ProductSlice.reducer;
export const { addBasket,deleteProduct } = ProductSlice.actions;
