document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.getElementById('chatbot-button');
  const chatInterface = document.getElementById('chat-interface');
  const userInput = document.getElementById('user-input');
  const chatMessages = document.getElementById('chat-messages');
  const sendButton = document.getElementById('send-button');

  // Check if chat button and chat interface exist
  if (!chatButton || !chatInterface) {
      console.error('Chatbot button or interface not found.');
      return;
  }

  // Chat button click event - toggle chat interface visibility
  chatButton.addEventListener('click', () => {
      if (chatInterface.style.display === 'none' || chatInterface.style.display === '') {
          chatInterface.style.display = 'block';
      } else {
          chatInterface.style.display = 'none';
      }
  });

  // Send button click event - send the user's message
  sendButton.addEventListener('click', sendMessage);

  // Enter key press event for input field
  userInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  // Function to send a message
  function sendMessage() {
      const message = userInput.value.trim();
      if (message) {
          addMessage('You', message);
          // Simulate an AI response
          setTimeout(() => {
              addMessage('AI Guide', 'Thank you for your message. How can I assist you today?');
          }, 1000);
          userInput.value = ''; // Clear the input field after sending
      }
  }

  // Function to add a message to the chat
  function addMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');

      if (sender === 'AI Guide') {
          // Replace the text with an image for AI Guide
          const img = document.createElement('img');
          img.src = 'chat1.png'; // Path to your AI Guide image
          img.alt = 'AI Guide';
          img.classList.add('ai-guide-image'); // Add a class for styling (optional)
          messageElement.appendChild(img);
      } else {
          messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      }
      
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
  }

  // Initialize chat with a welcome message
  addMessage('AI Guide', 'Hello! How can I help you today?');
});

  // Function to toggle between light and dark mode
  function toggleDarkMode() {
      const chatInterface = document.getElementById('chat-interface');
      const chatMessages = document.getElementById('chat-messages');
      const chatInput = document.getElementById('chat-input');
      const chatButton = document.getElementById('chatbot-button');

      // Toggle dark mode for the chat interface and chat input
      chatInterface.classList.toggle('dark-mode');
      chatMessages.classList.toggle('dark-mode');
      chatInput.classList.toggle('dark-mode');
      chatButton.classList.toggle('dark-mode');
  }


      // Date logic
  var today = new Date().toISOString().split('T')[0];
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var tomorrowDate = tomorrow.toISOString().split('T')[0];
  document.getElementById('start-date').setAttribute('min', today);
  document.getElementById('end-date').setAttribute('min', tomorrowDate);
  document.getElementById('end-date').value = tomorrowDate;

  document.getElementById('start-date').addEventListener('change', function() {
      var startDate = this.value;
      if (startDate) {
          document.getElementById('end-date').setAttribute('min', startDate);
          var endDate = document.getElementById('end-date').value;
          if (endDate && endDate < startDate) {
              document.getElementById('end-date').value = startDate;
          }
      }
  });

  const districts = {
      "Andaman and Nicobar Islands": [
  "North and Middle Andaman",
  "South Andaman",
  "Nicobar"
],
"Andhra Pradesh": [
  "Anantapur",
  "Chittoor",
  "East Godavari",
  "Guntur",
  "Krishna",
  "Kurnool",
  "Prakasam",
  "Srikakulam",
  "Sri Potti Sriramulu Nellore",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "YSR Kadapa"
],
"Arunachal Pradesh": [
  "Anjaw",
  "Changlang",
  "Dibang Valley",
  "East Kameng",
  "East Siang",
  "Kurung Kumey",
  "Lohit",
  "Longding",
  "Namsai",
  "Papum Pare",
  "Tawang",
  "Tirap",
  "Upper Siang",
  "Upper Subansiri",
  "West Kameng",
  "West Siang"
],
"Assam": [
  "Baksa",
  "Barpeta",
  "Bishnupur",
  "Darrang",
  "Dhemaji",
  "Dibrugarh",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Jorhat",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Morigaon",
  "Nagaon",
  "Nalbari",
  "Sivasagar",
  "Sonitpur",
  "Tinsukia",
  "Udalguri",
  "West Karbi Anglong"
],
"Bihar": [
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran"
],
"Chandigarh": [
  "Chandigarh"
],
"Chhattisgarh": [
  "Balod",
  "Baloda Bazar",
  "Bastar",
  "Bemetara",
  "Dantewada",
  "Dhamtari",
  "Durg",
  "Gariaband",
  "Janjgir-Champa",
  "Jashpur",
  "Kabirdham",
  "Kanker",
  "Korba",
  "Korea",
  "Mahasamund",
  "Manendragarh",
  "Narayanpur",
  "Raigarh",
  "Raipur",
  "Rajnandgaon",
  "Sukma",
  "Surajpur",
  "Surguja"
],
"Dadra and Nagar Haveli and Daman and Diu": [
  "Dadra and Nagar Haveli",
  "Daman",
  "Diu"
],
"Delhi": [
  "Central Delhi",
  "East Delhi",
  "North Delhi",
  "North East Delhi",
  "North West Delhi",
  "South Delhi",
  "South East Delhi",
  "South West Delhi",
  "West Delhi"
],
"Goa": [
  "North Goa",
  "South Goa"
],
"Gujarat": [
  "Ahmedabad",
  "Amreli",
  "Anand",
  "Banaskantha",
  "Bharuch",
  "Bhavnagar",
  "Dahod",
  "Dangs",
  "Gandhinagar",
  "Kutch",
  "Kheda",
  "Mahisagar",
  "Mehsana",
  "Narmada",
  "Navsari",
  "Panchmahal",
  "Patan",
  "Porbandar",
  "Rajkot",
  "Sabarkantha",
  "Surat",
  "Surendranagar",
  "Vadodara",
  "Valsad"
],
"Haryana": [
  "Ambala",
  "Bhiwani",
  "Charkhi Dadri",
  "Faridabad",
  "Fatehabad",
  "Gurugram",
  "Hisar",
  "Jhajjar",
  "Jind",
  "Kaithal",
  "Karnal",
  "Mahendragarh",
  "Nuh",
  "Panchkula",
  "Panipat",
  "Rewari",
  "Rohtak",
  "Sirsa",
  "Sonipat",
  "Yamunanagar"
],
"Himachal Pradesh": [
  "Bilaspur",
  "Chamba",
  "Hamirpur",
  "Kangra",
  "Kinnaur",
  "Kullu",
  "Lahaul and Spiti",
  "Mandi",
  "Shimla",
  "Sirmaur",
  "Solan",
  "Una"
],
"Jammu and Kashmir": [
  "Doda",
  "Ganderbal",
  "Jammu",
  "Kathua",
  "Kishtwar",
  "Poonch",
  "Rajouri",
  "Ramban",
  "Reasi",
  "Samba",
  "Shopian",
  "Srinagar",
  "Udhampur"
],
"Jharkhand": [
  "Bokaro",
  "Chatra",
  "Deoghar",
  "Dhanbad",
  "Dumka",
  "East Singhbhum",
  "Garhwa",
  "Giridih",
  "Godda",
  "Gumla",
  "Hazaribagh",
  "Jamtara",
  "Khunti",
  "Koderma",
  "Latehar",
  "Lohardaga",
  "Pakur",
  "Palamu",
  "Ranchi",
  "Sahibganj",
  "Saraikela Kharsawan",
  "Simdega",
  "West Singhbhum"
],
"Karnataka": [
  "Bagalkot",
  "Bangalore Rural",
  "Bangalore Urban",
  "Belgaum",
  "Bellary",
  "Bidar",
  "Chamarajanagar",
  "Chikkaballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Gulbarga",
  "Hassan",
  "Haveri",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysore",
  "Raichur",
  "Ramanagara",
  "Shimoga",
  "Tumkur",
  "Udupi",
  "Uttara Kannada",
  "Vijayapura",
  "Yadgir"
],
"Kerala": [
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad"
],
"Ladakh": [
  "Kargil",
  "Leh"
],
"Lakshadweep": [
  "Lakshadweep"
],
"Madhya Pradesh": [
  "Agar Malwa",
  "Alirajpur",
  "Anuppur",
  "Ashoknagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Hoshangabad",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa",
  "Khargone",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narsinghpur",
  "Neemuch",
  "Niwari",
  "Panna",
  "Raisen",
  "Rajgarh",
  "Ratlam",
  "Rewa",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha"
],
"Maharashtra": [
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Beed",
  "Bhandara",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalna",
  "Jalgaon",
  "Kolhapur",
  "Latur",
  "Mumbai",
  "Nagpur",
  "Nanded",
  "Nasik",
  "Osmanabad",
  "Parbhani",
  "Pune",
  "Raigad",
  "Ratnagiri",
  "Satara",
  "Sindhudurg",
  "Solapur",
  "Thane",
  "Wardha",
  "Washim",
  "Yavatmal"
],
"Manipur": [
  "Bishnupur",
  "Chandel",
  "Churachandpur",
  "Imphal East",
  "Imphal West",
  "Jiribam",
  "Kakching",
  "Kamjong",
  "Kangpokpi",
  "Noney",
  "Senapati",
  "Tamenglong",
  "Tengnoupal",
  "Thoubal",
  "Ukhrul"
],
"Meghalaya": [
  "East Garo Hills",
  "East Khasi Hills",
  "North Garo Hills",
  "Ri Bhoi",
  "South Garo Hills",
  "South West Khasi Hills",
  "West Garo Hills",
  "West Khasi Hills"
],
"Mizoram": [
  "Aizawl",
  "Champhai",
  "Hnahthial",
  "Lunglei",
  "Mamit",
  "Saiha",
  "Saitual",
  "Serchhip"
],
"Nagaland": [
  "Dimapur",
  "Kiphire",
  "Kohima",
  "Longleng",
  "Mokokchung",
  "Mon",
  "Phek",
  "Tuensang",
  "Wokha",
  "Zunheboto"
],
"Odisha": [
  "Angul",
  "Baleswar",
  "Bargarh",
  "Bhadrak",
  "Balangir",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Ganjam",
  "Gajapati",
  "Kandhamal",
  "Kendrapara",
  "Kendujhar",
  "Khurda",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Sonepur",
  "Jagatsinghpur",
  "Jajpur",
  "Bhawanipatna"
],
"Puducherry": [
  "Karaikal",
  "Mahe",
  "Puducherry",
  "Yanam"
],
"Punjab": [
  "Amritsar",
  "Barnala",
  "Bathinda",
  "Fatehgarh Sahib",
  "Fazilka",
  "Gurdaspur",
  "Hoshiarpur",
  "Jalandhar",
  "Kapurthala",
  "Ludhiana",
  "Mansa",
  "Moga",
  "Patiala",
  "Roopnagar",
  "Sangrur",
  "SAS Nagar",
  "Shaheed Bhagat Singh Nagar",
  "Tarn Taran"
],
"Rajasthan": [
  "Ajmer",
  "Alwar",
  "Banswara",
  "Baran",
  "Barmer",
  "Bikaner",
  "Bundi",
  "Chittorgarh",
  "Churu",
  "Dausa",
  "Dungarpur",
  "Hanumangarh",
  "Jaipur",
  "Jaisalmer",
  "Jalore",
  "Jhunjhunu",
  "Jodhpur",
  "Kota",
  "Nagaur",
  "Pali",
  "Rajsamand",
  "Sawai Madhopur",
  "Sikar",
  "Tonk",
  "Udaipur"
],
"Sikkim": [
  "East Sikkim",
  "North Sikkim",
  "South Sikkim",
  "West Sikkim"
],
"Tamil Nadu": [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tiruppur",
  "Vellore",
  "Villupuram",
  "Virudhunagar"
],
"Telangana": [
  "Adilabad",
  "Hyderabad",
  "Jagtial",
  "Jangaon",
  "Jayashankar Bhoopalpally",
  "Jogulamba Gadwal",
  "Kamareddy",
  "Karimnagar",
  "Khammam",
  "Mahabubnagar",
  "Mancherial",
  "Medak",
  "Medchal-Malkajgiri",
  "Nalgonda",
  "Nizamabad",
  "Peddapalli",
  "Rajanna Sircilla",
  "Rangareddy",
  "Sangareddy",
  "Siddipet",
  "Suryapet",
  "Vikarabad",
  "Wanaparthy",
  "Warangal Rural",
  "Warangal Urban",
  "Yadadri Bhuvanagiri"
],
"Tripura": [
  "Dhalai",
  "Gomati",
  "Khowai",
  "North Tripura",
  "Sepahijala",
  "South Tripura",
  "Unakoti",
  "West Tripura"
],
"Uttar Pradesh": [
  "Agra",
  "Aligarh",
  "Ambedkar Nagar",
  "Amethi",
  "Amroha",
  "Auraiya",
  "Azamgarh",
  "Badaun",
  "Baghpat",
  "Bahraich",
  "Ballia",
  "Balrampur",
  "Banda",
  "Barabanki",
  "Bareilly",
  "Bijnor",
  "Budaun",
  "Bulandshahr",
  "Chandauli",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Etawah",
  "Faizabad",
  "Farrukhabad",
  "Fatehpur",
  "Firozabad",
  "Gautam Buddha Nagar",
  "Ghazipur",
  "Gonda",
  "Gorakhpur",
  "Hamirpur",
  "Hapurs",
  "Hardoi",
  "Hathras",
  "Jalaun",
  "Jaunpur",
  "Jhansi",
  "Kannauj",
  "Kanpur Dehat",
  "Kanpur Nagar",
  "Kasganj",
  "Kaushambi",
  "Kushinagar",
  "Lakhimpur Kheri",
  "Lalitpur",
  "Maharajganj",
  "Mahoba",
  "Mainpuri",
  "Mathura",
  "Mau",
  "Meerut",
  "Mirzapur",
  "Moradabad",
  "Muzaffarnagar",
  "Panchsheel Nagar",
  "Pilibhit",
  "Pratapgarh",
  "Raebareli",
  "Rampur",
  "Saharanpur",
  "Sambhal",
  "Sant Ravidas Nagar",
  "Shahjahanpur",
  "Shrawasti",
  "Siddharthnagar",
  "Sitapur",
  "Sonbhadra",
  "Sultanpur",
  "Unnao",
  "Varanasi",
  "Shamli",
  "Hapur",
  "Ayodhya",
  "Baghpat"
],
"Uttarakhand": [
  "Almora",
  "Bageshwar",
  "Chamoli",
  "Champawat",
  "Dehradun",
  "Haridwar",
  "Nainital",
  "Pauri Garhwal",
  "Pithoragarh",
  "Rudraprayag",
  "Tehri Garhwal",
  "Udham Singh Nagar",
  "Uttarkashi"
],
"West Bengal": [
  "Alipurduar",
  "Bankura",
  "Birbhum",
  "Burdwan",
  "Cooch Behar",
  "Dakshin Dinajpur",
  "Darjeeling",
  "Hooghly",
  "Howrah",
  "Jalpaiguri",
  "Jhargram",
  "Malda",
  "Medinipur",
  "Murshidabad",
  "Nadia",
  "North 24 Parganas",
  "Purulia",
  "South 24 Parganas",
  "Uttar Dinajpur",
  "Kalimpong",
  "Paschim Medinipur",
  "Purba Medinipur"
]
};

