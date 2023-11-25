import pandas as pd
import json
import pickle
from flask import Flask, request

app = Flask(__name__)

model = pickle.load(open('src/api/models/PersonalityTestModel.pkl', 'rb'))

@app.route('/api/python')
def example():
    received_data = {'extroversion': 4.0,
                    'neurotic': 2.4,
                    'agreeable': 3.1,
                    'conscientious': 2.2,
                    'open': 3.3}
    
    test_data = pd.DataFrame([received_data])
    prediction = model.predict(test_data)
    result = int(prediction)

    return json.dumps(result)

@app.route('/api/predict', methods=['POST'])
def predict():  
    json_data = request.get_json()
    converted_data = json.loads(json_data)

    test_data = pd.DataFrame([converted_data])
    prediction = model.predict(test_data)
    result = int(prediction)

    return json.dumps(result)

if __name__ == "__main__":
    app.run(debug=True)