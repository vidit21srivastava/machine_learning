import img_Cancer from "../../images/Cancer.webp";
import img_BoardGame from "../../images/BoardGame.webp";
import img_Diabetes from "../../images/Diabetes.webp";
import img_Digit from "../../images/Digit.webp";
const ML_models = [
{
    url: "Cancer",
    github: "https://github.com/sg60692/machine_learning/tree/main/Jupyter-notebooks/BreastCancerClassification",
    img: img_Cancer,
    dataset: "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/",
    navname:"Cancer Classification",
    name: "Breast Cancer Classification",
    features: ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape', 'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei', 'bland_chromatin', 'normal_nucleoli', 'mitoses'],
    algorithm: "K Nearest Neighbour Classification",
    subheading: "Classifies the Breast Cancer type as malignant and benign",
    description: "This algorithm calculates the K nearest points from the input feature vector from training data set, the class assigned to the input is then calculated by taking the most frequently occuring class from the K neighbours, weighted by their distances.",
},
{
    url: "Diabetes",
    github: "https://github.com/sg60692/machine_learning/tree/main/Jupyter-notebooks/Diabetes%20Detection",
    img: img_Diabetes,
    navname:"Diabetes Detection",
    dataset: "https://www.kaggle.com/uciml/pima-indians-diabetes-database",
    name: "Diabetes Detection",
    features: ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"],
    algorithm: "Neural Network",
    subheading: "Predicts if a person has diabetes or not using his/her medical records",
    description: "Traditionally doctors and medicians have been predicting out the probability of having chronic dieseases using person's medical history, but with the development of Machine Learning and sophisticated algorithm, the machine learns to predict the odds of having these diseases with just hours or even minutes of training. Thus it automates this task and helps doctors to predict more confidently with less bias."
},
{
    url: "BoardGame",
    github: "https://github.com/sg60692/machine_learning/tree/main/Jupyter-notebooks/Board%20Game%20Review%20Predictions",
    img: img_BoardGame,
    navname:"Board Game Review",
    dataset: "https://github.com/sg60692/machine_learning/blob/main/Jupyter-notebooks/Board%20Game%20Review%20Predictions/games.csv",
    name: "Board Game Review Prediction",
    features: ['yearpublished', 'minplayers', 'maxplayers', 'playingtime', 'minage', 'users_rated', 'total_owners', 'total_traders', 'total_wanters', 'total_wishers', 'total_comments', 'total_weights', 'average_weight'],
    algorithm: "Linear and Random Forest Regressor",
    subheading: "Predicts if your game has what it takes to be the best",
    description: "Board game review predictions are used to predict game popularity in the near future. This is very helpful for industries to decide which games will generate revenue for it. In this model, we have used linear regression model to predict a game's future average rating based onboard games properties such as max_players, min_players, playing_time, etc."
},
{
    url: "DigitRecognition",
    github: "https://github.com/sg60692/machine_learning/tree/main/Jupyter-notebooks/Digit%20Identifier",
    img: img_Digit,
    dataset: "http://yann.lecun.com/exdb/mnist",
    navname:"Digit Recongnition",
    subheading: "Just a fun digit recognition tool",
    name: "Digit Recongnition",
    description:"We have built a handwritten digit recognition model using LeNet-5 CNN model. This technology has a vast ranging applications such as Bank Cheque/Documents processing, Document Verification system(OCR and ID verification) and Examination grading by digitization, etc",
    algorithm: "Convolutional Neural Network(CNN)"
}
]
export default ML_models;