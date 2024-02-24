// Function to add Janaushodhi store data to the database
function addJanaushodhiStore(address, city) {
    // Push a new store entry to the database under 'JanaushodhiStores/Punjab'
    database.ref('JanaushodhiStores/Punjab').push({
      Address: address,
      City: city
    }, function(error) {
      if (error) {
        console.error("Error adding store: ", error);
      } else {
        console.log("Store added successfully!");
      }
    });
  }
var janaushodhiStoresData={
    "stores": [
        {
          "City": "Amritsar",
          "Address": "Gali No. 8, Amritsar - 143002 (Near Gurudwara Gurprakash)"
        },
        {
          "City": "Ludhiana",
          "Address": "Shop No32, 33, Pritam Colony, Futta Road, Ludhiana - 141016 (Giaspura)"
        },
        {
          "City": "Jalandhar",
          "Address": "Shop 247, Babrik CHOWK, BASTI GUZAN, Jalandhar - 144002 (Opp Chawla Karyana Store)"
        },
        {
            "City": "Jalandhar",
            "Address": "Pradhan Mantri Bhartiya Jan Aushadhi Kendra, Post Office Road, Goraya, Jalandhar - 144409 (Near Ino Printing Press Goraya)"
          },
          {
            "City": "Jalandhar",
            "Address": "2, New Guru Teg Bahadur Nagar, Friends Colony, Guru Teg Bahadur Nagar, Jalandhar - 144003 (Opposite Gate No. 2)"
          },
          {
            "City": "Ludhiana",
            "Address": "61 B New Ram Nagar, Stret No 1, 33 Feet Road, Mundian Kalan, Ludhiana - 141015 (Near Shivsakti Durga Mandir)"
          },
          {
            "City": "Amritsar",
            "Address": "The Mall, Amritsar - 143001"
          },
          {
            "City": "Patiala",
            "Address": "Cantt Road, Moti Bagh Colony, Moti Bagh, Patiala - 147001"
          },
          {
            "City": "Amritsar",
            "Address": "Shop No. 1, Loharka Road, Amritsar - 143601"
          },
          {
            "City": "Jalandhar",
            "Address": "Outside Mohalla No. 5, Poras Road, Jalandhar Cantt, Jalandhar - 144005"
          }
        
        
      ]
}


  addJanaushodhiStore(janaushodhiStoresData);

// Function to fetch and display Janaushodhi stores based on city
function displayJanaushodhiStores() {
    var storeList = document.getElementById('storeList');
    storeList.innerHTML = ""; // Clear previous results
  
    var cityInput = document.getElementById('cityInput').value.trim().toLowerCase();
  
    // Reference to JanaushodhiStores in the database
    var storeRef = database.ref('JanaushodhiStores');
  
    // Fetch data once from the database
    storeRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var city = childSnapshot.key.toLowerCase();
        if (city === cityInput) {
          var stores = childSnapshot.val();
          for (var storeKey in stores) {
            if (stores.hasOwnProperty(storeKey)) {
              var address = stores[storeKey].Address;
              var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent(address) + "' target='_blank'>" + address + "</a>";
              var listItem = document.createElement('div');
              listItem.innerHTML = link;
              storeList.appendChild(listItem);
            }
          }
        }
      });
    });
  }
  