window.onload = function () {
  const dropdown = document.getElementById("destination");

  for (const state in districts) {
      if (districts.hasOwnProperty(state)) {
          const optgroup = document.createElement("optgroup");
          optgroup.label = state;

          districts[state].forEach(district => {
              const option = document.createElement("option");
              option.value = district;
              option.textContent = district;
              optgroup.appendChild(option);
          });

          dropdown.appendChild(optgroup);
      }
  }
};

// Modal and form submission logic
const modal = document.getElementById("popupModal");
const closeBtn = document.getElementById("modalCloseBtn");
const confirmBtn = document.getElementById("confirmBtn");

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

document.getElementById("search-form").addEventListener("submit", function(event) {
event.preventDefault();

const destination = document.getElementById("destination").value;
const startDate = new Date(document.getElementById("start-date").value);
const endDate = new Date(document.getElementById("end-date").value);
const minBudget = document.getElementById("min-budget").value;
const maxBudget = document.getElementById("max-budget").value;

// Logging values to ensure they are correct
console.log("Destination:", destination);
console.log("Start Date:", startDate);
console.log("End Date:", endDate);
console.log("Min Budget:", minBudget);
console.log("Max Budget:", maxBudget);

const timeDiff = Math.abs(endDate - startDate);
const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;

console.log("Days Difference:", daysDiff);

document.getElementById("destination-details").textContent = `Destination: ${destination}`;
document.getElementById("date-details").textContent = `From: ${startDate.toISOString().split('T')[0]} To: ${endDate.toISOString().split('T')[0]}`;
document.getElementById("days-details").textContent = `Number of Days: ${daysDiff}`;
document.getElementById("budget-details").textContent = `Budget Range: ${minBudget} - ${maxBudget}`;

modal.style.display = "block";
});

