import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDeQWL-tvxsVjJLa1pPwXB_6mDAINPYARI",
    authDomain: "project-2814539431132233166.firebaseapp.com",
    databaseURL: "https://project-2814539431132233166.firebaseio.com",
    projectId: "project-2814539431132233166",
    storageBucket: "project-2814539431132233166.appspot.com",
    messagingSenderId: "285398439900"
};
firebase.initializeApp(config);

//Methods
//Oferta Academica
export function loadCourses(){
    return firebase.database().ref("ofertaAcademica")
        .once("value")
        .then(s=>{
            let courses = [];
            const obj = s.val();
            for(let k in obj){
                let c = obj[k];
                c["key"] = k;
                courses.push(c);
            }
            return courses;
        })
}

export default firebase;