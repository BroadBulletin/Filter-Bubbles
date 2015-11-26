//Webhose API 

//https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=(Baby)%20performance_score%3A%3E0&site=dailymail.co.uk&site_type=news

//https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=(Baby)%20performance_score%3A%3E5&site=dailymail.co.uk&site_type=news

console.log("WebHose is all good")

var key = 'https://webhose.io/search?token=ec4e5f81-890c-4ed6-b7ee-ac84249e74e4&format=json&q=('

var performance = ')%20performance_score%3A%3E0'

var site_mail = '&site=dailymail.co.uk'

var site_bbc = '&site=bbc.co.uk'

var site_guardian = '&site=theguardian.com'

var type = '&site_type=news'

var recent = 'Osborne'

$.ajax(
{
	dataType: "json",
	url: URL, // the url to get data from
	success: handleData // the function to execute once we get data back from WebHose
})

function handleData( json )
{

    
	var results = json.data
    
    console.log(json)

	var total = results.length
	var counter = 0
	while (counter < total) 

{
console.log(counter)

var results = myResults[counter]

console.log(results)

//increment counter by 1
//counter = counter + 1
//counter += 1
counter ++

}


}