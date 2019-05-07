import os
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy
from flask import request

is_heroku = os.environ.get('IS_HEROKU', None)

if is_heroku:
    remote_db_endpoint = os.environ.get('remote_db_endpoint')
    remote_db_port = os.environ.get('remote_db_port')
    remote_dbname = os.environ.get('remote_dbname')
    remote_dbuser = os.environ.get('remote_dbuser')
    remote_dbpwd = os.environ.get('remote_dbpwd')
else:
    from smn_config import remote_db_endpoint, remote_db_port, remote_dbname, remote_dbuser,remote_dbpwd 

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

# AWS Database Connection
engine = create_engine(f"mysql://{remote_dbuser}:{remote_dbpwd}@{remote_db_endpoint}:{remote_db_port}/{remote_dbname}")

# Create a remote database engine connection
conn = engine.connect()

app = Flask(__name__)

# 1 WEBSITE HOME PAGE
@app.route("/")
def home():
    """Render Home Page."""
    return render_template("dz_test_index.html")

# 2 FOR STATE = returns POPULAR BABY NAMES for the STATE
@app.route("/api/home_state")
def home_state():
    """Return baby names by state using baby_names view"""
    conn = engine.connect()

    State = request.args.get('home_state')
    state_df = pd.read_sql(f"SELECT * FROM baby_names WHERE State = '{State}'",
    con=conn)

    state_df = state_df.to_dict(orient="records")

    return jsonify(state_df)


# 3 FOR YEAR of MOVIE or BIRTH = returns CHARACTERS IN MOVIES
@app.route("/api/movie_year")
def movie_year():
    """Return movie characters by year using movie characters view"""
    conn = engine.connect()

    year = request.args.get('movieyear')
    year_df = pd.read_sql(f"SELECT * FROM movie_characters WHERE release_year = {year}",
    con=conn)

    year_df = year_df.to_dict(orient="records")

    return jsonify(year_df)


# 4 FOR TITLE = returns CHARACTER NAMES IN A MOVIE
@app.route("/api/movie_title")
def movie_title():
    """Return baby/character names by movie using movie_characters view"""

    conn = engine.connect()

    title = request.args.get('movie_title')
    title_df = pd.read_sql(f"SELECT * FROM movie_chracters WHERE title = '{title}'",
    con=conn)

    title_df =title_df.to_dict(orient="records")
        
    return jsonify(title_df)

# 5 FOR YOUR_NAME = returns CHARACTERS AND MOVIES
@app.route("/api/your_name")
def your_name():
    """Return baby names by your name using movie_characters view"""
    conn = engine.connect()

    Name = request.args.get('your_name')
    yourname_df = pd.read_sql(f"SELECT * FROM movie_characters WHERE First = '{Name}' OR Second = '{Name}' OR Third = '{Name}'",
    con=conn)

    yourname_df = yourname_df.to_dict(orient="records")

    return jsonify(yourname_df)


# Test Route for State Specific Connection - runs locally
@app.route("/api/baby_names_MI")
def baby_names_MI():
    """Return baby names by state"""
    conn = engine.connect()

    #State = request.args.get('home_state')
    state_df = pd.read_sql(f"SELECT * FROM baby_names WHERE State = 'MI'",
    con=conn)

    state_df = state_df.to_dict(orient="records")

    return jsonify(state_df)

# TEST ROUTE ON LOCAL 
@app.route("/default/<name>")
def default(name):
    return 'the value is:' + name

   
# title_df = pd.read_sql(f"Select Name,count(*) as Name_Count FROM baby_names WHERE Name  = '{popular}' and Year in (2015,2016,2017) GROUP BY Name", con=conn)
        

# Start the development server using the run() method
if __name__ == '__main__':
    app.run(debug=True)