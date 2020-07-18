// var json3 = {
//     "count": 2,
//     "items": [{
//         "title": "Apple iPhone 4S Sale Cancelled in Beijing Amid Chaos (Design You Trust)",
//         "description": "Advertise here with BSA Apple cancelled its scheduled sale of iPhone 4S in one of its stores in China’s capital Beijing on January 13. Crowds outside the store in the Sanlitun district were waiting on queues overnight. There were incidents of scuffle between shoppers and the store’s security staff when shoppers, hundreds of them, were told that the sales [...]Source : Design You TrustExplore : iPhone, iPhone 4, Phone",
//         "link": "http://wik.io/info/US/309201303",
//         "timestamp": 1326439500,
//         "image": null,
//         "embed": null,
//         "language": null,
//         "user": null,
//         "user_image": null,
//         "user_link": null,
//         "user_id": null,
//         "geo": null,
//         "source": "wikio",
//         "favicon": "http://wikio.com/favicon.ico",
//         "type": "blogs",
//         "domain": "wik.io",
//         "id": "2388575404943858468"
//       },
//       {
//         "title": "Apple to halt sales of iPhone 4S in China (Fame Dubai Blog)",
//         "description": "SHANGHAI – Apple Inc said on Friday it will stop selling its latest iPhone in its retail stores in Beijing and Shanghai to ensure the safety of its customers and employees. Go to SourceSource : Fame Dubai BlogExplore : iPhone, iPhone 4, Phone",
//         "link": "http://wik.io/info/US/309198933",
//         "timestamp": 1326439320,
//         "image": null,
//         "embed": null,
//         "language": null,
//         "user": null,
//         "user_image": null,
//         "user_link": null,
//         "user_id": null,
//         "geo": null,
//         "source": "wikio",
//         "favicon": "http://wikio.com/favicon.ico",
//         "type": "blogs",
//         "domain": "wik.io",
//         "id": "16209851193593872066"
//       }
//     ]
//   };

var json3 = [];

  
  const parsed = jsonText => JSON.parse(jsonText);
            //creates a new file reader object
            const fr = new FileReader();

            function writeInfo (data) {
                //modifies the DOM by writing info into different elements
                console.log(data)
                // document.getElementById('traveler_num').innerHTML = 'Traveler: ' + data.traveler_num;
                // document.getElementById('first_name').innerHTML = 'First Name: ' + data.first_name;

                const items = data;
                const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
                const header = Object.keys(items[0])
                let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
                csv.unshift(header.join(','))
                csv = csv.join('\r\n')
                console.log(csv);



                // var link = document.createElement("a");    
                // link.id="lnkDwnldLnk";
                // document.body.appendChild(link);
                // blob = new Blob([csv], { type: 'text/csv' }); 
                // var csvUrl = window.webkitURL.createObjectURL(blob);
                // var filename = 'convertedFile.csv';
                // jQuery("#lnkDwnldLnk")
                // .attr({
                //     'download': filename,
                //     'href': csvUrl
                // });
                // jQuery('#lnkDwnldLnk')[0].click();
                // document.body.removeChild(link);

                blob = new Blob([csv], { type: 'text/csv' });
                let url = window.URL.createObjectURL(blob);
                let link = document.createElement('a')
                link.href = url
                link.download = "convertedfile.csv";
                link.click()
                link.removeAttribute("disabled");
            };


            function handleFileSelect (evt) {
                //function is called when input file is Selected
                //calls FileReader object with file
                // console.log(evt.target.file[0]);
                fr.readAsText(evt.target.files[0])
            };

            fr.onload = e => {
                //fuction runs when file is fully loaded
                //parses file then makes a call to writeInfo to display info on page
                writeInfo(parsed(e.target.result));
            };

            //event listener for file input
            document.getElementById('jsonfile').addEventListener('change', handleFileSelect, false);


            
