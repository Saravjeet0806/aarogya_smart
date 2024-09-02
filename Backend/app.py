from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the model
model = joblib.load('model/exercise_recommendation_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = np.array([[
            data['Weight'],
            data['Height'],
            data['BMI'],
            data['Gender'],
            data['Age']
        ]])
        prediction = model.predict(features)
        return jsonify({'recommendation': int(prediction[0])})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred'})

if __name__ == '__main__':
    app.run(debug=True)
