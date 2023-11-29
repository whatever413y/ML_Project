import pandas as pd
import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = pickle.load(open('src/api/models/PersonalityTestModel.pkl', 'rb'))

@app.route('/api/predict', methods=['POST'])
def predict():  
    json_data = request.get_json()
    test_data = pd.DataFrame([json_data])
    prediction = model.predict(test_data)
    result = int(prediction)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)