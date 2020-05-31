const drinkingWater = [
  { name: "Kathmandu Upatyaka Khanepani Ltd", contactNo: "01-4262202" },
  {
    name: "Ichangu Narayan Khane Pani, Swayambhu",
    contactNo: "01-4224816,01-4231371"
  },
  { name: "Ichangu Drinking Water Supply", contactNo: "01-4270693" },
  {
    name: "Balaju Khanepani Suppliers , Macha-Pokhari",
    contactNo: "01-4350449"
  },
  {
    name: "Harati Tanker Sewa, Swayambhu",
    contactNo: "01-4224816,01-4231371"
  },
  {
    name: "Khangsar Khanepani Sewa, Swayambhu",
    contactNo: "01-4279441,01-4280272"
  },
  { name: "Gana Khanepani, Jorpati", contactNo: "01-4498383,01-4437033" },
  {
    name: "Kailash Water Services, Khicha Pokhari",
    contactNo: "01-4242314"
  },
  { name: "Matatirtha Khanepani Sewa, Kalanki", contactNo: "01-4271322" },
  {
    name: "Srijana Shuddhakhanepani Sewa, Kathmandu",
    contactNo: "01-4260365"
  },
  {
    name: "Bangalamukhi Khanepani Sewa, Lagankhel",
    contactNo: "01-5539248,9803162040"
  },
  { name: "Buddha Khanepani , Saatdobato", contactNo: "01-5551755" },
  { name: "Pabitra Khane Pani, Lalitpur Area", contactNo: "9814986543" }
]
const groceries = [
  {
    name: "Daraz (w/ Bigmart)",
    minimumOrder: "1500",
    link: "https://frog.ly/darazWeb"
  },
  {
    name: "Sastodeal",
    minimumOrder: "1000",
    link: "https://frog.ly/sastodealCovid "
  },
  { name: "Kirana", minimumOrder: "", link: "https://frog.ly/kirana" },
  {
    name: "Nimbus Bazar",
    minimumOrder: "",
    link: "https://frog.ly/nimbusBazar"
  },
  {
    name: "SmartDoko",
    minimumOrder: "1000",
    link: "https://frog.ly/SmartDoko"
  },
  {
    name: "Thulo",
    minimumOrder: "1000",
    link: "https://frog.ly/thulo",
    contactNo: "9801888268 (WhatsApp)"
  },
  { name: "Gyapu", minimumOrder: "1000", link: "https://frog.ly/gyapu" },
  {
    name: "SalesBerry",
    minimumOrder: "2000",
    link: "https://frog.ly/salesberry"
  },
  {
    name: "Bhatbhateni",
    minimumOrder: "5000",
    link: "https://frog.ly/bhatbhateni",
    contactNo:
      "9801241449, 9801234861, 9801246806, 9801118837 (Text / Viber / WhatsApp – only one)"
  },
  {
    name: "Durbar Mart",
    minimumOrder: "1000",
    link: "https://frog.ly/durbarmart"
  }
]
const foodAndVeg =  [
  { name: 'Foodmandu', minimumOrder: '1500', link: 'https://frog.ly/foodmandu', contactNo: '9802034008'},
  { name: 'Bhojdeals', minimumOrder: '1000', link: 'https://frog.ly/bhojdeals'},
  { name: 'Kathmandu Organics', minimumOrder: '1500', link: 'https://frog.ly/ktmorganics', contactNo: '01-4440130'},
  { name: 'Kheti Food', minimumOrder: '500', link: 'https://frog.ly/kheti', contactNo: '01-5524142, 9802393170'},
  { name: 'Farmers’ Market at Le Sherpa	', minimumOrder: '1000', link: 'https://frog.ly/sherpa', contactNo: '9802028777, 9801159482'},
]
const medical = [
  { name: 'Jeevee', link: 'https://frog.ly/jeevee', contactNo: '01-4440109, 9801165960'},
  { name: 'EPharmacy', link:'https://frog.ly/epharmacy' , contactNo: '980-8787939, 9863033500'},
  { name: 'NepMeds', link: 'https://nepmeds.com.np/', contactNo: '01-5107462'}
]

module.exports = {
  drinkingWater,
  groceries,
  foodAndVeg,
  medical
}