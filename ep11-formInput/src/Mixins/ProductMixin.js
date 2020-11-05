/**
 * TODO
 * mixin hay con duoc goi external component
 * mixin cung co lifecycle hook, va lifecycle hook cua mixin chay truoc lifecycle cuar component su dung mixin
 */

export const productMixin = {
  data() {
    return {
      text: "Hello vuejs",
      products: ["Iphone", "Samsung", "HTC", "Nokia", "Hway", "Bphone"],
      filterProduct: "",
    };
  },
  computed: {
    filterProducts() {
      return this.products.filter((e) => {
        if (this.filterProduct) {
          return e.toLowerCase().includes(this.filterProduct.toLowerCase());
        }
        return true;
      });
    },
  },
  created() {
    console.log("created from mixin");
  },
};
