import os
import time
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

host = os.getenv("DB_HOST", "db")
user = os.getenv("DB_USER", "root")
password = os.getenv("DB_PASSWORD", "root123")
database = os.getenv("DB_NAME", "test_db")

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{user}:{password}@{host}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


def init_db():
    retries = 10
    while retries > 0:
        try:
            with app.app_context():
                db.create_all()
            print("Database connected successfully.")
            return
        except Exception as e:
            print(f"Database not ready, retrying... {e}")
            retries -= 1
            time.sleep(5)
    raise Exception("Database connection failed after multiple retries.")


init_db()


@app.route("/")
def home():
    return {"message": "Backend running"}


@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    student = Student(name=data["name"])
    db.session.add(student)
    db.session.commit()
    return jsonify({"id": student.id, "name": student.name}), 201


@app.route("/students", methods=["GET"])
def get_students():
    students = Student.query.all()
    return jsonify([{"id": s.id, "name": s.name} for s in students]), 200


@app.route("/students/<int:id>", methods=["GET"])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify({"id": student.id, "name": student.name}), 200


@app.route("/students/<int:id>", methods=["PUT"])
def update_student(id):
    student = Student.query.get_or_404(id)
    data = request.get_json()
    student.name = data["name"]
    db.session.commit()
    return jsonify({"id": student.id, "name": student.name}), 200


@app.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": "Deleted"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)