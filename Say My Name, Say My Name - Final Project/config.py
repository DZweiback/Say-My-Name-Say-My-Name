# New York Times API Key
NYT_api_key = "fdc5b3a60da546589b764842a8631fe3"

# Census API Key
OWM_api_key = "6e39cc29ab065e65d3cadcbe1840cce8"

# Open Weather API Key
weather_api_key = "6e39cc29ab065e65d3cadcbe1840cce8"

# Goodgle API Key
gkey = "AIzaSyC4BklMgTNHMELGcsGzkWLRq8yknevd8AE"

# Census API Key
census_api_key = "8e5e5cd8629bf6204e2def9eaa69f35f124550a3"

# Twitter API Keys
consumer_key = "3oHk84UgT79mRjjzUCR12AsSu"
consumer_secret = "USNBwvofn6z1N0vYcTiLCJtHIZYdDC7siWOJNyjncYDPMRGBxP"
access_token = "1040758194744815617-KyCo6vYdkaHlxjf34tljgjSFJSGcsr"
access_token_secret = "TDQStqdGnQbiOWpeFVVGbcPxUd670lYTNBt67FopbQgSl"

# Data.Gov API Key
dataGov_key = "GXpkxJwa0UzkIlpioPk6vy06hyX8C6SCHu9sqzIo"

# Local MySQL Database Info
local_gwsis_dbname = 'gwsis'
local_gwsis_dbuser = 'root'
local_gwsis_dbpwd = 'djzBootCamp2019!'

# Local pyMongo connections
# After importing the pymongo library into the application, a connection with a running instance of
# Mongodb must be establised using pymongo.MongoClient(connection string)
# 'mongodb://localhost:27017' is the connection string that connects to mongodb. The general syntax is 
# mongodb://USERNAME:PASSWORD@HOST:PORT. Since the default local host does not have a username or password set,
# the string for local instances of MongoDB is mongodb://localhost:27017. 27017 is the default port used by
# MongoDB
import pymongo
import datetime
conn = 'mongodb://localhost:2017'
client = pymongo.MongoClient(conn)
# Define or Declare the database in Mongo; This syntax creates the db as a Mongodb
db = client.DATABASENAME_db
# Declare the collection; This syntax creates the document/table
collection = db.DATABASENAME_db

# Local AWS Database Info
gwsis_dbname = 'gwsis'
gwsis_dbuser = 'root'
gwsis_dbpwd = 'AWS_djzBootCamp2019!'

# Cloud AWS Database Info
remote_db_endpoint = 'codingbootcamp.cypd6auw3ehl.us-east-2.rds.amazonaws.com'
remote_db_port = '3306'
remote_gwsis_dbname = 'gwsis'
remote_gwsis_dbuser = 'DZweiback'
remote_gwsis_dbpwd = 'djzBootCamp2019!'

# Salesforce 
sf_grant_type = 'password'
sf_client_id = '' # Consumer Key
sf_client_secret = '' # Consumer Secret
sf_username = '' # The email you use to login
sf_password = '' # Concat your password and your security token
sf_endpoint = 'https://login.salesforce.com/services/oauth2/token'

# Quandi
quandi_key = 'N65McjZHekJhaG5x2dyK'

# Mapbox
#Zweiback_BootCamp Key
dz_mapbox_key = 'sk.eyJ1IjoiendlaWJhY2siLCJhIjoiY2p0bG81eGlkMGZ5azQ0cGg5M3R6MXptciJ9.tWiebUQV2xhCyBzLQ0fD4A'