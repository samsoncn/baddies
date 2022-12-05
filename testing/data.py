# import googlemaps
# import json
# import pprint
# import xlsxwriter
# import time

# # Define the API Key.
# API_KEY = 'AIzaSyDYBfxrTieBonDIw3UKd9pd9itfIo_ROHM'

# # Define the Client
# gmaps = googlemaps.Client(key=API_KEY)

# # Do a simple nearby search where we specify the location
# # in lat/lon format, along with a radius measured in meters
# places_result = gmaps.places_nearby(
#     location='-33.8670522,151.1957362', radius=40000, open_now=False, type='restaurant')

# time.sleep(3)

# place_result = gmaps.places_nearby(page_token=places_result['next_page_token'])

# stored_results = []

# # loop through each of the places in the results, and get the place details.
# for place in places_result['results']:

#     # define the place id, needed to get place details. Formatted as a string.
#     my_place_id = place['place_id']

#     # define the fields you would liked return. Formatted as a list.
#     my_fields = ['name', 'formatted_phone_number', 'website']

#     # make a request for the details.
#     places_details = gmaps.place(place_id=my_place_id, fields=my_fields)

#     # print the results of the details, returned as a dictionary.
#     pprint.pprint(places_details['result'])

#     # store the results in a list object.
#     stored_results.append(places_details['result'])

# # -------------- DUMPING VALUES IN EXCEL -----------------------

# # define the headers, that is just the key of each result dictionary.
# row_headers = stored_results[0].keys()

# # create a new workbook and a new worksheet.
# workbook = xlsxwriter.Workbook(
#     r'C:\Users\samsonchan\Documents\startup\testing\restoData.xlsx')
# worksheet = workbook.add_worksheet()

# # populate the header row
# col = 0
# for header in row_headers:
#     worksheet.write(0, col, header)
#     col += 1

# row = 1
# col = 0
# # populate the other rows

# # get each result from the list.
# for result in stored_results:

#     # get the values from each result.
#     result_values = result.values()

#     # loop through each value in the values component.
#     for value in result_values:
#         worksheet.write(row, col, value)
#         col += 1

#     # make sure to go to the next row & reset the column.
#     row += 1
#     col = 0

# # close the workbook
# workbook.close()


import requests
import json

url = "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails"

querystring = {
    "restaurantsId": "Restaurant_Review-g304554-d8010527-Reviews-Saptami-Mumbai_Maharashtra", "currencyCode": "USD"}

headers = {
    "X-RapidAPI-Key": "af2debb3cfmsh65a98bf834d8bdap1c8be4jsn023f8d07ad1c",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

# print(json.dumps(response.text))
with open("data.json", "w", encoding='utf8') as write_file:
    json.dump(str(response.text), write_file, ensure_ascii=False)
