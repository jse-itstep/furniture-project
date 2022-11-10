let cars = [
     {
          model: "BMW - X1",
          color: "Black",
          year: 2022,
          price: "32000000 KZT",
          country: "Germany"
     },
     {
          model: "Tesla - Model Y",
          color: "White",
          year: 2022,
          price: "56000000 KZT",
          country: "USA"
     },
     {
          model: "Toyota - Hilux",
          color: "Gray",
          year: 2022,
          price: "35000000 KZT",
          country: "Japan"
     },
     {
          model: "Nissan - Almera",
          color: "Black",
          year: 2018,
          price: "3200000 KZT",
          country: "Japan"
     },
     {
          model: "Volkswagen - Polo",
          color: "Red",
          year: 2019,
          price: "4600000 KZT",
          country: "Germany"
     },
     {
          model: "Volvo - S40",
          color: "Black",
          year: 2021,
          price: "45000000 KZT",
          country: "Sweden"
     },
     {
          model: "Lada - Vesta",
          color: "Gray",
          year: 2021,
          price: "8600000 KZT",
          country: "Russia"
     },
     {
          model: "Kia - Rio",
          color: "Blue",
          year: 2021,
          price: "10600000 KZT",
          country: "Korea"
     },
    {
          model: "Ford - Focus",
          color: "White",
          year: 2021,
          price: "12000000 KZT",
          country: "USA"
     },
     {
          model: "Chevrolet - Cobalt",
          color: "BlueSky",
          year: 2022,
          price: "7600000 KZT",
          country: "Kazakhstan"
     }
]

localStorage.setItem("cars", JSON.stringify(cars))
