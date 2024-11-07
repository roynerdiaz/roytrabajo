// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí

      comprasrealizadas: [],

      productos: [
        {
          imagen:
            "https://m.media-amazon.com/images/I/71Unaoc42ZL._AC_SX569_.jpg",
          precio: "120.00$",
          titulo: "Cinturón de tejido elástico",
          descripcion: "tubular para hombre",
          id: 1,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/81cr3lwVSxL._AC_SX569_.jpg",
          precio: "38.00$",
          titulo: "Cinturón táctico JUKMO",
          descripcion: "cinturón de nailon para pistola",
          id: 2,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/91oezb7CluL._AC_SX569_.jpg",
          precio: "34.00$",
          titulo: "Zitahli Cinturón de trinquete",
          descripcion: "cinturón de cuero para hombre",
          id: 3,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/81u3jhX+zLL._AC_SX569_.jpg",
          precio: "135.00$",
          titulo: "BULLIANT Cinturón de trinquete",
          descripcion: "cinturón casual de nailon",
          id: 4,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/718lKibkAFL._AC_SX569_.jpg",
          precio: "120.00$",
          titulo: "BOSTANTEN Cinturón de cuero",
          descripcion: "para hombre, vestido e informal",
          id: 5,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/713Og-pjL-L._AC_SY550_.jpg",
          precio: "90.00$",
          titulo: "Timberland Cinturón de cuero",
          descripcion: "on hebilla clásica de 1.378",
          id: 6,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71PCPcDgfKL._AC_SY550_.jpg",
          precio: "60.00$",
          titulo: "BULLIANT - Cinturón con diseño ajustable ",
          descripcion: "con trinquete deslizante para hombre",
          id: 7,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71Gfs4yKvBL._AC_SX466_.jpg",
          precio: "35.00$",
          titulo: "Dickies - Cinturón elástico",
          descripcion: "cinturon negro hecho 100% de piel",
          id: 8,
        },
      ],
    };
  },
  mutations: {
    agregarcompra(state, producto) {
      if (state.comprasrealizadas.length > 0) {
        let r = state.comprasrealizadas.findIndex((e) => {
          return e.id == producto.id;
        });
        console.log(state.comprasrealizadas);
        if (r == -1) state.comprasrealizadas.push(producto);
        else {
          state.comprasrealizadas[r].cantidad += 1;
        }
      } else state.comprasrealizadas.push(producto);
    },
    eliminaritem(state, posicion) {
      state.comprasrealizadas.splice(posicion, 1);
    },
  },
  actions: {
    agregarcompra({ commit }) {
      commit("agregarcompra");
    },

    eliminaritem({ commit }) {
      commit("eliminaritem");
    },
  },

  getters: {
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0);
      return cantidad;
    },
    procomprados: (state) => state.comprasrealizadas,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  return {
    provide: {
      store: store,
    },
  };
});
