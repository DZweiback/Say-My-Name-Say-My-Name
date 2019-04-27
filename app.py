import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

from config import remote_db_endpoint, remote_db_port, remote_dbname, remote_dbuser, remote_dbpwd 

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
    return render_template("test.html")

@app.route("/baby_names_by_state")
def baby_names_by_state():
    """Return baby names by state"""

    conn = engine.connect()

    # THE LIMIT IS TEMPORARY
    baby_names_df = pd.read_sql('select * from baby_names_by_state limit 1000', con=conn)
    # THE LIMIT IS TEMPORARY

    baby_names_df = baby_names_df.to_dict()
    #baby_names_df = baby_names_df.to_dict(orient="records")

    return jsonify(baby_names_df)

if __name__ == '__main__':
    app.run(debug=True)