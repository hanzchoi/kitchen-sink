from flask import Flask, __version__
from sqlalchemy import create_engine
import os

app = Flask(__name__)
engine = create_engine(os.environ['DATABASE_URL'], echo=True)

@app.route('/')
def hello_world():
    with engine.connect() as conn:
        rows = conn.execute('SELECT version()').fetchone()
        s = 'flask version: ' + __version__ + '<br>\n';
        s += 'postgres version: ' + rows['version'] + '<br>\n';
        return s

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ['PORT'])
