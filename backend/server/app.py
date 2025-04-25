from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

translations = {
    "en": {"morning": "Good morning", "afternoon": "Good afternoon", "evening": "Good evening"},
    "hi": {"morning": "सुप्रभात", "afternoon": "नमस्कार", "evening": "शुभ संध्या"},
    "es": {"morning": "Buenos días", "afternoon": "Buenas tardes", "evening": "Buenas noches"},
    "fr": {"morning": "Bonjour", "afternoon": "Bon après-midi", "evening": "Bonsoir"},
    "de": {"morning": "Guten Morgen", "afternoon": "Guten Tag", "evening": "Guten Abend"}
}

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name', '')
    lang = data.get('lang', 'en')

    if not name:
        return jsonify({"error": "Name is required"}), 400

    phrases = translations.get(lang, translations['en'])

    hour = datetime.now().hour
    if hour < 12:
        time_phrase = phrases['morning']
    elif hour < 18:
        time_phrase = phrases['afternoon']
    else:
        time_phrase = phrases['evening']

    greeting = f"{time_phrase}, {name}!"
    return jsonify({"greeting": greeting})

if __name__ == '__main__':
    app.run(debug=True)
