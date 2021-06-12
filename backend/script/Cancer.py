from os import write
import  sys
import pickle
import numpy as np

features = np.array([int(feature) for feature in sys.argv[1].split(',')])

loaded_model = pickle.load(open('./script/kNeighborClassifier.pkl', 'rb'))

result = loaded_model.predict(features.reshape(1,-1))

print(result)