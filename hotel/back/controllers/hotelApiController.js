const {apiUrl, hotel_api_headers} = require('../keys');

const show_hotels = async (req, res) => {
    let {id}= req.query;
    if(id==undefined)id=10;
    console.log(id)
    try {
        const response = await fetch(`${apiUrl}/hotel-content-api/1.0/hotels/${id.toString()}/details`, {
            method: 'GET',
            headers: hotel_api_headers
        });
        const data = await response.json();
        console.log(data)
        //console.log(data.hotels[0]);
        res.status(200).json({"success":data});
    } catch(err) {
        console.log(err);
        res.status(400);
    }
}

const show_hotels_by_id = async (req, res) => {
    const id = req.params.hotelCodes;
    try {
        const response = await fetch(apiUrl+`/hotel-content-api/1.0/hotels/2/details`, {
            method: 'GET',
            headers: hotel_api_headers
        });
        const data = await response.json();
        //console.log(data.hotels[0]);
        res.status(200).json({"success":data});
    } catch(err) {
        console.log(err);
        res.status(400);
    }
}

const show_countries = async (req,res)=>{
    try{
        const response = await fetch(apiUrl+"/hotel-content-api/1.0/locations/countries", {
            method: 'GET',
            headers: hotel_api_headers
        });
        const data = await response.json();
        
        res.status(200).json({"success":data});
    }
    catch(err){
        console.log(err);
        res.status(400);
    }
}



module.exports = {
    show_hotels,
    show_hotels_by_id,
    show_countries

}

