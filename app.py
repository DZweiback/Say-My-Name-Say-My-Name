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
    from smn_config import remote_db_endpoint, remote_db_port, remote_dbname, remote_dbuser, remote_dbpwd 

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

@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")

@app.route("/api/baby_names_by_state")
def baby_names_by_state():
    """Return baby names by state"""

    conn = engine.connect()

    # THE LIMIT IS TEMPORARY
    baby_names_df = pd.read_sql('select * from baby_names_by_state limit 1000', con=conn)
    # THE LIMIT IS TEMPORARY

    baby_names_df = baby_names_df.to_dict()
    #baby_names_df = baby_names_df.to_dict(orient="records")

    return jsonify(baby_names_df)

@app.route("/api/popular_names")
def popular_names():
    """Return baby names by state"""

    conn = engine.connect()

    # THE HARDCODING IS TEMPORARY
    popular_df = pd.read_sql("select  State,Name,count(*) as Name_Count from baby_names_by_state where State = 'IL' and Year in (2015,2016,2017) group by Name", con=conn)
    # THE HARDCODING IS TEMPORARY

    popular_df =popular_df.to_dict(orient="records")

    return jsonify(popular_df)


@app.route("/api/movie_characters")
def movie_characters():
    """Return movie characters"""

    year = request.args.get('year')

    conn = engine.connect()

    char_df = pd.read_sql(f"select * from movie_characters where year = '{year}'", con=conn)

    char_df = char_df.to_dict(orient="records")

    return jsonify(char_df)

#if __name__ == '__main__':
    #app.run(debug=True)