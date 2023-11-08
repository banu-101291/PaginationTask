const dataSet = [
   
    {
      "_id": 7703354,
      "name": "Alison Joseph"
    },
    {
        "_id": 7703355,
        "name": " Joseph"
      },
      {
        "_id": 7703356,
        "name": "Simon shek"
      },
      {
        "_id": 7703357,
        "name": "Reebecca"
      },
      {
        "_id": 7703358,
        "name": "Randomm"
      },
      {
        "_id": 7703354,
        "name": " Joseph"
      },
      {
          "_id": 7703355,
          "name": " anusha"
        },
        {
          "_id": 7703356,
          "name": "begam"
        },
        {
          "_id": 7703357,
          "name": "revathi"
        },
        {
          "_id": 7703358,
          "name": "Randomm"
        }, {
            "_id": 7703354,
            "name": "Kanaga"
          },
          {
              "_id": 7703355,
              "name": " Jsenthil"
            },
            {
              "_id": 7703356,
              "name": "Sikiim"
            },
            {
              "_id": 7703357,
              "name": "Reebecca"
            },
            {
              "_id": 7703358,
              "name": "Randomm"
            }, {
                "_id": 7703354,
                "name": "Akiila"
              },
              {
                  "_id": 7703355,
                  "name": " Joseph"
                },
                {
                  "_id": 7703356,
                  "name": "Simon shek"
                },
                {
                  "_id": 7703357,
                  "name": "Reebecca"
                },
                {
                  "_id": 7703358,
                  "name": "Randomm"
                },
                {
                    "_id": 7703355,
                    "name": " Jsenthil"
                  },
                  {
                    "_id": 7703356,
                    "name": "Kalifath"
                  },
                  {
                    "_id": 7703357,
                    "name": "Nataraj"
                  },
                  {
                    "_id": 7703358,
                    "name": "Reshma"
                  }, {
                      "_id": 7703354,
                      "name": "Kairun"
                    },
                    {
                        "_id": 7703355,
                        "name": " Renosteephen"
                      },
                      {
                        "_id": 7703356,
                        "name": "REbeccaSimon"
                      },
                      {
                        "_id": 7703357,
                        "name": "Crazy"
                      },
                      {
                        "_id": 7703358,
                        "name": "Sherintaj"
                      },
                      {
                        "_id": 7703355,
                        "name": " Karthik"
                      },
                      {
                        "_id": 7703356,
                        "name": "Johnson"
                      },
                      {
                        "_id": 7703357,
                        "name": "Iceberg"
                      },
                      {
                        "_id": 7703358,
                        "name": "Govindh"
                      }, {
                          "_id": 7703354,
                          "name": "Fairoz"
                        },
                        {
                            "_id": 7703355,
                            "name": " Elumalai"
                          },
                          {
                            "_id": 7703356,
                            "name": "Danaraj"
                          },
                          {
                            "_id": 7703357,
                            "name": "Cattyiy"
                          },
                          {
                            "_id": 7703358,
                            "name": "Backya"
                          },
      
  


 
  ];
  
  const list = document.querySelector("#data-list");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const pageNumberValue = document.querySelector("#page-number")
  
  let startIndex = 0;
  let endIndex = 10;
  let pageNumber = 0;
  
  pageNumberValue.value = pageNumber;

  const mapData = () => {
    const slicedData = dataSet
      .slice(startIndex, endIndex)
      .map((row) => {
        return `<li>${row.name}</li>`;
      })
      .join("");
  
    list.innerHTML = slicedData;
  }
  
  mapData();

  prevButton.addEventListener("click", () => {
    if (endIndex < 20) {
      startIndex = 0;
      endIndex = 10;
    } else {
      startIndex -= 10;
      endIndex -= 10;
      pageNumber -= 1;
    }
    pageNumberValue.value = pageNumber;
    mapData();
  });


  nextButton.addEventListener("click", () => {
    if (endIndex < dataSet.length) {
      startIndex += 10;
      endIndex += 10;
      pageNumber += 1;
    }
    pageNumberValue.value = pageNumber;
    mapData();
  });


  pageNumberValue.addEventListener("change",(e) => {
    let currentPageNumber = Number.parseInt(e.target.value)
    let maxPageNumber = Math.floor(dataSet.length/10)
    if(currentPageNumber > maxPageNumber){
     currentPageNumber = maxPageNumber;
      e.target.value = value
    }
    else if(currentPageNumber < 0){
      currentPageNumber = 0;
      e.target.value = value
    }
     startIndex = currentPageNumber * 10;
     endIndex = startIndex + 10
     pageNumber = currentPageNumber
     mapData();
  })



