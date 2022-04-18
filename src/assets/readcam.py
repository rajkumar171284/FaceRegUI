import json
from flask import Flask,render_template,Response,request, jsonify
import cv2
from flask_cors import CORS
from pydantic import BaseModel
class GreetingModel(BaseModel):
texts: str
names: strapp=Flask(__name__) #creating app
camera=cv2.VideoCapture(0) #cam-access webcam, default-0
CORS(app)
def generate_frames():
while True:
## read the camera frame
success,frame=camera.read()
if not success:
break
else:
ret,buffer=cv2.imencode('.jpg',frame)
frame=buffer.tobytes() yield(b'--frame\r\n'
b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
# @app.route('/', methods=['GET'])
# def index():
# return render_template('index.html')# @app.route('/video')
# def video():
# return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')# @app.route('/test', methods=['GET'])
# def just():
# return 'hello world'# @app.route('/getCam',methods=['GET'])
# def
def generate_cam():
while True:
success, img = camera.read()
imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
cv2.imshow('Webcam', img)
if (cv2.waitKey(1)==ord('q')):
break
@app.route('/sendData',methods=['GET'])
def hello_world():
# cap = cv2.VideoCapture(0)
while True:
success, img = camera.read()
imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
cv2.imshow('Webcam', img)
if (cv2.waitKey(1)==ord('q')):
break # return Response(generate_cam(),mimetype='multipart/x-mixed-replace; boundary=frame')
if __name__=="__main__":
app.run(debug=True, host='0.0.0.0' , port=5000)
#pip install opencv,flask

