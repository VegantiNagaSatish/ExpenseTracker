<template>
  <h1 class="title">List of All Expenses</h1>
  <div class="container">
    <div
      class="price-tab"
      v-for="(expense, index) in listOfExpenses"
      :key="index"
    >
      <div class="infos">
        <div class="infos-highlight">{{ expense.category.categoryName }}</div>
        <div>{{ expense.month }} : {{ expense.createdDate }}</div>
        <div class="infos-highlight">
          PAYMENT TYPE: {{ expense.paymentType }}
        </div>
        <div>Created By: {{ expense.createdBy }}</div>
        <div>Last Update: {{ expense.updatedBy || expense.createdBy }}</div>
      </div>
      <div class="price">
        Total Amount <br />{{ expense.amount }} {{ currency_symbols["INR"] }}
      </div>
      <button class="custom-btn btn-12">
        <span>Click!</span><span>View Details</span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let listOfExpenses = ref([]);
    var currency_symbols = {
      USD: "$", // US Dollar
      EUR: "€", // Euro
      CRC: "₡", // Costa Rican Colón
      GBP: "£", // British Pound Sterling
      ILS: "₪", // Israeli New Sheqel
      INR: "₹", // Indian Rupee
      JPY: "¥", // Japanese Yen
      KRW: "₩", // South Korean Won
      NGN: "₦", // Nigerian Naira
      PHP: "₱", // Philippine Peso
      PLN: "zł", // Polish Zloty
      PYG: "₲", // Paraguayan Guarani
      THB: "฿", // Thai Baht
      UAH: "₴", // Ukrainian Hryvnia
      VND: "₫", // Vietnamese Dong
    };
    onMounted(() => {
      fetchDataFromBackend();
    });

    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get(
          "/api/expense/allExpenses?createdBy=string&page=0&size=10"
        );
        listOfExpenses.value = response.data.content;
      } catch (error) {
        console.error("Error fetching data from the backend:", error);
      }
    };

    return {
      listOfExpenses,
      currency_symbols,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.price-tab {
  width: 1160px;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 0.2%;
  background: linear-gradient(#555, #444);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
.price {
  min-width: 120px;
  width: fit-content;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #ff9547;
  text-align: center;
  color: #f9b84a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.infos {
  color: #ff9547;
  text-align: left;
  width: 400px;
  &-highlight {
    font-weight: 600;
  }
}
.title {
  font-family: "Times New Roman", Times, serif;
  color: #ff9547;
  font-size: 38px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 2px 5px rgba(0, 0, 5, 0.2);
  margin: auto;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 12 */
.btn-12 {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, #f9b84a 0%, #ff9547 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
