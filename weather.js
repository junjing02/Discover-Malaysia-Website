function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);


    document.getElementById('datetime').textContent = `${dateString}`;
}

// Update the date and time when the page loads
updateDateTime();

// Optionally, update the time every second
setInterval(updateDateTime, 1000);

$(document).ready(function(){
    var currentDate = new Date().toISOString().split('T')[0];
    var url = "https://api.data.gov.my/weather/forecast?contains=St@location__location_id";
    $.get(url,function(data){
        
        data.forEach(element => {
            let td = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            if(element.date == currentDate){
                if(element.morning_forecast == "Berjeburu"){
                    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg.setAttribute("viewBox", "0 0 640 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z");

                    // Append the <path> element to the <svg> element
                    svg.appendChild(path);
                    svg.style.width = "35px";
                    td.appendChild(svg);
                    $("[id='" + element.location.location_name + "']").append(td);
                }
                else if(element.morning_forecast == "Tiada hujan"){
                    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z");

                    // Append the <path> element to the <svg> element
                    svg.appendChild(path);
                    svg.style.width = "35px";
                    td.appendChild(svg);
                    $("[id='" + element.location.location_name + "']").append(td);
                }
                else{
                    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path (this is the SVG path data)
                    path.setAttribute("d", "M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z");

                    // Append the <path> element to the <svg> element
                    svg.appendChild(path);
                    svg.style.width = "35px";
                    td.appendChild(svg);
                    $("[id='" + element.location.location_name + "']").append(td);
                }


    
                if(element.afternoon_forecast == "Berjeburu"){
                    let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg2.setAttribute("viewBox", "0 0 640 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z");

                    // Append the <path> element to the <svg> element
                    svg2.appendChild(path);
                    svg2.style.width = "35px";
                    td2.appendChild(svg2);
                    $("[id='" + element.location.location_name + "']").append(td2);
                }
                else if(element.afternoon__forecast == "Tiada hujan"){
                    let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg2.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z");

                    // Append the <path> element to the <svg> element
                    svg2.appendChild(path);
                    svg2.style.width = "35px";
                    td2.appendChild(svg2);
                    $("[id='" + element.location.location_name + "']").append(td2);
                }
                else{
                    let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg2.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path (this is the SVG path data)
                    path.setAttribute("d", "M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z");

                    // Append the <path> element to the <svg> element
                    svg2.appendChild(path);
                    svg2.style.width = "35px";
                    td2.appendChild(svg2);
                    $("[id='" + element.location.location_name + "']").append(td2);
                }

    
                if(element.night_forecast == "Berjeburu"){
                    let svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg3.setAttribute("viewBox", "0 0 640 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z");

                    // Append the <path> element to the <svg> element
                    svg3.appendChild(path);
                    svg3.style.width = "35px";
                    td3.appendChild(svg3);
                    $("[id='" + element.location.location_name + "']").append(td3);
                }
                else if(element.night_forecast == "Tiada hujan"){
                    let svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    // Set the attributes for the SVG element
                    svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg3.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path
                    path.setAttribute("d", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z");

                    // Append the <path> element to the <svg> element
                    svg3.appendChild(path);
                    svg3.style.width = "35px";
                    td3.appendChild(svg3);
                    $("[id='" + element.location.location_name + "']").append(td3);
                }
                else{
                    let svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg3.setAttribute("viewBox", "0 0 512 512");

                    // Create the <path> element
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                    // Set the 'd' attribute for the path (this is the SVG path data)
                    path.setAttribute("d", "M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z");

                    // Append the <path> element to the <svg> element
                    svg3.appendChild(path);
                    svg3.style.width = "35px";
                    td3.appendChild(svg3);
                    $("[id='" + element.location.location_name + "']").append(td3);
                }

            }
            
            

        });
    })
})

