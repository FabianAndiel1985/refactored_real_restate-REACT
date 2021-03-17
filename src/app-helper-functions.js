 import fire from './config/fire';

  export function login(e,user,password) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(user, password).then((u) => {console.log(u);localStorage.setItem("user", u)}).catch((error) => {
            console.log("didnt work");
        });
    }

 export function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }



export function getGreeting() {
  let daytime = "morning";

  if(18 >= getTime() && getTime() >= 12) {
      daytime= "afternoon";
  }

  else if(23 >= getTime() && getTime() >= 19) {
      daytime= "evening";
  }
  return daytime;
  }

  export function handleChange(element) {
    const {value} = element.target;
    return value;
}

export function getTime() {
	 let d = new Date();
      return d.getHours();
}


export function getFontColour(daytime) {
	if (daytime == "morning" || daytime == "afternoon" ) {
	        return "green";
	      }
	      return "white";
}


export function changeShowProperty(lgShow,setLgShow) {
  if(!lgShow) 
  {
    return true;
  }

  return false;

}


export function  onFocus(element) {
    element.target.style.border = "3px solid green";
  }

export function onBlur(element) {
    element.target.style.border = "";
  }