confirmBtn.onclick = function() {
  const destination = document.getElementById("destination").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const minBudget = document.getElementById("min-budget").value;
  const maxBudget = document.getElementById("max-budget").value;

  // Calculate number of days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = Math.abs(end - start);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  console.log(destination, startDate, endDate, minBudget, maxBudget, daysDiff);

  // Build the URL with query parameters
  const url = `search.html?destination=${encodeURIComponent(destination)}&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}&budget=${encodeURIComponent(minBudget)}-${encodeURIComponent(maxBudget)}&days=${daysDiff}`;
  
  // Redirect to search.html with the query string
  window.location.href = url;
}


      document.getElementById('profile-pic').addEventListener('click', function() {
          const dropdownMenu = document.getElementById('dropdown-menu');
          const profileDetails = document.getElementById('profile-details');
          const settingsMenu = document.getElementById('settings-menu');

          if (dropdownMenu.style.display === 'block') {
              dropdownMenu.style.display = 'none';
              profileDetails.style.display = 'none';
              settingsMenu.style.display = 'none';
          } else {
              dropdownMenu.style.display = 'block';
          }
      });

      document.getElementById('show-profile').addEventListener('click', function(event) {
          event.stopPropagation();
          const profileDetails = document.getElementById('profile-details');
          profileDetails.style.display = profileDetails.style.display === 'block' ? 'none' : 'block';
      });

      document.getElementById('close-profile').addEventListener('click', function() {
          const profileDetails = document.getElementById('profile-details');
          profileDetails.style.display = 'none';
      });

      document.getElementById('upload-photo').addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  document.getElementById('profile-pic').src = e.target.result;
                  document.getElementById('profile-summary-pic').src = e.target.result;
                  document.getElementById('profile-details-pic').src = e.target.result;
              }
              reader.readAsDataURL(file);
          }
      });

      document.querySelector('#settings-icon').addEventListener('click', function() {
          const settingsMenu = document.getElementById('settings-menu');
          settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
      });

      document.getElementById('close-settings').addEventListener('click', function() {
          const settingsMenu = document.getElementById('settings-menu');
          settingsMenu.style.display = 'none';
      });

      window.onclick = function(event) {
          const dropdownMenu = document.getElementById('dropdown-menu');
          const profileDetails = document.getElementById('profile-details');
          const settingsMenu = document.getElementById('settings-menu');
          
          if (!event.target.matches('#profile-pic') && !event.target.closest('.dropdown-menu')) {
              dropdownMenu.style.display = 'none';
              profileDetails.style.display = 'none';
              settingsMenu.style.display = 'none';
          }
      };

      function toggleNightMode() {
          const body = document.body;
          const modeIcon = document.getElementById('modeIcon');
          const modal = document.getElementById('popupModal');
          
          // Toggle the dark-mode class on the body and modal
          body.classList.toggle('dark-mode');
          modal.classList.toggle('dark-mode');

          // Change the icon and the text based on the current mode
          if (body.classList.contains('dark-mode')) {
              modeIcon.textContent = '☀️'; // Day mode icon
          } else {
              modeIcon.textContent = '🌙'; // Night mode icon
          }
      }

      function updateFileName() {
        const input = document.getElementById('id_profile_photo');
        const text = document.getElementById('file-chosen-text');

        if (input.files.length > 0) {
            text.textContent = input.files[0].name;
        } else {
            text.textContent = 'No file chosen';
        }
      }



